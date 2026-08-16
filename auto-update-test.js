

const https = require("https");
const fs = require("fs");
const { execSync } = require("child_process");

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
                    /^[a-z0-9-]+-(1[0-2]|[1-9])r\.json$/i
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
                `git status --short -- ${targetFiles
                    .map(file => `"${file}"`)
                    .join(" ")}`,
                {
                    encoding: "utf8"
                }
            )
            .trim();

        if (!status) {

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

        execSync(
            `git add -- ${targetFiles
                .map(file => `"${file}"`)
                .join(" ")}`,
            {
                stdio: "inherit"
            }
        );

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

    execSync(
        'curl -s -c cookies-profile.txt https://autorace.jp/race_info/ > /dev/null'
    );

    return execSync(
        "grep XSRF-TOKEN cookies-profile.txt | awk '{print $7}' | python3 -c 'import sys,urllib.parse; print(urllib.parse.unquote(sys.stdin.read().strip()))'"
    )
    .toString()
    .trim();
}

function fetchPlayerProfile(playerCode, token) {

    const body =
        JSON.stringify({
            playerCode: String(playerCode)
        });

    const command = `curl -s -b cookies-profile.txt \
-H "Content-Type: application/json" \
-H "X-Requested-With: XMLHttpRequest" \
-H "X-XSRF-TOKEN: ${token}" \
-X POST \
-d '${body}' \
https://autorace.jp/race_info/Profile`;

    return execSync(command)
        .toString();
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

        const fileName = `${race.placeKey}-1r.json`;

        if (!fs.existsSync(fileName)) {
            continue;
        }

        // 1RのJSONから各Rの締切時刻を取るため、
        // 実際には全R取得後に各JSONを確認する
        for (let raceNo = 1; raceNo <= race.finalRaceNo; raceNo++) {

            const raceFile =
                `${race.placeKey}-${raceNo}r.json`;

            if (!fs.existsSync(raceFile)) {
                continue;
            }

            try {

                const data = JSON.parse(
                    fs.readFileSync(raceFile, "utf8")
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
            a.updateTime - b.updateTime
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
        new Date(item.deadline) > now
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
        deadline > new Date()
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

                await fetchRace(
                    {
                        placeCode:
                            item.placeCode,

                        placeKey:
                            item.placeKey,

                        placeName:
                            item.placeName
                    },
                    getTodayDate(),
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

pushChangedRaceData();

const schedule =
    buildUpdateSchedule(
        raceDate,
        finalList
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

