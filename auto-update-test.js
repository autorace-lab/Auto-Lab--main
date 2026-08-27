

const https = require("https");
const fs = require("fs");
const { execSync, execFileSync } = require('child_process');

const headers = {
    "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Safari/605.1.15",
    "Accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language":
        "ja-JP,ja;q=0.9"
};

async function fetchTodayRaces() {

    return new Promise((resolve, reject) => {

        const options = {
            hostname: "autorace.jp",
            path: "/race_info/XML/Hold/Today",
            method: "GET",
            headers
        };

        const req = https.request(
            options,
            res => {

                const chunks = [];

                res.on("data", chunk => {
                    chunks.push(chunk);
                });

                res.on("end", () => {

                    try {

                        const json =
                            JSON.parse(
                                Buffer.concat(chunks)
                                    .toString("utf8")
                            );

                        if (json.result !== "Success") {
                            reject(
                                new Error(
                                    "Hold/Today取得失敗"
                                )
                            );
                            return;
                        }

                        const today =
                            json.body?.today || [];

                        fs.writeFileSync(
                            "today-races.json",
                            JSON.stringify(
                                today,
                                null,
                                2
                            ),
                            "utf8"
                        );

                        console.log(
                            `今日の開催を更新: ${today.length}場`
                        );

                        resolve(today);

                    } catch (error) {

                        reject(error);

                    }
                });
            }
        );

        req.on("error", reject);

        req.end();
    });
}

const WAIT_MIN_MS = 5000;
const WAIT_MAX_MS = 10000;

function wait(ms) {
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}


function randomWait() {
    const ms =
        Math.floor(
            Math.random() *
            (WAIT_MAX_MS - WAIT_MIN_MS + 1)
        ) + WAIT_MIN_MS;

    const seconds =
        (ms / 1000).toFixed(1);

    console.log(
        `次のRまで ${seconds}秒待機`
    );

    return wait(ms);
}

function getTodayDate() {
    return new Date()
        .toLocaleDateString(
            "sv-SE",
            {
                timeZone: "Asia/Tokyo"
            }
        );
}

// =========================
// GitHub 自動反映
// =========================



function pushChangedRaceData() {

    try {

        // -------------------------
        // GitHubへ反映する対象
        // -------------------------

        const raceJsonFiles =
            fs
                .readdirSync(".")
                .filter(file =>
                    /^[a-z0-9-]+-(1[0-2]|[1-9])r(?:-result)?\.json$/i
                        .test(file)
                );

        const rootFiles = [
            "today-races.json",
            "race-final-list.json",
            "selected-track-rates.json",
            "track-rates.json"
        ];

        const profileFiles =
            fs.existsSync("profiles")
                ? fs
                    .readdirSync("profiles")
                    .filter(file =>
                        /^\d+\.json$/.test(file)
                    )
                    .map(file =>
                        `profiles/${file}`
                    )
                : [];

        const targetFiles = [
            ...rootFiles,
            ...raceJsonFiles,
            ...profileFiles
        ]
        .filter(file =>
            fs.existsSync(file)
        );

        if (targetFiles.length === 0) {

            console.log(
                "GitHub更新: 対象データなし"
            );

            return;

        }

        // -------------------------
        // 変更確認
        // -------------------------

        const status =
            execSync(
                "git status --short",
                {
                    encoding: "utf8"
                }
            )
            .trim();

        const changedFiles =
            status
                ? status
                    .split(/\r?\n/)
                    .map(line => line.slice(3).trim())
                    .filter(file => targetFiles.includes(file))
                : [];

        console.log("Git変更確認:");
        console.log(
            changedFiles.join("\n") || "変更なし"
        );

        if (changedFiles.length === 0) {

            console.log(
                "GitHub更新: データ変更なし → pushなし"
            );

            return;

        }

        console.log("");
        console.log(
            "📦 Auto-Labデータ変更を検出"
        );

        // -------------------------
        // 対象ファイルだけstage
        // -------------------------

        for (const file of changedFiles) {

            execSync(
                `git add -- "${file}"`,
                {
                    stdio: "inherit"
                }
            );

        }

        // -------------------------
        // commit
        // -------------------------

        execSync(
            'git commit -m "Auto-Lab 自動データ更新"',
            {
                stdio: "inherit"
            }
        );

        // -------------------------
        // push
        // -------------------------

        execSync(
            "git push",
            {
                stdio: "inherit"
            }
        );

        console.log("");
        console.log(
            "✅ GitHubへの自動反映完了"
        );

    } catch (error) {

        console.error(
            "❌ GitHub自動反映失敗:",
            error.message
        );

    }
}
function getProgramSession(
    placeKey,
    raceDate,
    raceNo
) {
    return new Promise((resolve, reject) => {

        const path =
            `/race_info/Program/${placeKey}/${raceDate}_${raceNo}`;

        const req = https.request({
            hostname: "autorace.jp",
            path,
            method: "GET",
            headers
        }, res => {

            const cookies =
                res.headers["set-cookie"] || [];

            const cookieHeader =
                cookies
                    .map(cookie =>
                        cookie.split(";")[0]
                    )
                    .join("; ");

            const xsrfCookie =
                cookies.find(cookie =>
                    cookie.startsWith(
                        "XSRF-TOKEN="
                    )
                );

            if (!xsrfCookie) {

                reject(
                    new Error(
                        `${placeKey} ${raceNo}R: XSRF-TOKENなし`
                    )
                );

                return;
            }

            const xsrfToken =
                decodeURIComponent(
                    xsrfCookie
                        .split(";")[0]
                        .replace(
                            "XSRF-TOKEN=",
                            ""
                        )
                );

            res.on("data", () => {});

            res.on("end", () => {

                resolve({
                    cookieHeader,
                    xsrfToken
                });

            });

        });

        req.on("error", reject);

        req.end();
    });
}

function postJson(
    path,
    postData,
    postHeaders
) {
    return new Promise((resolve, reject) => {

        const req = https.request({
            hostname: "autorace.jp",
            path,
            method: "POST",
            headers: postHeaders
        }, res => {

            const chunks = [];

            res.on("data", chunk => {
                chunks.push(chunk);
            });

            res.on("end", () => {

                try {

                    const json =
                        JSON.parse(
                            Buffer.concat(chunks)
                                .toString("utf8")
                        );

                    resolve(json);

                } catch (error) {

                    reject(error);
                }

            });

        });

        req.on("error", reject);

        req.write(postData);
        req.end();
    });
}

async function fetchRace(
    venue,
    raceDate,
    raceNo
) {

    console.log("");
    console.log(
        "================================="
    );
    console.log(
        `${venue.placeName} ${raceNo}R 取得開始`
    );
    console.log(
        "================================="
    );

    const session =
        await getProgramSession(
            venue.placeKey,
            raceDate,
            raceNo
        );

    const postData =
        JSON.stringify({
            placeCode:
                venue.placeCode,
            raceDate,
            raceNo
        });

    const postHeaders = {
        ...headers,
        "Content-Type":
            "application/json",
        "Content-Length":
            Buffer.byteLength(postData),
        "Cookie":
            session.cookieHeader,
        "X-XSRF-TOKEN":
            session.xsrfToken,
        "X-Requested-With":
            "XMLHttpRequest",
        "Referer":
            `https://autorace.jp/race_info/Program/${venue.placeKey}/${raceDate}_${raceNo}`
    };

    // -------------------------
    // OtherRaceInfo
    // -------------------------

    const otherJson =
        await postJson(
            "/race_info/OtherRaceInfo",
            postData,
            postHeaders
        );

    if (otherJson.result !== "Success") {

        throw new Error(
            `${venue.placeName} ${raceNo}R: OtherRaceInfo取得失敗`
        );
    }

    const otherBody =
        otherJson.body || {};

    // -------------------------
    // Program
    // -------------------------

    const programJson =
        await postJson(
            "/race_info/Program",
            postData,
            postHeaders
        );

    if (programJson.result !== "Success") {

        throw new Error(
            `${venue.placeName} ${raceNo}R: Program取得失敗`
        );
    }

    const programBody =
        programJson.body || {};

    // -------------------------
    // raceInfo統合
    // -------------------------

    const raceInfo = {

        placeCode:
            otherBody.placeCode ??
            programBody.placeCode,

        placeKey:
            otherBody.placeKey ??
            programBody.placeKey,

        placeName:
            otherBody.placeName ??
            programBody.placeName,

        raceNo:
            otherBody.raceNo ??
            programBody.raceNo,

        finalRaceNo:
            otherBody.finalRaceNo ??
            programBody.finalRaceNo,

        weather:
            otherBody.weather ??
            programBody.weather,

        temp:
            otherBody.temp ??
            programBody.temp,

        humid:
            otherBody.humid ??
            programBody.humid,

        roadtemp:
            otherBody.roadtemp ??
            programBody.roadtemp,

        situationCode:
            otherBody.situationCode ??
            programBody.situationCode,

        raceWeather:
            otherBody.raceWeather ??
            programBody.raceWeather,

        raceTemp:
            otherBody.raceTemp ??
            programBody.raceTemp,

        raceHumid:
            otherBody.raceHumid ??
            programBody.raceHumid,

        raceRoadtemp:
            otherBody.raceRoadtemp ??
            programBody.raceRoadtemp,

        raceSituationCode:
            otherBody.raceSituationCode ??
            programBody.raceSituationCode,

        distance:
            otherBody.distance ??
            programBody.distance,

        raceName:
            otherBody.raceName ??
            programBody.raceName,

        raceStartTime:
            otherBody.raceStartTime ??
            programBody.raceStartTime,

        telvoteTime:
            otherBody.telvoteTime ??
            programBody.telvoteTime
    };

    // -------------------------
    // 選手データ
    // -------------------------

    const players =
        programBody.playerList || [];

    const latest10List =
        programBody.latest10List || {};

    for (const player of players) {

        const history =
            latest10List[player.playerCode] || [];

        const stList =
            history
                .map(r => Number(r.stTime))
                .filter(v => !isNaN(v));

        if (stList.length > 0) {

            const averageST =
                stList.reduce(
                    (a, b) => a + b,
                    0
                ) / stList.length;

            player.averageST =
                Number(
                    averageST.toFixed(3)
                );

        } else {

            player.averageST = null;
        }
    }

    // -------------------------
    // 保存
    // -------------------------

    const output = {

        venue:
            venue.placeName,

        placeKey:
            venue.placeKey,

        raceDate,

        raceNo,

        raceInfo,

        players,

        latest10List
    };

    const fileName =
        `${venue.placeKey}-${raceNo}r.json`;

    fs.writeFileSync(
        fileName,
        JSON.stringify(
            output,
            null,
            2
        ),
        "utf8"
    );

    console.log(
        `✅ 保存完了: ${fileName}`
    );

    console.log(
        `選手数: ${players.length}`
    );

    console.log(
        `試走1号車: ${
            players[0]?.trialRunTime ?? "なし"
        }`
    );

    console.log(
        `走路: ${
            raceInfo.raceSituationCode ??
            raceInfo.situationCode ??
            "なし"
        }`
    );

    console.log(
        `走路温度: ${
            raceInfo.raceRoadtemp ??
            raceInfo.roadtemp ??
            "なし"
        }`
    );

    return {
        finalRaceNo:
            Number(
                raceInfo.finalRaceNo
            )
    };
}

// -------------------------
// その日の出走選手を重複排除
// -------------------------

function getProfileToken() {
    const fs = require('fs');
    const nullDevice = process.platform === 'win32' ? 'nul' : '/dev/null';

    execSync(
        `curl -s -c cookies-profile.txt https://autorace.jp/race_info/ > ${nullDevice}`
    );

    const cookieText = fs.readFileSync('cookies-profile.txt', 'utf8');

    const line = cookieText
        .split(/\r?\n/)
        .find(line => line.includes('\tXSRF-TOKEN\t'));

    if (!line) {
        throw new Error('XSRF-TOKEN が cookies-profile.txt に見つかりません');
    }

    const encodedToken = line.split('\t')[6];

    return decodeURIComponent(encodedToken);
}

function fetchPlayerProfile(playerCode, token) {
    const body = JSON.stringify({
        playerCode: String(playerCode)
    });

    return execFileSync(
        'curl',
        [
            '-s',
            '-b',
            'cookies-profile.txt',
            '-H', 'Content-Type: application/json',
            '-H', 'X-Requested-With: XMLHttpRequest',
            '-H', `X-XSRF-TOKEN: ${token}`,
            '-X', 'POST',
            '-d', body,
            'https://autorace.jp/race_info/Profile'
        ],
        {
            encoding: 'utf8'
        }
    );
}



function collectUniquePlayers(finalList) {

    const playerMap = new Map();

    for (const race of finalList) {

        for (
            let raceNo = 1;
            raceNo <= race.finalRaceNo;
            raceNo++
        ) {

            const fileName =
                `${race.placeKey}-${raceNo}r.json`;

            if (!fs.existsSync(fileName)) {
                continue;
            }

            try {

                const data =
                    JSON.parse(
                        fs.readFileSync(
                            fileName,
                            "utf8"
                        )
                    );

                const players =
                    data.players || [];

                for (const player of players) {

                    const playerCode =
                        player.playerCode;

                    if (!playerCode) {
                        continue;
                    }

                    if (!playerMap.has(playerCode)) {

                        playerMap.set(
                            playerCode,
                            {
                                playerCode,
                                playerName:
                                    player.playerName ??
                                    player.name ??
                                    ""
                            }
                        );

                    }
                }

            } catch (error) {

                console.error(
                    `${fileName} 選手抽出失敗:`,
                    error.message
                );

            }
        }
    }

    return [...playerMap.values()];
}

async function getFinalRaceNo(
    venue,
    raceDate
) {

    const session =
        await getProgramSession(
            venue.placeKey,
            raceDate,
            1
        );

    const postData =
        JSON.stringify({
            placeCode:
                venue.placeCode,
            raceDate,
            raceNo: 1
        });

    const postHeaders = {

        ...headers,

        "Content-Type":
            "application/json",

        "Content-Length":
            Buffer.byteLength(postData),

        "Cookie":
            session.cookieHeader,

        "X-XSRF-TOKEN":
            session.xsrfToken,

        "X-Requested-With":
            "XMLHttpRequest",

        "Referer":
            `https://autorace.jp/race_info/Program/${venue.placeKey}/${raceDate}_1`
    };

    const json =
        await postJson(
            "/race_info/OtherRaceInfo",
            postData,
            postHeaders
        );

    if (json.result !== "Success") {

        throw new Error(
            `${venue.placeName}: finalRaceNo取得失敗`
        );
    }

    const finalRaceNo =
        Number(
            json.body?.finalRaceNo
        );

    if (!finalRaceNo) {

        throw new Error(
            `${venue.placeName}: finalRaceNoなし`
        );
    }

    return finalRaceNo;


}

async function fetchAllMorningProfiles(finalList) {

    console.log("");
    console.log("=================================");
    console.log("👤 朝の選手プロフィール取得開始");
    console.log("=================================");

    const players =
        collectUniquePlayers(finalList);

    console.log(
        `対象選手数: ${players.length}`
    );

    // プロフィール用セッションを1回だけ取得
    const token =
        getProfileToken();

    let success = 0;
    let failed = 0;

    for (let i = 0; i < players.length; i++) {

        const player =
            players[i];

        console.log("");
        console.log(
            `[${i + 1}/${players.length}] ` +
            `${player.playerName} ` +
            `(${player.playerCode})`
        );

        try {

            const text =
                fetchPlayerProfile(
                    player.playerCode,
                    token
                );

            const data =
                JSON.parse(text);

            if (data.result !== "Success") {

                console.log(
                    "取得失敗:",
                    data.errors
                );

                failed++;
                continue;
            }

            fs.writeFileSync(
                `profiles/${player.playerCode}.json`,
                JSON.stringify(
                    data,
                    null,
                    2
                ),
                "utf8"
            );

            const rate3 =
                data.body?.totalResult?.rate3 ??
                null;

            console.log(
                `✅ 保存成功 / 3連対率: ${rate3}%`
            );

            success++;

        } catch (error) {

            console.error(
                `❌ ${player.playerName} プロフィール取得失敗:`,
                error.message
            );

            failed++;
        }

        // 5〜10秒ランダム待機
        if (i < players.length - 1) {

            await randomWait();

        }
    }

    console.log("");
    console.log("=================================");
    console.log("✅ 朝のプロフィール取得完了");
    console.log(`成功: ${success}`);
    console.log(`失敗: ${failed}`);
    console.log("=================================");
}


// =========================
// AL検証データ自動生成
// =========================

function verificationRaceTimeScore(player, track) {

    const raceTime =
        Number(player.time) +
        Number(player.diff) / 1000;

    if (track === "湿") {

        const raceTimes = currentVerificationPlayers
            .map(p =>
                Number(p.time) +
                Number(p.diff) / 1000
            )
            .filter(v => !isNaN(v));

        if (raceTimes.length === 0) {
            return 0;
        }

        const averageTime =
            raceTimes.reduce((a,b) => a + b, 0) /
            raceTimes.length;

        return Math.round(
            70 + (averageTime - raceTime) * 200
        );
    }

    if (raceTime <= 3.30) {
        return 100;
    }

    if (raceTime <= 3.40) {
        return Math.round(
            100 - (raceTime - 3.30) * 100
        );
    }

    if (raceTime <= 3.60) {
        return Math.round(
            90 - (raceTime - 3.40) * 300
        );
    }

    if (raceTime <= 3.90) {
        return Math.round(
            30 - (raceTime - 3.60) * 100
        );
    }

    return 0;
}

function verificationDeployBuff(player) {

    const handicap =
        parseInt(
            String(player.handicap ?? "0")
                .replace("m", ""),
            10
        );

    if (isNaN(handicap)) {
        return 0;
    }

    return -(handicap / 10);
}

function verificationSTBuff(player, players) {

    const group =
        players.filter(p =>
            p.handicap === player.handicap
        );

    if (group.length <= 1) {
        return 0;
    }

    const avgST =
        group.reduce(
            (sum,p) => sum + Number(p.st),
            0
        ) / group.length;

    const diff =
        avgST - Number(player.st);

    if (diff >= 0.03) return 3;
    if (diff >= 0.02) return 2;
    if (diff >= 0.01) return 1;
    if (diff <= -0.03) return -3;
    if (diff <= -0.02) return -2;
    if (diff <= -0.01) return -1;

    return 0;
}

function verificationAngleBuff(player, players) {

    if (player.handicap === "0m") {
        return 0;
    }

    const group =
        players
            .filter(p =>
                p.handicap === player.handicap
            )
            .sort((a,b) => a.car - b.car);

    if (group.length <= 3) {
        return 0;
    }

    const index =
        group.findIndex(
            p => p.car === player.car
        );

    return index * -0.5;
}

function verificationTemperatureBuff(player, trackTemp) {

    const temp =
        Number(
            String(trackTemp ?? "0")
                .replace("℃", "")
        );

    const handicap =
        parseInt(
            String(player.handicap ?? "0")
                .replace("m", ""),
            10
        );

    let buff = 0;

    if (temp >= 45) {

        if (handicap === 0) {
            buff = 2;
        }
        else if (handicap === 10) {
            buff = 1;
        }
        else if (handicap >= 20) {
            buff = -(handicap / 10 - 1);
        }

    }
    else if (temp <= 10) {

        if (handicap === 0) {
            buff = -2;
        }
        else if (handicap === 10) {
            buff = -1;
        }
        else if (handicap >= 20) {
            buff = handicap / 10 - 1;
        }
    }

    return buff;
}

function verificationAbilityScore(
    player,
    players,
    track,
    trackTemp
) {

    const timeScore =
        verificationRaceTimeScore(
            player,
            track
        );

    let trackRate = 0;

    if (track === "良") {
        trackRate =
            Number(player.goodTrack3Rate || 0);
    }
    else if (track === "湿") {
        trackRate =
            Number(player.wetTrack3Rate || 0);
    }
    else if (track === "斑") {
        const good =
            Number(player.goodTrack3Rate || 0);

        const wet =
            Number(player.wetTrack3Rate || 0);

        trackRate =
            (good + wet) / 2;
    }

    const rateScore =
        70 + (trackRate - 70) * 0.5;

    let abilityScore =
        (timeScore * 0.7) +
        (rateScore * 0.3);

    const totalBuff =
        verificationDeployBuff(player) +
        verificationAngleBuff(player, players) +
        verificationSTBuff(player, players) +
        verificationTemperatureBuff(
            player,
            trackTemp
        );

    abilityScore =
        abilityScore *
        (1 + totalBuff / 100);

    return Math.round(abilityScore);
}

function verificationDevelopmentScore(
    player,
    players,
    track,
    trackTemp
) {

    const timeScore =
        verificationRaceTimeScore(
            player,
            track
        );

    let rate = 0;

    if (track === "良") {
        rate =
            Number(player.goodTrack3Rate || 0);
    }
    else if (track === "湿") {
        rate =
            Number(player.wetTrack3Rate || 0);
    }
    else if (track === "斑") {
        const good =
            Number(player.goodTrack3Rate || 0);

        const wet =
            Number(player.wetTrack3Rate || 0);

        rate =
            (good + wet) / 2;
    }

    const rateScore =
        70 + (rate - 70) * 0.5;

    let abilityScore =
        (timeScore * 0.7) +
        (rateScore * 0.3);

    const totalBuff =
        verificationDeployBuff(player) * 2 +
        verificationAngleBuff(player, players) * 2 +
        verificationSTBuff(player, players) * 2 +
        verificationTemperatureBuff(
            player,
            trackTemp
        ) * 2;

    const developmentScore =
        abilityScore *
        (1 + totalBuff / 100);

    return developmentScore;
}

function verificationExpectationScore(
    player,
    players,
    track,
    trackTemp
) {

    const ability =
        verificationAbilityScore(
            player,
            players,
            track,
            trackTemp
        );

    const development =
        verificationDevelopmentScore(
            player,
            players,
            track,
            trackTemp
        );

    return (ability + development) / 2;
}

async function updateALVerificationData() {

    console.log("");
    console.log("=================================");
    console.log("📊 AL検証データ更新開始");
    console.log("=================================");

    const fileNames =
        fs.readdirSync(".")
            .filter(name =>
                /^.+-\d+r\.json$/.test(name)
            );

    let verificationData = [];

    if (fs.existsSync("al-verification-data.json")) {

        try {
            verificationData =
                JSON.parse(
                    fs.readFileSync(
                        "al-verification-data.json",
                        "utf8"
                    )
                );

            if (!Array.isArray(verificationData)) {
                verificationData = [];
            }

        } catch {
            verificationData = [];
        }
    }

    let added = 0;

    for (const fileName of fileNames) {

        const match =
            fileName.match(/^(.+)-(\d+)r\.json$/);

        if (!match) continue;

        const placeKey = match[1];
        const raceNo = Number(match[2]);

        const resultFile =
            `${placeKey}-${raceNo}r-result.json`;

        if (!fs.existsSync(resultFile)) {
            continue;
        }

        if (placeKey === "sanyou" && raceNo === 7) {
            console.log("🔎 DEBUG 山陽7R: resultFile確認OK");
            console.log("   raceFile:", fileName);
            console.log("   resultFile:", resultFile);
        }

        let raceData;
        let resultData;

        try {

            raceData =
                JSON.parse(
                    fs.readFileSync(
                        fileName,
                        "utf8"
                    )
                );

            resultData =
                JSON.parse(
                    fs.readFileSync(
                        resultFile,
                        "utf8"
                    )
                );

        } catch {
            continue;
        }

        if (!raceData.players?.length) {
            if (placeKey === "sanyou" && raceNo === 7) {
                console.log("❌ DEBUG 山陽7R: playersが空");
            }
            continue;
        }

        if (!resultData.results?.length) {
            if (placeKey === "sanyou" && raceNo === 7) {
                console.log("❌ DEBUG 山陽7R: resultsが空");
            }
            continue;
        }

        // 出走表と結果の開催日が一致している場合だけAL検証に追加
        if (resultData.raceDate !== raceData.raceDate) {
            console.log(
                `⏭️ ${placeKey} ${raceNo}R: 結果日付が不一致のためAL検証対象外`
            );
            continue;
        }

        if (placeKey === "sanyou" && raceNo === 7) {
            console.log("🔎 DEBUG 山陽7R: players =", raceData.players.length);
            console.log("🔎 DEBUG 山陽7R: results =", resultData.results.length);
        }

        const raceKey =
            `${raceData.raceDate}_${placeKey}_${raceNo}`;

        const alreadyExists =
            verificationData.some(
                item =>
                    item.raceKey === raceKey
            );

        if (alreadyExists) {
            if (placeKey === "sanyou" && raceNo === 7) {
                console.log("❌ DEBUG 山陽7R: alreadyExists = true");
                console.log("   raceKey:", raceKey);
            }
            continue;
        }

        if (placeKey === "sanyou" && raceNo === 7) {
            console.log("✅ DEBUG 山陽7R: 新規追加対象");
            console.log("   raceKey:", raceKey);
        }

        const track =
            raceData.track ||
            raceData.raceInfo?.track ||
            "良";

        const trackTemp =
            raceData.trackTemp ||
            raceData.raceInfo?.trackTemp ||
            "0℃";

        const players =
            raceData.players.map(player => ({
                ...player,
                car:
                    Number(
                        player.car ??
                        player.carNo
                    ),
                handicap:
                    String(
                        player.handicap ?? "0"
                    ).endsWith("m")
                        ? String(player.handicap)
                        : `${player.handicap ?? 0}m`,
                time:
                    player.time ??
                    player.trialRunTime ??
                    "",
                diff:
                    player.diff ??
                    player.raceDev ??
                    "",
                st:
                    player.st ??
                    player.averageST ??
                    "",
                goodTrack3Rate:
                    Number(
                        player.goodTrack3Rate || 0
                    ),
                wetTrack3Rate:
                    Number(
                        player.wetTrack3Rate || 0
                    )
            }));

        currentVerificationPlayers =
            players;

        const finishMap = {};

        for (const result of resultData.results) {

            finishMap[
                Number(result.car)
            ] = Number(result.finish);

        }

        const list =
            players.map(player => {

                const alScore =
                    verificationExpectationScore(
                        player,
                        players,
                        track,
                        trackTemp
                    );

                return {
                    name:
                        player.playerName ??
                        player.name ??
                        "",
                    car:
                        Number(player.car),
                    alScore,
                    finish:
                        finishMap[
                            Number(player.car)
                        ] ?? null
                };

            });

        list.sort(
            (a,b) =>
                b.alScore - a.alScore
        );

        list.forEach(
            (player,index) => {

                player.alRank =
                    index + 1;

                player.scoreDiff =
                    index < list.length - 1
                        ? player.alScore -
                          list[index + 1].alScore
                        : null;

            }
        );

        verificationData.push({

            raceKey,

            raceDate:
                raceData.raceDate,

            placeKey,

            raceNo,

            track,

            trackTemp,

            players:
                list

        });

        added++;

        console.log(
            `📊 検証追加: ${placeKey} ${raceNo}R`
        );
    }

    fs.writeFileSync(
        "al-verification-data.json",
        JSON.stringify(
            verificationData,
            null,
            2
        ),
        "utf8"
    );

    console.log(
        `✅ AL検証データ更新完了: ${added}レース追加 / 合計${verificationData.length}レース`
    );
}


// =========================
// 前R 結果取得
// =========================

async function fetchPreviousRaceResult(item) {

    const previousRaceNo =
        Number(item.raceNo) - 1;

    if (previousRaceNo < 1) {
        return false;
    }

    const url =
        `http://127.0.0.1:3001/race-result` +
        `?placeCode=${encodeURIComponent(item.placeCode)}` +
        `&raceDate=${encodeURIComponent(item.raceDate)}` +
        `&raceNo=${previousRaceNo}`;

    console.log("");
    console.log("---------- 前R結果取得 ----------");
    console.log(
        `${item.placeName} ${previousRaceNo}R`
    );

    try {

        const response =
            await fetch(url);

        const json =
            await response.json();

        if (!response.ok || !json.success) {

            throw new Error(
                json.error ||
                `HTTP ${response.status}`
            );
        }

        console.log(
            `✅ ${item.placeName} ${previousRaceNo}R 結果取得成功`
        );

        console.log(
            json.results
        );

        // 結果を保存
        const resultFile =
            `${item.placeKey}-${previousRaceNo}r-result.json`;

        fs.writeFileSync(
            resultFile,
            JSON.stringify(
                {
                    raceDate:
                        item.raceDate,

                    placeCode:
                        item.placeCode,

                    placeKey:
                        item.placeKey,

                    placeName:
                        item.placeName,

                    raceNo:
                        previousRaceNo,

                    results:
                        json.results
                },
                null,
                2
            ),
            "utf8"
        );

        console.log(
            `💾 結果保存: ${resultFile}`
        );

        return true;

    } catch (error) {

        console.error(
            `❌ ${item.placeName} ${previousRaceNo}R 結果取得失敗:`,
            error.message
        );

        return false;
    }
}


// =========================
// 結果取得済みチェック
// =========================

function previousRaceResultExists(item) {

    const previousRaceNo =
        Number(item.raceNo) - 1;

    if (previousRaceNo < 1) {
        return true;
    }

    const resultFile =
        `${item.placeKey}-${previousRaceNo}r-result.json`;

    if (!fs.existsSync(resultFile)) {
        return false;
    }

    try {

        const data =
            JSON.parse(
                fs.readFileSync(
                    resultFile,
                    "utf8"
                )
            );

        return (
            data.raceDate === item.raceDate &&
            Number(data.raceNo) === previousRaceNo &&
            Array.isArray(data.results)
        );

    } catch (error) {

        return false;
    }
}


function parseRaceTime(time) {
    const [hourRaw, minute] = time.split(":").map(Number);

    return {
        hour: hourRaw,
        minute
    };
}

function createRaceDateTime(raceDate, time) {
    const { hour, minute } = parseRaceTime(time);

    const base = new Date(`${raceDate}T00:00:00+09:00`);

    if (hour >= 24) {
        base.setDate(base.getDate() + 1);
        base.setHours(hour - 24, minute, 0, 0);
    } else {
        base.setHours(hour, minute, 0, 0);
    }

    return base;
}

function formatDateTime(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${month}/${day} ${hour}:${minute}`;
}

function buildUpdateSchedule(raceDate, finalList) {

    const schedule = [];

    for (const race of finalList) {

        const fileName =
            `${race.placeKey}-1r.json`;

        if (!fs.existsSync(fileName)) {
            continue;
        }

        // -------------------------
        // 各Rの締切前更新
        // -------------------------

        for (
            let raceNo = 1;
            raceNo <= race.finalRaceNo;
            raceNo++
        ) {

            const raceFile =
                `${race.placeKey}-${raceNo}r.json`;

            if (!fs.existsSync(raceFile)) {
                continue;
            }

            try {

                const data =
                    JSON.parse(
                        fs.readFileSync(
                            raceFile,
                            "utf8"
                        )
                    );

                const telvoteTime =
                    data.raceInfo?.telvoteTime;

                if (!telvoteTime) {
                    continue;
                }

                const deadline =
                    createRaceDateTime(
                        raceDate,
                        telvoteTime
                    );

                // -------------------------
                // 20分前・15分前・10分前
                // -------------------------

                const updates = [
                    {
                        before: 20,
                        updateTime:
                            new Date(
                                deadline.getTime() -
                                20 * 60 * 1000
                            )
                    },
                    {
                        before: 15,
                        updateTime:
                            new Date(
                                deadline.getTime() -
                                15 * 60 * 1000
                            )
                    },
                    {
                        before: 10,
                        updateTime:
                            new Date(
                                deadline.getTime() -
                                10 * 60 * 1000
                            )
                    }
                ];

                for (const update of updates) {

                    schedule.push({
                        type: "race-update",

                        raceDate: raceDate,
                        placeCode: race.placeCode,
                        placeKey: race.placeKey,
                        placeName: race.placeName,
                        raceNo,
                        deadline,
                        before: update.before,
                        updateTime: update.updateTime,
                        executed: false
                    });
                }

                // -------------------------
                // 全R 結果取得
                // 通常R：締切後に結果取得
                // 最終R：締切30分後に結果取得
                // -------------------------
                const resultStartTime =
                    raceNo === Number(race.finalRaceNo)
                        ? new Date(
                            deadline.getTime() +
                            30 * 60 * 1000
                        )
                        : new Date(
                            deadline.getTime()
                        );

                schedule.push({
                    type: "race-result",
                    raceDate: raceDate,
                    placeCode: race.placeCode,
                    placeKey: race.placeKey,
                    placeName: race.placeName,
                    raceNo,
                    deadline,
                    before: null,
                    updateTime: resultStartTime,
                    executed: false
                });

                console.log(
                    `🏁 ${raceNo}R結果取得予定: ` +
                    `${race.placeName} ` +
                    (
                        raceNo === Number(race.finalRaceNo)
                            ? "締切30分後"
                            : "締切後"
                    )
                );

            } catch (error) {

                console.error(
                    `${raceFile} スケジュール作成失敗:`,
                    error.message
                );
            }
        }
    }

    return schedule.sort(
        (a, b) =>
            new Date(a.updateTime) -
            new Date(b.updateTime)
    );
}

    async function runUpdateScheduler(schedule) {

    console.log("");
    console.log("=================================");
    console.log("締切前更新スケジューラー開始");
    console.log("=================================");

    while (true) {

        const now = new Date();

        // 未実行かつ締切前の予定だけ残す
        const pending = schedule
    .filter(item =>
        !item.executed &&
        (
            item.type === "race-result" ||
            new Date(item.deadline) > now
        )
    )
    .sort(
        (a, b) =>
            new Date(a.updateTime) -
            new Date(b.updateTime)
    );
        if (pending.length === 0) {

            console.log("");
            console.log("=================================");
            console.log("✅ 本日の締切前更新終了");
            console.log("=================================");

            break;
        }

        const next = pending[0];

        // 次回更新時刻をまだ過ぎていない場合、
        // そこまでまとめて待つ
        const nextUpdateTime =
    new Date(next.updateTime);

const nextDeadline =
    new Date(next.deadline);

if (now < nextUpdateTime) {

    const waitMs =
        nextUpdateTime.getTime() -
        now.getTime();
            console.log("");
            console.log(
                `次回更新: ${next.placeName} ${next.raceNo}R`
            );

            console.log(
                `${next.before}分前`
            );

            console.log(
                `更新時刻: ${
                    formatDateTime(nextUpdateTime)}`
            );

            console.log(
                `締切: ${formatDateTime(nextDeadline)}`
            );

            console.log(
                `次回更新まで約 ${Math.ceil(waitMs / 60000)}分待機`
            );

            await wait(waitMs);

            continue;
        }

        // 更新時刻を過ぎている予定を処理
        const dueItems = pending.filter(item => {

    const updateTime =
        new Date(item.updateTime);

    const deadline =
        new Date(item.deadline);

    return (
    updateTime <= new Date() &&
    (
        item.type === "race-result" ||
        deadline > new Date()
    )
);
});

        for (const item of dueItems) {

            console.log("");
            console.log("=================================");
            console.log("🔥 締切前更新");
            console.log("=================================");

            console.log(
                `${item.placeName} ${item.raceNo}R`
            );

            console.log(
                `${item.before}分前`
            );

            console.log(
    `更新予定: ${formatDateTime(
        new Date(item.updateTime)
    )}`
);

console.log(
    `締切: ${formatDateTime(
        new Date(item.deadline)
    )}`
);
            try {

                // =========================
// 最終R 結果取得
// =========================
if (item.type === "race-result") {

    console.log("");
    console.log("🏁 公式結果取得");
    console.log(`${item.placeName} ${item.raceNo}R`);

    const url =
        `http://127.0.0.1:3001/race-result` +
        `?placeCode=${encodeURIComponent(item.placeCode)}` +
        `&raceDate=${encodeURIComponent(item.raceDate)}` +
        `&raceNo=${encodeURIComponent(item.raceNo)}`;

    const MAX_RETRIES = 10;
    const RETRY_INTERVAL_MS = 5 * 60 * 1000;
    let resultSuccess = false;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {

        console.log(`🔄 公式結果取得 試行 ${attempt}/${MAX_RETRIES}`);

        try {
            const response = await fetch(url);
            const json = await response.json();

            if (!response.ok || !json.success) {
                throw new Error(json.error || `HTTP ${response.status}`);
            }

            if (!Array.isArray(json.results) || json.results.length !== 8) {
                throw new Error("公式結果が8車取得できませんでした");
            }

            const resultFile = `${item.placeKey}-${item.raceNo}r-result.json`;

            fs.writeFileSync(
                resultFile,
                JSON.stringify(
                    {
                        raceDate: item.raceDate,
                        placeCode: item.placeCode,
                        placeKey: item.placeKey,
                        placeName: item.placeName,
                        raceNo: Number(item.raceNo),
                        results: json.results
                    },
                    null,
                    2
                ),
                "utf8"
            );

            console.log(`✅ ${item.placeName} ${item.raceNo}R 結果取得成功: ${resultFile}`);

            // AL検証データ更新
            await updateALVerificationData();

            console.log(`📊 AL検証データ更新完了: ${item.placeName} ${item.raceNo}R`);

            // GitHubへ反映
            pushChangedRaceData();

            item.executed = true;
            resultSuccess = true;
            break;

        } catch (error) {
            console.error(`❌ ${item.placeName} ${item.raceNo}R 結果取得失敗 (${attempt}/${MAX_RETRIES}):`, error.message);

            if (attempt < MAX_RETRIES) {
                console.log("⏳ 5分後に再試行します");
                await wait(RETRY_INTERVAL_MS);
            }
        }
    }

    if (!resultSuccess) {
        console.error(`❌ ${item.placeName} ${item.raceNo}R 結果取得失敗`);
        console.error(`❌ ${MAX_RETRIES}回すべて失敗したため終了します`);
    }

    continue;
}

                // =========================
                // 前R結果取得
                // =========================

                if (Number(item.raceNo) > 1) {

                    if (!previousRaceResultExists(item)) {

                        console.log("");
                        console.log(
                            `🔎 ${item.raceNo}Rの前R結果を取得`
                        );

                        await fetchPreviousRaceResult(item);

                    } else {

                        console.log(
                            `⏭️ ${Number(item.raceNo) - 1}R結果は取得済み`
                        );

                    }
                }

                // =========================
                // 今Rの試走・走路取得
                // =========================

                await fetchRace(
    {
        placeCode:
            item.placeCode,

        placeKey:
            item.placeKey,

        placeName:
            item.placeName
    },
    item.raceDate,
    item.raceNo
);

                pushChangedRaceData();

                console.log(
                    `✅ ${item.placeName} ${item.raceNo}R 更新完了`
                );

            } catch (error) {

                console.error(
                    `❌ ${item.placeName} ${item.raceNo}R 更新失敗:`,
                    error.message
                );

            }

            item.executed = true;

            // 次の外部アクセスまで5〜10秒
            if (dueItems.length > 1) {
                await randomWait();
            }
        }
    }
}


async function main() {

    const MODE = "morning";

    const raceDate =
        getTodayDate();

        const venues = await fetchTodayRaces();

    console.log(
        "================================="
    );

    console.log(
        `Auto-Lab ${MODE}モード`
    );

    console.log(
        "================================="
    );

    console.log(
        `取得日: ${raceDate}`
    );
    console.log(
        "================================="
    );

   

    const finalList = [];

    // -------------------------
    // 開催ごとに処理
    // -------------------------

    for (
        let venueIndex = 0;
        venueIndex < venues.length;
        venueIndex++
    ) {

        const venue =
            venues[venueIndex];

            let venueFetchedAny = false;

        console.log("");
        console.log(
            `### ${venue.placeName}`
        );

        try {

            const finalRaceNo =
                await getFinalRaceNo(
                    venue,
                    raceDate
                );

            console.log(
                `最終R: ${finalRaceNo}R`
            );

            finalList.push({
                placeCode:
                    venue.placeCode,

                placeKey:
                    venue.placeKey,

                placeName:
                    venue.placeName,

                nighterName:
                    venue.nighterName,

                finalRaceNo
            });

            // -------------------------
            // 1R〜最終R
            // -------------------------

            for (
                let raceNo = 1;
                raceNo <= finalRaceNo;
                raceNo++
            ) {

                const fileName =
    `${venue.placeKey}-${raceNo}r.json`;

let shouldFetch = true;

if (fs.existsSync(fileName)) {

    try {

        const existingData =
            JSON.parse(
                fs.readFileSync(
                    fileName,
                    "utf8"
                )
            );




        if (
            existingData.raceDate === raceDate &&
            Number(existingData.raceNo) === raceNo
        ) {

            console.log(
                `⏭️ ${venue.placeName} ${raceNo}R は今日のデータが存在するためスキップ`
            );

            shouldFetch = false;
        }

    } catch (error) {

        console.log(
            `⚠️ ${fileName} の読み込み失敗 → 再取得`
        );

    }
}

if (shouldFetch) {

    try {

        await fetchRace(
            venue,
            raceDate,
            raceNo
        );

        venueFetchedAny = true;

    } catch (error) {

        console.error(
            `❌ ${venue.placeName} ${raceNo}R:`,
            error.message
        );

    }
}

if (
    shouldFetch &&
    raceNo < finalRaceNo
) {
    await randomWait();
}
               
            }

        } catch (error) {

            console.error(
                `❌ ${venue.placeName}:`,
                error.message
            );
        }

        // 次の開催まで待機
        if (
    venueFetchedAny &&
    venueIndex < venues.length - 1
) {
    await randomWait();
}
    }

        fs.writeFileSync(
        "race-final-list.json",
        JSON.stringify(
            finalList,
            null,
            2
        ),
        "utf8"
    );

    // -------------------------
    // 朝の全選手プロフィール取得
    // -------------------------

    await fetchAllMorningProfiles(finalList);

// -------------------------
// AL検証データ更新
// -------------------------
await updateALVerificationData();

pushChangedRaceData();

const schedule =
    buildUpdateSchedule(
        raceDate,
        finalList
    );

// 今日のスケジュールを保存
fs.writeFileSync(
    "update-schedule.json",
    JSON.stringify(
        schedule,
        null,
        2
    ),
    "utf8"
);

console.log(
    `✅ update-schedule.json 更新完了: ${schedule.length}件`
);

console.log("");
console.log(
    `締切前更新予定: ${schedule.length}件`
);

    console.log("");
    console.log(
        "================================="
    );
    console.log(
        "全開催・全R取得処理完了"
    );
    console.log(
        "================================="
    );

    await runUpdateScheduler(schedule);
}
if (process.argv.includes("--scheduler-test")) {

    async function schedulerTest() {

        console.log("");
        console.log("=================================");
        console.log("🔥 10秒後スケジューラー実テスト");
        console.log("=================================");

        const schedule =
            JSON.parse(
                fs.readFileSync(
                    "update-schedule.json",
                    "utf8"
                )
            );

        // =========================
        // テスト対象：浜松2R・20分前
        // =========================

        const target =
            schedule.find(
                item =>
                    item.placeKey === "hamamatsu" &&
                    Number(item.raceNo) === 2 &&
                    Number(item.before) === 20
            );

        if (!target) {
            throw new Error(
                "浜松2R・20分前のテスト対象が見つかりません"
            );
        }

        const now =
            new Date();

        // 今から10秒後を更新時刻にする
        target.updateTime =
            new Date(
                now.getTime() + 10000
            ).toISOString();

        // 念のため30秒後を締切にする
        target.deadline =
            new Date(
                now.getTime() + 30000
            ).toISOString();

        target.executed = false;

        console.log(
            `対象: ${target.placeName} ${target.raceNo}R`
        );

        console.log(
            `現在: ${formatDateTime(now)}`
        );

        console.log(
            `発火予定: ${formatDateTime(
                new Date(target.updateTime)
            )}`
        );

        console.log(
            "10秒後に実際のfetchRace()を実行します"
        );

        await runUpdateScheduler([
            target
        ]);
    }

    schedulerTest().catch(error => {

        console.error(
            "❌ スケジューラーテスト失敗:",
            error.message
        );

        process.exit(1);
    });

} else {

    if (process.argv.includes("--scheduler-test")) {

    async function schedulerTest() {

        console.log("");
        console.log("=================================");
        console.log("🔥 10秒後スケジューラー実テスト");
        console.log("=================================");

        const schedule =
            JSON.parse(
                fs.readFileSync(
                    "update-schedule.json",
                    "utf8"
                )
            );

        // 未来の予定から1件だけ選ぶ
        const futureItems =
            schedule
                .filter(item => {
                    const deadline =
                        new Date(item.deadline);

                    return deadline > new Date();
                })
                .sort(
                    (a, b) =>
                        new Date(a.updateTime) -
                        new Date(b.updateTime)
                );

        if (futureItems.length === 0) {
            throw new Error(
                "未来の更新予定がありません"
            );
        }

        const target =
            futureItems[0];

        const now =
            new Date();

        // 今から10秒後を更新時刻にする
        target.updateTime =
            new Date(
                now.getTime() + 10000
            ).toISOString();

        // 念のため30秒後を締切にする
        target.deadline =
            new Date(
                now.getTime() + 30000
            ).toISOString();

        target.executed = false;

        console.log(
            `対象: ${target.placeName} ${target.raceNo}R`
        );

        console.log(
            `現在: ${formatDateTime(now)}`
        );

        console.log(
            `発火予定: ${formatDateTime(
                new Date(target.updateTime)
            )}`
        );

        console.log(
            "10秒後に実際のfetchRace()を実行します"
        );

        await runUpdateScheduler([
            target
        ]);
    }

    schedulerTest().catch(error => {

        console.error(
            "❌ スケジューラーテスト失敗:",
            error.message
        );

        process.exit(1);
    });

} else {

  if (process.argv.includes("--scheduler-test")) {

    async function schedulerTest() {

        console.log("");
        console.log("=================================");
        console.log("🔥 10秒後スケジューラー実テスト");
        console.log("=================================");

        const schedule =
            JSON.parse(
                fs.readFileSync(
                    "update-schedule.json",
                    "utf8"
                )
            );

        // 未来の予定から1件だけ選ぶ
        const futureItems =
            schedule
                .filter(item => {
                    const deadline =
                        new Date(item.deadline);

                    return deadline > new Date();
                })
                .sort(
                    (a, b) =>
                        new Date(a.updateTime) -
                        new Date(b.updateTime)
                );

        if (futureItems.length === 0) {
            throw new Error(
                "未来の更新予定がありません"
            );
        }

        const target =
            futureItems[0];

        const now =
            new Date();

        // 今から10秒後を更新時刻にする
        target.updateTime =
            new Date(
                now.getTime() + 10000
            ).toISOString();

        // 念のため30秒後を締切にする
        target.deadline =
            new Date(
                now.getTime() + 30000
            ).toISOString();

        target.executed = false;

        console.log(
            `対象: ${target.placeName} ${target.raceNo}R`
        );

        console.log(
            `現在: ${formatDateTime(now)}`
        );

        console.log(
            `発火予定: ${formatDateTime(
                new Date(target.updateTime)
            )}`
        );

        console.log(
            "10秒後に実際のfetchRace()を実行します"
        );

        await runUpdateScheduler([
            target
        ]);
    }

    schedulerTest().catch(error => {

        console.error(
            "❌ スケジューラーテスト失敗:",
            error.message
        );

        process.exit(1);
    });

} else {

    main().catch(error => {

        console.error(
            "❌ 致命的エラー:",
            error.message
        );

        process.exit(1);
    });
}
}
}

// Auto-sync restart test 2026-08-24
