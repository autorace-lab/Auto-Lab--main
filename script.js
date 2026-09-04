const params = new URLSearchParams(location.search);
const venue = params.get("venue");

console.log("開催場:", venue);


/*
document.getElementById("deadline").textContent =
"締切 " + race.deadline;

document.getElementById("raceTitleType").textContent =
race.title;

document.getElementById("weather").textContent =
"天気 " + race.weather;

document.getElementById("track").textContent =
"走路 " + race.track;

document.getElementById("cars").textContent =
"車数 " + race.cars + "車";

document.getElementById("raceDay").textContent =
race.startDate + "〜" + race.endDate + " " + race.day;
/*
let players = {

"青山 周平": {
car:1,
place:"伊勢崎",
handicap:"0m",
rank:"S-1",
time:"3.290",
st:"0.08",
diff:"085",
tripleRate:"90.0%",
recentRaces:[
{
date:"07/20",
venue:"川口",
track:"良",
trackTemp:"45℃",
result:"1着",
time:"3.426",
st:"0.07"
},
{
date:"07/19",
venue:"川口",
track:"良",
result:"1着",
time:"3.412",
st:"0.09"
},
{
date:"07/18",
venue:"川口",
track:"良",
result:"1着",
time:"3.431",
st:"0.12"
}
],
evaluation:"◎"
},

"鈴木 圭一郎": {
    car:2,
    place:"浜松",
    handicap:"0m",
    rank: "S-2",
    time: "3.280",
    st: "0.07",
    diff:"050",
    tripleRate:"86.0%",
    recentRaces:[
{
date:"07/20",
venue:"川口",
track:"良",
trackTemp:"45℃",
result:"1着",
time:"3.541",
st:"0.07"
},
{
date:"07/19",
venue:"川口",
track:"良",
result:"2着",
time:"3.548",
st:"0.08"
}
],
    evaluation:"◎"
    
},

"永井 大介": {
    car:3,
    place:"川口",
    handicap:"10m",
    rank: "S-10",
    time: "3.340",
    st: "0.11",
    diff:"010",
    tripleRate:"69.0%",
    recentRaces:[
{
date:"07/20",
venue:"川口",
track:"良",
trackTemp:"45℃",
result:"1着",
time:"3.541",
st:"0.11"
},
{
date:"07/19",
venue:"川口",
track:"良",
result:"2着",
time:"3.548",
st:"0.12"
}
],
    evaluation:"◎"
},

"佐藤 摩弥": {
    car:4,
    place:"川口",
    handicap:"10m",
    rank: "S-11",
    time: "3.360",
    st: "0.10",
    diff:"070",
    tripleRate:"68.0%",
    recentRaces:[
{
date:"07/20",
venue:"川口",
track:"良",
trackTemp:"45℃",
result:"1着",
time:"3.541",
st:"0.10"
},
{
date:"07/19",
venue:"川口",
track:"良",
result:"2着",
time:"3.548",
st:"0.11"
}
],
    evaluation:"◎"
},

"高橋 貢": {
    car:5,
    place:"伊勢崎",
    handicap:"20m",
    rank: "S-17",
    time: "3.330",
    st: "0.12",
    diff:"100",
    tripleRate:"65.0%",
    recentRaces:[
{
date:"07/20",
venue:"伊勢崎",
track:"良",
trackTemp:"45℃",
result:"1着",
time:"3.541",
st:"0.12"
},
{
date:"07/19",
venue:"伊勢崎",
track:"良",
result:"2着",
time:"3.548",
st:"0.13"
}
],
    evaluation:"◎"
},

"早川 清太郎": {
    car:6,
    place:"伊勢崎",
    handicap:"20m",
    rank: "S-20",
    time: "3.350",
    st: "0.13",
    diff:"058",
    tripleRate:"60.0%",
    recentRaces:[
{
date:"07/20",
venue:"伊勢崎",
track:"良",
trackTemp:"45℃",
result:"1着",
time:"3.541",
st:"0.13"
},
{
date:"07/19",
venue:"伊勢崎",
track:"良",
result:"2着",
time:"3.548",
st:"0.14"
}
],
    evaluation:"◎"
},

"有吉 辰也": {
    car:7,
    place:"飯塚",
    handicap:"30m",
    rank: "S-7",
    time: "3.370",
    st: "0.14",
    diff:"110",
    tripleRate:"77.0%",
    recentRaces:[
{
date:"07/20",
venue:"飯塚",
track:"良",
result:"1着",
time:"3.541",
st:"0.14"
},
{
date:"07/19",
venue:"飯塚",
track:"良",
trackTemp:"45℃",
result:"2着",
time:"3.548",
st:"0.15"
}
],
    evaluation:"◎"
},

"木村 武之": {
    car:8,
    place:"浜松",
    handicap:"30m",
    rank: "S-30",
    time: "3.300",
    st: "0.07",
    diff:"150",
    tripleRate:"58.0%",
    recentRaces:[
{
date:"07/20",
venue:"浜松",
track:"良",
result:"1着",
time:"3.541",
st:"0.07"
},
{
date:"07/19",
venue:"浜松",
track:"良",
trackTemp:"45℃",
result:"2着",
time:"3.548",
st:"0.08"
}
],
    evaluation:"◎"
}

};
*/

let players = {};

let race = {
    venue: "",
    raceNo: "",
    trackTemp: "",
    track: "",
    weather: "",
    deadline: "",
    startDate: "",
    endDate: "",
    day: "",
    cars: 0
};

let currentRace = 9;



function changeRace(raceNo){

    currentRace = raceNo;

    document.querySelectorAll(".race-tab-btn")
    .forEach((btn,index)=>{
        btn.classList.toggle("active", index === raceNo - 1);
    });

    console.log("現在のレース:", currentRace);


    fetchRaceData(currentRace).then(async data => {

       // =========================
// 開催R数に合わせてレースタブを表示
// =========================
const finalRaceNo = Number(data.raceInfo.finalRaceNo ?? 0);

document
    .querySelectorAll(".race-tab-btn")
    .forEach(btn => {

        const onclick = btn.getAttribute("onclick") || "";

        const match = onclick.match(/changeRace\((\d+)\)/);

        if (!match) return;

        const raceNumber = Number(match[1]);

        btn.style.display =
            raceNumber <= finalRaceNo ? "" : "none";

    });
        players = data.players;


        // =========================
        // 走路3連対率を読み込む
        // =========================
        try {

            const res = await fetch("track-rates.json");
            const trackRates = await res.json();

            trackRates.forEach(rate => {

                const player = Object.values(players).find(
                    p => String(p.playerCode) === String(rate.playerCode)
                );

                if (player) {

                    player.goodTrack3Rate =
                        Number(rate.goodTrack3Rate);

                    player.wetTrack3Rate =
                        Number(rate.wetTrack3Rate);

                }

            });

            console.log(
                "良・湿3連対率読み込み完了",
                trackRates
            );

        } catch (err) {

            console.error(
                "track-rates.json 読み込み失敗:",
                err
            );

        }


       // =========================
// レース情報
// =========================
race.venue = data.raceInfo.venue;

race.raceNo = data.raceInfo.raceNo;

race.trackTemp =
    data.raceInfo.trackTemp
        ? data.raceInfo.trackTemp + "℃"
        : "";

const situationCode =
    Number(
        data.raceInfo.trackSituationCode ??
        data.raceInfo.situationCode ??
        0
    );

window.currentRaceInfo = data.raceInfo;

race.track =
    situationCode === 0
        ? "良"
        : situationCode === 1
            ? "湿"
            : situationCode === 5
                ? "斑"
                : "";

race.weather = "晴";

// JSONから実際の締切時刻を取得
race.deadline =
    data.raceInfo.deadline || "";

race.startDate = "08/01";

race.endDate = "08/03";

race.day = "初日";

race.cars =
    Object.keys(players).length;


// =========================
// レース情報表示
// =========================
document.getElementById("raceTitle").textContent =
    race.venue + " " + race.raceNo;

// 締切時刻を表示
document.getElementById("deadline").textContent =
    "締切 " + race.deadline;

// 今回は走路・車数を表示しない
const trackElement =
    document.getElementById("track");

if (trackElement) {
    trackElement.textContent = "";
    trackElement.style.display = "none";
}

const carsElement =
    document.getElementById("cars");

if (carsElement) {
    carsElement.textContent = "";
    carsElement.style.display = "none";
}


// =========================
// 各テーブル作成
// =========================
createRaceTable();

createRecentTable();

createAbilityTable();

colorScoreRank();
colorPredictedTimeRank();
colorTrialTimeRank();
colorTripleRateRank();

createDevelopmentTable();




createExpectationTable();

createCustomAbilityTable();


        // =========================
        // カスタム表示
        // =========================
        document.querySelectorAll(".custom-wet-header")
        .forEach(header => {
            header.textContent = "湿 OFF";
        });

        document.querySelectorAll(".custom-mixed-header")
        .forEach(header => {
            header.textContent = "斑 OFF";
        });


        // =========================
        // ランク色
        // =========================
        colorScoreRank();

        colorPredictedTimeRank();

        colorTrialTimeRank();

        colorTripleRateRank();

        colorDevelopmentScoreRank();

        colorDevelopmentPredictedTimeRank();

        colorDevelopmentTrialTimeRank();

        colorDevelopmentTripleRateRank();

        colorExpectationAbilityRank();

        colorExpectationDevelopmentRank();

        colorExpectationScoreRank();

    });

}


let abilityRankMode = false;


let developmentRankMode = false;


let expectationRankMode = false;


let handicapMode = false;


let stMode = false;

let startPowerMode = false;
let soloPowerMode = false;
let catchUpPowerMode = false;

let tempMode = false;

let handicapAngleMode = false;

let customHandicapMode = 0;
let customSTMode = 0;
let customTempMode = 0;
let customHandicapAngleMode = 0;
let customStartMode = 0;
let customStartPowerMode = 0;
let customWetMode = 2;
let customMixedMode = 2;

function calcRaceTimeScore(player){

    const raceTime =
        (race.track === "湿" || race.track === "斑")
            ? Number(player.time)
            : Number(player.time) + Number(player.diff) / 1000;

    // 走路状況
    const situationCode =
        Number(
            window.currentRaceInfo?.raceSituationCode ??
            window.currentRaceInfo?.situationCode ??
            5
        );

    // =========================
    // 湿走路・斑走路
    // =========================
    // 出走人数に応じた平均予想競走タイムとの差で評価
    if(race.track === "湿" || race.track === "斑"){

        const raceTimes = Object.values(players)
            .map(p =>
                Number(p.time)
            )
            .filter(v =>
                Number.isFinite(v) && v > 0
            );

        if(raceTimes.length === 0){
            return 0;
        }

        const averageTime =
            raceTimes.reduce((a,b) => a + b, 0)
            / raceTimes.length;

        // 平均タイムを70点基準
        // 平均より速いほど高得点
        const score =
            70 + (averageTime - raceTime) * 200;

        return Math.round(score);
    }

    // =========================
    // 良走路
    // =========================

    // 3.30 → 100
    if(raceTime <= 3.30){
        return 100;
    }

    // 3.31 ～ 3.40
    if(raceTime <= 3.40){
        return Math.round(
            100 - (raceTime - 3.30) * 100
        );
    }

    // 3.41 ～ 3.60
    if(raceTime <= 3.60){
        return Math.round(
            90 - (raceTime - 3.40) * 300
        );
    }

    // 3.61 ～ 3.90
    if(raceTime <= 3.90){
        return Math.round(
            30 - (raceTime - 3.60) * 100
        );
    }

    // 3.90より遅い
    return 0;
}


function calcRecent10Score(player){

    const races = player.recentRaces || [];

    // 有効な着順（1～8着）だけを抽出
    const validRaces = races.filter(race => {

        const order = Number(race.order);

        return order >= 1 && order <= 8;

    });

    // 着順 → スコア
    const scoreMap = {
        1: 10,
        2: 9,
        3: 8,
        4: 6,
        5: 5,
        6: 3,
        7: 2,
        8: 1
    };

    const scores = validRaces.map(race => {

        return scoreMap[Number(race.order)];

    });

    // 有効な成績がない場合
    if(scores.length === 0){

        return {
            score: 0,
            evaluation: "データなし",
            firstHalf: 0,
            secondHalf: 0,
            validCount: 0
        };

    }

    // 近10走の平均スコア
    const average =
        scores.reduce((sum, score) => sum + score, 0)
        / scores.length;

    const score =
        average * 10;

    // 前半5走・後半5走
    const firstHalfScores =
        scores.slice(0, 5);

    const secondHalfScores =
        scores.slice(5, 10);

    const firstHalf =
        firstHalfScores.length > 0
            ? firstHalfScores.reduce((sum, score) => sum + score, 0)
              / firstHalfScores.length
            : 0;

    const secondHalf =
        secondHalfScores.length > 0
            ? secondHalfScores.reduce((sum, score) => sum + score, 0)
              / secondHalfScores.length
            : 0;

    let evaluation = "安定→";

    if(firstHalf > secondHalf){

        evaluation = "上昇⤴︎";

    }else if(firstHalf < secondHalf){

        evaluation = "下降⤵︎";

    }

    return {
        score: Math.round(score),
        evaluation: evaluation,
        firstHalf: firstHalf,
        secondHalf: secondHalf,
        validCount: scores.length
    };

}

function calcAbilityScore(player){

    console.log("=== ABILITY DEBUG ===");

    console.log("name:", player.name || player.playerName);
    console.log("time:", player.time);
    console.log("diff:", player.diff);
    console.log("tripleRate:", player.tripleRate);

    // =========================
    // タイムスコア
    // =========================

    const timeScore =
        calcRaceTimeScore(player);

    // =========================
    // 近10走評価
    // =========================

    const recent10 =
        calcRecent10Score(player);

    const recent10Score =
        recent10.score;

    // =========================
    // 走路別 能力スコア
    // スタンダード・玄人 共通
    // =========================

    let abilityScore;

    if (race.track === "良") {

        // 良：
        // タイム50% + 良走路3連対率30% + 近10走20%

        const goodTripleRate =
            Number(player.goodTrack3Rate || 0);

        abilityScore =
            (timeScore * 0.5) +
            (goodTripleRate * 0.3) +
            (recent10Score * 0.2);

    } else if (race.track === "湿") {

        // 湿：
        // タイム40% + 湿走路3連対率60%
        // 近10走評価は表示のみ

        const wetTripleRate =
            Number(player.wetTrack3Rate || 0);

        abilityScore =
            (timeScore * 0.65) +
            (wetTripleRate * 0.35);

    } else if (race.track === "斑") {

        // 斑：
        // 公式の走路別3連対率データなし
        // タイムスコア100%

        abilityScore =
            timeScore;

    } else {

        // 走路不明時
        abilityScore =
            timeScore;
    }

    // =========================
    // 能力スコア確定
    // ※ここでは展開補正を一切反映しない
    // =========================

    console.log(
        "走路:", race.track,
        "能力スコア（補正前）:", abilityScore
    );

    return Math.round(abilityScore);
}

function calcCustomAbilityScore(player){

    // =========================
    // 基本能力スコア
    // タイム50%＋実戦50%
    // =========================

    const timeScore =
        calcRaceTimeScore(player);

    // 通常3連対率
    const tripleRate =
        Number(String(player.tripleRate || "0").replace("%", ""));

    const tripleRateScore =
        tripleRate;

    // 近10走評価
    const recent10 =
        calcRecent10Score(player);

    const recent10Score =
        recent10.score;

    // =========================
    // 走路別 能力スコア
    // =========================
    let abilityScore;

    if (race.track === "良") {

        // 良：
        // タイム50% + 良走路3連対率30% + 近10走20%
        const goodTripleRate =
            Number(player.goodTrack3Rate || 0);

        abilityScore =
            (timeScore * 0.5) +
            (goodTripleRate * 0.3) +
            (recent10Score * 0.2);

    } else if (race.track === "湿") {

        // 湿：
        // タイム40% + 湿走路3連対率60%
        // 近10走評価は表示のみ・計算には使用しない
        const wetTripleRate =
            Number(player.wetTrack3Rate || 0);

        abilityScore =
            (timeScore * 0.65) +
            (wetTripleRate * 0.35);

    } else if (race.track === "斑") {

        // 斑：
        // 公式の走路別3連対率データがないため
        // タイムスコア100%
        abilityScore =
            timeScore;

    } else {

        // 走路不明時は安全側でタイムスコアのみ
        abilityScore =
            timeScore;
    }

    // =========================
    // 玄人向け 展開補正
    // =========================

    const deployBuff =
        customHandicapMode === 2
            ? 0
            : calcDeployBuff(player);

    const angleBuff =
        customHandicapAngleMode === 2
            ? 0
            : calcHandicapAngleBuff(player);

    const tempBuff =
        customTempMode === 2
            ? 0
            : calcTemperatureBuff(player);

    const startBuff =
        customStartMode === 2
            ? 0
            : calcCustomStartBuff(player);

    const wetBuff =
        customWetMode === 2
            ? 0
            : calcWetBuff(player);

    const mixedBuff =
        customMixedMode === 2
            ? 0
            : calcMixedBuff(player);

    const startPowerBuff =
        customStartPowerMode === 2
            ? 0
            : calcAbilityStartPowerBuff(player);

    // 8項目の補正を合算
    const totalBuff =
        deployBuff +
        angleBuff +
        tempBuff +
        startBuff +
        wetBuff +
        mixedBuff +
        startPowerBuff;

    abilityScore = Math.round(abilityScore);
    // 合算した補正を最後に1回だけ反映
    abilityScore =
        abilityScore *
        (1 + totalBuff / 100);

    console.log(
        "=== CUSTOM ABILITY DEBUG ===",
        "player:", player.name || player.playerName,
        "deploy:", deployBuff,
        "angle:", angleBuff,
        "temp:", tempBuff,
        "start:", startBuff,
        "wet:", wetBuff,
        "mixed:", mixedBuff,
        "startPower:", startPowerBuff,
        "total:", totalBuff,
        "final:", abilityScore
    );

    return Math.round(abilityScore);
}

function calcDevelopmentScore(player){

    console.log("=== DEVELOPMENT DEBUG ===");

    console.log("name:", player.name || player.playerName);
    console.log("time:", player.time);
    console.log("diff:", player.diff);
    console.log("tripleRate:", player.tripleRate);

    // =========================
    // タイムスコア
    // =========================

    const timeScore =
        calcRaceTimeScore(player);

    // =========================
    // 実戦スコア
    // 3連対率：近10走 = 3：2
    // =========================
    const track3Rate =
        race.track === "湿"
            ? Number(player.wetTrack3Rate || 0)
            : Number(player.goodTrack3Rate || 0);

    const recent10 =
        calcRecent10Score(player);

    const recent10Score =
        recent10.score;

    const practicalScore =
        (track3Rate * 0.6) +
        (recent10Score * 0.4);

    // =========================
    // 基本能力スコア
    // 良：タイム50%＋実戦50%
    // 湿：タイム65%＋湿走路3連対率35%
    // 斑：タイム100%
    // =========================
    let abilityScore;

    if (race.track === "良") {

        abilityScore =
            (timeScore * 0.5) +
            (practicalScore * 0.5);

    } else if (race.track === "湿") {

        const wetTripleRate =
            Number(player.wetTrack3Rate || 0);

        abilityScore =
            (timeScore * 0.65) +
            (wetTripleRate * 0.35);

    } else if (race.track === "斑") {

        abilityScore =
            timeScore;

    } else {

        abilityScore =
            (timeScore * 0.5) +
            (practicalScore * 0.5);
    }

    // =========================
    // 展開補正
    // 展開重視は各補正を2倍
    // =========================

    const deployBuff =
        calcDevelopmentDeployBuff(player);

    const angleBuff =
        calcHandicapAngleBuff(player) * 3;

    const tempBuff =
        calcDevelopmentTemperatureBuff(player);

    const startPowerBuff =
        calcDevelopmentStartPowerBuff(player);

    const soloPowerBuff =
        calcDevelopmentSoloPowerBuff(player);

    const catchUpPowerBuff =
        calcDevelopmentCatchUpPowerBuff(player);

    const totalDevelopmentBuff =
        deployBuff +
        angleBuff +
        tempBuff +
        startPowerBuff +
        (soloPowerBuff ?? 0) +
        (catchUpPowerBuff ?? 0);

    // =========================
    // 最後に1回だけ反映
    // =========================

    const developmentScore =
        abilityScore *
        (1 + totalDevelopmentBuff / 100);

    console.log(
        "実戦スコア:",
        practicalScore,
        "展開補正:",
        totalDevelopmentBuff + "%",
        "最終:",
        developmentScore
    );

    return Math.round(developmentScore);
}

function calcCustomDevelopmentScore(player){

    // =========================
    // 基本能力スコア
    // タイム50%＋実戦50%
    // =========================

    const timeScore =
        calcRaceTimeScore(player);

    // 良走路3連対率
    const goodTrack3Rate =
        Number(player.goodTrack3Rate || 0);

    const tripleRateScore =
        goodTrack3Rate;

    // 近10走評価
    const recent10 =
        calcRecent10Score(player);

    const recent10Score =
        recent10.score;

    // 実戦スコア
    // 3連対率：近10走 = 3：2
    const practicalScore =
        (tripleRateScore * 0.6) +
        (recent10Score * 0.4);

    // 能力スコア
    // タイム：実戦 = 1：1
    let abilityScore =
        (timeScore * 0.5) +
        (practicalScore * 0.5);

    abilityScore = Math.round(abilityScore);
    // =========================
    // スタンダード展開4項目
    // =========================

    const deployBuff =
        customHandicapMode === 2
            ? 0
            : calcDevelopmentDeployBuff(player);

    const angleBuff =
        customHandicapAngleMode === 2
            ? 0
            : calcHandicapAngleBuff(player) * 3;

    const tempBuff =
        customTempMode === 2
            ? 0
            : calcDevelopmentTemperatureBuff(player);


    // =========================
    // 玄人追加4項目
    // =========================

    const startBuff =
        customStartMode === 2
            ? 0
            : calcDevelopmentStartBuff(player);

    const wetBuff =
        customWetMode === 2
            ? 0
            : calcWetBuff(player) * 3;

    const mixedBuff =
        customMixedMode === 2
            ? 0
            : calcMixedBuff(player) * 3;

    const startPowerBuff =
        customStartPowerMode === 2
            ? 0
            : calcDevelopmentStartPowerBuff(player);


    // =========================
    // 8項目をすべて合算
    // =========================

    const totalBuff =
        deployBuff +
        angleBuff +
        tempBuff +
        startBuff +
        wetBuff +
        mixedBuff +
        startPowerBuff;


    // =========================
    // 最後に1回だけ反映
    // =========================

    const finalScore =
        abilityScore *
        (1 + totalBuff / 100);


    console.log(
        "=== CUSTOM DEVELOPMENT DEBUG ==="
    );

    console.log(
        "deploy:", deployBuff,
        "angle:", angleBuff,
        "temp:", tempBuff,
        "start:", startBuff,
        "wet:", wetBuff,
        "mixed:", mixedBuff,
        "total:", totalBuff,
        "final:", finalScore
    );

    return Math.round(finalScore);
}

function openPlayer(name){

    const player = players[name];

    document.getElementById("playerName").innerHTML =
        "👤 " + name;

    document.getElementById("playerRank").innerHTML =
        player.rank || "—";

    document.getElementById("playerTime").innerHTML =
        player.time || "—";

    document.getElementById("playerDiff").innerHTML =
        player.diff || "—";

    document.getElementById("playerStartPower").innerHTML =
        "★".repeat(Number(player.sPower) || 0);

    document.getElementById("playerSoloPower").innerHTML =
        "★".repeat(Number(player.soloPower) || 0);

    document.getElementById("playerCatchUpPower").innerHTML =
        "★".repeat(Number(player.catchUpPower) || 0);

    document.getElementById("playerWetTrackSkill").innerHTML =
        "★".repeat(Number(player.wetTrackSkill) || 0);

    const courseMap = {
        1: "イン",
        2: "アウト",
        3: "自在",
        4: "不明"
    };

    document.getElementById("playerCourse").innerHTML =
        courseMap[player.course] || player.course || "不明";

    document.getElementById("playerModal").style.display = "block";
}

function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}

function createRaceTable(){

const table = document.getElementById("raceTable");

table.innerHTML = "";

for(let name in players){

const player = players[name];

table.innerHTML += `

<tr>

<td class="car car${player.car}">
${player.car}
</td>

<td>
${name}
</td>

<td>
${
handicapMode
?
(calcDeployBuff(player) > 0
? `<span class="buff-plus">+${calcDeployBuff(player)}%</span>`
: calcDeployBuff(player) < 0
? `<span class="buff-minus">${calcDeployBuff(player)}%</span>`
: "0%")
:
player.handicap
}
</td>
<td class="handicap-angle">
${
handicapAngleMode
?
(calcHandicapAngleBuff(player) > 0
? "+" + calcHandicapAngleBuff(player) + "%"
: calcHandicapAngleBuff(player) + "%")
: "-"
}
</td>
<td>
${
handicapAngleMode
?
(
    calcDevelopmentHandicapAngleBuff(player) > 0
    ? `<span class="buff-plus">+${calcDevelopmentHandicapAngleBuff(player)}%</span>`
    : calcDevelopmentHandicapAngleBuff(player) < 0
    ? `<span class="buff-minus">${calcDevelopmentHandicapAngleBuff(player)}%</span>`
    : "0%"
)
:
player.handicap + "ライン"
}
</td>
<td>
${player.time}
</td>


</tr>

`;

}

}
function createRecentTable(){

const table = document.getElementById("recentTable");

table.innerHTML = "";

for(let name in players){

const player = players[name];

let races = player.recentRaces || [];

let cells = "";

for(let i = 0; i < 10; i++){

    if(races[i]){

    cells += `
    <td class="${(() => {
        const order = Number(races[i].order);
        if (order === 1) return "recent-place-1";
        if (order === 2) return "recent-place-2";
        if (order === 3) return "recent-place-3";
        return "";
    })()}">
    ${races[i].date}<br>
    ${races[i].place || ""}<br>
    ${races[i].raceNo || ""}R<br>
    ${(() => {
    const order = Number(races[i].order);
    return order >= 1 && order <= 8
        ? `${order}着`
        : "―";
})()}<br>
    競走 ${races[i].raceTime || ""}<br>
    試走 ${races[i].trialTime || ""}<br>
    ST ${races[i].st || ""}
    </td>
    `;

}else{

    cells += `
    <td>
    -
    </td>
    `;

}

}

table.innerHTML += `
<tr>
<td class="car car${player.car}">
${player.car}
</td>

<td>
${name}
</td>

${cells}

</tr>
`;

}

}


function calcDeployBuff(player){

    const handicap =
        parseInt(
            String(player.handicap || "0").replace("m", ""),
            10
        );

    if (isNaN(handicap)) {
        return 0;
    }

    return -(handicap / 10);

}

function calcHandicapAngleBuff(player){

// 0mは補正なし
if(player.handicap === "0m"){
    return 0;
}

// 同じハンデの選手を取得
const group = Object.values(players)
.filter(p => p.handicap === player.handicap)
.sort((a,b)=>a.car-b.car);


// 3人以下は補正対象外
if(group.length <= 3){
    return 0;
}


// 4人以上の場合のみ角度補正
const index = group.findIndex(p => p.car === player.car);


// 最内0%、外へ -0.5%
return index * -0.5;

}



function calcTemperatureBuff(player){

    const temp = Number(
        (race.trackTemp || "0℃").replace("℃","")
    );

    const handicap =
        parseInt(player.handicap, 10);

    let buff = 0;


    // =========================
    // 高温45℃以上
    // =========================

    if(temp >= 45){

        if(handicap === 0){
            buff = 2;
        }
        else if(handicap === 10){
            buff = 1;
        }
        else if(handicap >= 20){
            buff = -(handicap / 10 - 1);
        }

    }


    // =========================
    // 低温10℃以下
    // =========================

    else if(temp <= 10){

        if(handicap === 0){
            buff = -2;
        }
        else if(handicap === 10){
            buff = -1;
        }
        else if(handicap >= 20){
            buff = handicap / 10 - 1;
        }

    }


    return buff;

}
function calcDevelopmentHandicapAngleBuff(player){

    return calcHandicapAngleBuff(player) * 3;

}


// =========================
// 近10走評価の色分け
// =========================
function getRecent10ScoreClass(player){

    const scores = Object.values(players)
        .map(p => calcRecent10Score(p).score)
        .filter(v => Number.isFinite(v))
        .sort((a,b) => b - a);

    const score = calcRecent10Score(player).score;

    if(score === scores[0]){
        return "recent10-top";
    }

    if(score === scores[1]){
        return "recent10-second";
    }

    return "";
}

function getRecent10EvaluationClass(player){

    const evaluation = calcRecent10Score(player).evaluation;

    if(evaluation.includes("上昇")){
        return "recent10-up";
    }

    if(evaluation.includes("下降")){
        return "recent10-down";
    }

    return "recent10-stable";
}

function createAbilityTable(){

const table = document.getElementById("abilityTable");
table.innerHTML = "";

let playerList = Object.entries(players);

if(abilityRankMode){
    playerList.sort((a,b)=>{
        const aZero = Number(a[1].time) === 0;
        const bZero = Number(b[1].time) === 0;

        if(aZero && !bZero) return 1;
        if(!aZero && bZero) return -1;

        return calcAbilityScore(b[1]) - calcAbilityScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
    (Number(player.time) + Number(player.diff)/1000).toFixed(3);

    // 能力重視ALの最終スコア
    // 能力値に能力重視側の展開補正を最後に1回だけ適用
    let score = null;

    if (Number(player.time) !== 0) {
        const baseAbilityScore = calcAbilityScore(player);

        const abilityBuff =
            calcDeployBuff(player) +
            calcHandicapAngleBuff(player) +
            calcTemperatureBuff(player) +
            calcAbilityStartPowerBuff(player) +
            (calcAbilitySoloPowerBuff(player) ?? 0) +
            (calcAbilityCatchUpPowerBuff(player) ?? 0);

        score = Math.round(
            baseAbilityScore *
            (1 + abilityBuff / 100)
        );
    }

    const recent10 = calcRecent10Score(player);


    table.innerHTML += `
    <tr>

        <td class="car car${player.car}">
            ${player.car}
        </td>

        <td>
            <a href="#" onclick="openPlayer('${name}')">
                ${name}
            </a>
        </td>

        <td class="trial-time">
            ${Number(player.time) === 0 ? "—" : Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${Number(player.time) === 0 ? "—" : predictedTime}
        </td>

        <td class="triple-rate">
${
    race.track === "良"
        ? Number(player.goodTrack3Rate || 0).toFixed(1) + "%"
        : race.track === "湿"
            ? Number(player.wetTrack3Rate || 0).toFixed(1) + "%"
            : race.track === "斑"
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0.0%"
}
</td>
        <td class="recent10-score">
            <span class="${getRecent10ScoreClass(player)}">
                ${recent10.score}
            </span><br>
            <span class="${getRecent10EvaluationClass(player)}">
                ${recent10.evaluation}
            </span>
        </td>

        <td>
${
handicapMode
?
(() => {
    const handicapBuff =
        calcDeployBuff(player) +
        calcHandicapAngleBuff(player);

    return handicapBuff > 0
        ? `<span class="buff-plus">+${handicapBuff}%</span>`
        : handicapBuff < 0
        ? `<span class="buff-minus">${handicapBuff}%</span>`
        : "0%";
})()
:
player.handicap
}
</td>

        <td>
        ${
        startPowerMode
        ?
        (
            calcAbilityStartPowerBuff(player) > 0
            ? `<span class="buff-plus">+${calcAbilityStartPowerBuff(player)}%</span>`
            : calcAbilityStartPowerBuff(player) < 0
            ? `<span class="buff-minus">${calcAbilityStartPowerBuff(player)}%</span>`
            : "0%"
        )
        :
        `${getStartPowerClass(player.rank)}★${player.sPower || ""}`
        }
        </td>
        <td>
        ${
            soloPowerMode
            ?
            (() => {
                const buff = calcSoloPowerBuff(player);
                return buff === null
                    ? "－"
                    : buff > 0
                    ? `<span class="buff-plus">+${buff}%</span>`
                    : buff < 0
                    ? `<span class="buff-minus">${buff}%</span>`
                    : "0%";
            })()
            :
            `★${player.soloPower || ""}`
        }
        </td>

        <td>
        ${
            catchUpPowerMode
            ?
            (() => {
                const buff = calcCatchUpPowerBuff(player);
                return buff === null
                    ? "－"
                    : buff > 0
                    ? `<span class="buff-plus">+${buff}%</span>`
                    : buff < 0
                    ? `<span class="buff-minus">${buff}%</span>`
                    : "0%";
            })()
            :
            `★${player.catchUpPower || ""}`
        }
        </td>


        <td>
${
tempMode
?
(calcTemperatureBuff(player) > 0
? `<span class="buff-plus">+${calcTemperatureBuff(player)}%</span>`
: calcTemperatureBuff(player) < 0
? `<span class="buff-minus">${calcTemperatureBuff(player)}%</span>`
: "0%")
:
race.track + " " + race.trackTemp
}
</td>

<td
    class="score"
    onclick="showScoreDetail(
        '${name}',
        'ability',
        ${score}
    )"
>
    ${score ?? "—"}
</td>

    </tr>
    `;
}

}
function createCustomAbilityTable(){

const table =
document.getElementById("customAbilityTable");
table.innerHTML = "";

let playerList = Object.entries(players);

if(abilityRankMode){
    playerList.sort((a,b)=>{
        const aZero = Number(a[1].time) === 0;
        const bZero = Number(b[1].time) === 0;

        if(aZero && !bZero) return 1;
        if(!aZero && bZero) return -1;

        return calcAbilityScore(b[1]) - calcAbilityScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
    (Number(player.time) + Number(player.diff)/1000).toFixed(3);

    const score = calcCustomAbilityScore(player);

    table.innerHTML += `
    <tr>

        <td class="car car${player.car}">
            ${player.car}
        </td>

        <td>
            <a href="#" onclick="openPlayer('${name}')">
                ${name}
            </a>
        </td>

        <td class="trial-time">
            ${Number(player.time) === 0 ? "—" : Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${Number(player.time) === 0 ? "—" : predictedTime}
        </td>

       <td class="triple-rate">
${
    race.track === "良"
        ? Number(player.goodTrack3Rate || 0) + "%"
        : race.track === "湿"
            ? Number(player.wetTrack3Rate || 0) + "%"
            : race.track === "斑"
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0%"
}
</td>

        <td class="recent10-score">
            ${(() => {
                const recent10 = calcRecent10Score(player);
                return `
    <span class="${getRecent10ScoreClass(player)}">
        ${recent10.score}
    </span><br>
    <span class="${getRecent10EvaluationClass(player)}">
        ${recent10.evaluation}
    </span>
`;
            })()}
        </td>

       <td class="custom-select-cell ${customStartMode === 2 ? 'custom-off-column' : ''}"
    onclick="showCustomScoreMenu(this, '${name}', 'start')">
${
    customStartMode
    ?
    (
        calcCustomStartBuff(player) > 0
        ? `<span class="buff-plus">+${calcCustomStartBuff(player)}%</span>`
        : calcCustomStartBuff(player) < 0
        ? `<span class="buff-minus">${calcCustomStartBuff(player)}%</span>`
        : "0%"
    )
    :
    (player.customStart || "")
}

</td>
<td class="custom-select-cell ${customWetMode === 2 ? 'custom-off-column' : ''}"
    onclick="showCustomScoreMenu(this, '${name}', 'wet')">
    ${
        customWetMode
        ?
        (
            calcWetBuff(player) > 0
            ? `<span class="buff-plus">+${calcWetBuff(player)}%</span>`
            : calcWetBuff(player) < 0
            ? `<span class="buff-minus">${calcWetBuff(player)}%</span>`
            : "0%"
        )
        :
        (player.customWet || "")
    }
</td>

<td
    <td class="custom-select-cell ${customMixedMode === 2 ? 'custom-off-column' : ''}"
    onclick="showCustomScoreMenu(this, '${name}', 'mixed')">

    ${
        customMixedMode
        ?
        (
            calcMixedBuff(player) > 0
            ? `<span class="buff-plus">+${calcMixedBuff(player)}%</span>`
            : calcMixedBuff(player) < 0
            ? `<span class="buff-minus">${calcMixedBuff(player)}%</span>`
            : "0%"
        )
        :
        (player.customMixed || "")
    }
</td>

        <td class="${customHandicapMode === 2 ? 'custom-off-column' : ''}">
    ${
    customHandicapMode
    ?
(calcDeployBuff(player) > 0
? `<span class="buff-plus">+${calcDeployBuff(player)}%</span>`
: calcDeployBuff(player) < 0
? `<span class="buff-minus">${calcDeployBuff(player)}%</span>`
: "0%")
:
player.handicap
}
</td>

        <td class="${customHandicapAngleMode === 2 ? 'custom-off-column' : ''}">
    ${
    customHandicapAngleMode
        ?
        (calcHandicapAngleBuff(player) > 0
        ? `<span class="buff-plus">+${calcHandicapAngleBuff(player)}%</span>`
        : calcHandicapAngleBuff(player) < 0
        ? `<span class="buff-minus">${calcHandicapAngleBuff(player)}%</span>`
        : "0%")
        :
player.handicap + "ライン"
        }
        </td>

        <td class="custom-select-cell ${customStartPowerMode === 2 ? 'custom-off-column' : ''}">
            ${
                customStartPowerMode === 1
                ?
                (
                    calcAbilityStartPowerBuff(player) > 0
                    ? `<span class="buff-plus">+${calcAbilityStartPowerBuff(player)}%</span>`
                    : calcAbilityStartPowerBuff(player) < 0
                    ? `<span class="buff-minus">${calcAbilityStartPowerBuff(player)}%</span>`
                    : "0%"
                )
                :
                customStartPowerMode === 2
                ?
                (
                    calcAbilityStartPowerBuff(player) > 0
                    ? `<span class="buff-plus">+${calcAbilityStartPowerBuff(player)}%</span>`
                    : calcAbilityStartPowerBuff(player) < 0
                    ? `<span class="buff-minus">${calcAbilityStartPowerBuff(player)}%</span>`
                    : "0%"
                )
                :
                `${getStartPowerClass(player.rank)}★${player.sPower || ""}`
            }
        </td>

        <td class="${customSTMode === 2 ? 'custom-off-column' : ''}">
    ${
    customSTMode
        ?
        (calcAbilitySTBuff(player) > 0
        ? `<span class="buff-plus">+${calcAbilitySTBuff(player)}%</span>`
        : calcAbilitySTBuff(player) < 0
        ? `<span class="buff-minus">${calcAbilitySTBuff(player)}%</span>`
        : "0%")
        :
        player.st
        }
        </td>

                <td class="${customTempMode === 2 ? 'custom-off-column' : ''}">
    ${
    customTempMode
?
(calcTemperatureBuff(player) > 0
? `<span class="buff-plus">+${calcTemperatureBuff(player)}%</span>`
: calcTemperatureBuff(player) < 0
? `<span class="buff-minus">${calcTemperatureBuff(player)}%</span>`
: "0%")
:
race.track + " " + race.trackTemp
}
</td>

<td
    class="score"
    onclick="showScoreDetail(
        '${name}',
        'customAbility',
        ${score}
    )"
>
    ${score ?? "—"}
</td>

    </tr>
    `;
}
colorCustomAbilityScoreRank();

}
function showCustomScoreMenu(cell, name, type){

    // すでにメニューがあれば削除
    document.querySelectorAll(".custom-score-menu")
        .forEach(menu => menu.remove());

    const menu = document.createElement("div");
    menu.className = "custom-score-menu";

    for(let i = 1; i <= 10; i++){

        const option = document.createElement("div");

        option.textContent = i;

        option.onclick = function(e){

            e.stopPropagation();

            if(type === "start"){
                players[name].customStart = i;
            }
            else if(type === "wet"){
                players[name].customWet = i;
            }
            else if(type === "mixed"){
                players[name].customMixed = i;
            }

            menu.remove();

            createCustomAbilityTable();
createCustomDevelopmentTable();
        };

        menu.appendChild(option);
    }

    document.body.appendChild(menu);

    const rect = cell.getBoundingClientRect();

    menu.style.position = "absolute";
    menu.style.left = rect.left + window.scrollX + "px";
    menu.style.top = rect.bottom + window.scrollY + "px";
}


function createDevelopmentTable(){

const table = document.getElementById("developmentTable");
table.innerHTML = "";

let playerList = Object.entries(players);

if(developmentRankMode){
    playerList.sort((a,b)=>{
        const aZero = Number(a[1].time) === 0;
        const bZero = Number(b[1].time) === 0;

        if(aZero && !bZero) return 1;
        if(!aZero && bZero) return -1;

        return calcDevelopmentScore(b[1]) - calcDevelopmentScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
        (Number(player.time) + Number(player.diff) / 1000).toFixed(3);

    const score = Number(player.time) === 0 ? null : calcDevelopmentScore(player);

    table.innerHTML += `
    <tr>

        <td class="car car${player.car}">
            ${player.car}
        </td>

        <td>
            <a href="#" onclick="openPlayer('${name}')">
                ${name}
            </a>
        </td>

        <td class="trial-time">
            ${Number(player.time) === 0 ? "—" : Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${Number(player.time) === 0 ? "—" : predictedTime}
        </td>

       <td class="triple-rate">
${
    race.track === "良"
        ? Number(player.goodTrack3Rate || 0) + "%"
        : race.track === "湿"
            ? Number(player.wetTrack3Rate || 0) + "%"
            : race.track === "斑"
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0%"
}
</td>

        <td class="recent10-score">
            ${(() => {
                const recent10 = calcRecent10Score(player);
                return `
    <span class="${getRecent10ScoreClass(player)}">
        ${recent10.score}
    </span><br>
    <span class="${getRecent10EvaluationClass(player)}">
        ${recent10.evaluation}
    </span>
`;
            })()}
        </td>

        <td>
    ${
        handicapMode
        ?
        (() => {
            const handicapBuff =
                calcDevelopmentDeployBuff(player) +
                calcDevelopmentHandicapAngleBuff(player);

            return handicapBuff > 0
                ? `<span class="buff-plus">+${handicapBuff}%</span>`
                : handicapBuff < 0
                ? `<span class="buff-minus">${handicapBuff}%</span>`
                : "0%";
        })()
        :
        player.handicap
    }
</td>
        <td>
        ${
        startPowerMode
        ?
        (
            calcDevelopmentStartPowerBuff(player) > 0
            ? `<span class="buff-plus">+${calcDevelopmentStartPowerBuff(player)}%</span>`
            : calcDevelopmentStartPowerBuff(player) < 0
            ? `<span class="buff-minus">${calcDevelopmentStartPowerBuff(player)}%</span>`
            : "0%"
        )
        :
        `${getStartPowerClass(player.rank)}★${player.sPower || ""}`
        }
        </td>
        <td>
        ${
            soloPowerMode
            ?
            (() => {
                const buff = calcSoloPowerBuff(player);
                return buff === null
                    ? "－"
                    : buff > 0
                    ? `<span class="buff-plus">+${buff * 3}%</span>`
                    : buff < 0
                    ? `<span class="buff-minus">${buff * 3}%</span>`
                    : "0%";
            })()
            :
            `★${player.soloPower || ""}`
        }
        </td>

        <td>
        ${
            catchUpPowerMode
            ?
            (() => {
                const buff = calcCatchUpPowerBuff(player);
                return buff === null
                    ? "－"
                    : buff > 0
                    ? `<span class="buff-plus">+${buff * 3}%</span>`
                    : buff < 0
                    ? `<span class="buff-minus">${buff * 3}%</span>`
                    : "0%";
            })()
            :
            `★${player.catchUpPower || ""}`
        }
        </td>


        <td>
    ${
        tempMode
?
(
    calcDevelopmentTemperatureBuff(player) > 0
    ? `<span class="buff-plus">+${calcDevelopmentTemperatureBuff(player)}%</span>`
    : calcDevelopmentTemperatureBuff(player) < 0
    ? `<span class="buff-minus">${calcDevelopmentTemperatureBuff(player)}%</span>`
    : "0%"
)
:
race.track + " " + race.trackTemp
}
</td>

<td
    class="score"
    onclick="showScoreDetail(
        '${name}',
        'development',
        ${score}
    )"
>
    ${score ?? "—"}
</td>

    </tr>
    `;
}

}

function createCustomDevelopmentTable(){

const table = document.getElementById("customDevelopmentTable");
table.innerHTML = "";

let playerList = Object.entries(players);

if(developmentRankMode){
    playerList.sort((a,b)=>{
        const aZero = Number(a[1].time) === 0;
        const bZero = Number(b[1].time) === 0;

        if(aZero && !bZero) return 1;
        if(!aZero && bZero) return -1;

        return calcCustomDevelopmentScore(b[1]) - calcCustomDevelopmentScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
    (Number(player.time) + Number(player.diff)/1000).toFixed(3);

    const score = Number(player.time) === 0 ? null : calcCustomDevelopmentScore(player);

    table.innerHTML += `
    <tr>

        <td class="car car${player.car}">
            ${player.car}
        </td>

        <td>
            <a href="#" onclick="openPlayer('${name}')">
                ${name}
            </a>
        </td>

        <td class="trial-time">
            ${Number(player.time) === 0 ? "—" : Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${Number(player.time) === 0 ? "—" : predictedTime}
        </td>

        <td class="triple-rate">
${
    race.track === "良"
        ? Number(player.goodTrack3Rate || 0) + "%"
        : race.track === "湿"
            ? Number(player.wetTrack3Rate || 0) + "%"
            : race.track === "斑"
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0%"
}
</td>

<td class="recent10-score">
    ${(() => {
        const recent10 = calcRecent10Score(player);
        return `
    <span class="${getRecent10ScoreClass(player)}">
        ${recent10.score}
    </span><br>
    <span class="${getRecent10EvaluationClass(player)}">
        ${recent10.evaluation}
    </span>
`;
    })()}
</td>

<td class="custom-select-cell ${customStartMode === 2 ? 'custom-off-column' : ''}"
    onclick="showCustomScoreMenu(this, '${name}', 'start')">
    ${
        customStartMode
        ?
        (
            calcDevelopmentStartBuff(player) > 0
            ? `<span class="buff-plus">+${calcDevelopmentStartBuff(player)}%</span>`
            : calcDevelopmentStartBuff(player) < 0
            ? `<span class="buff-minus">${calcDevelopmentStartBuff(player)}%</span>`
            : "0%"
        )
        :
        (player.customStart || "")
    }
</td>
<td class="custom-select-cell ${customWetMode === 2 ? 'custom-off-column' : ''}"
    onclick="showCustomScoreMenu(this, '${name}', 'wet')">
    ${
        customWetMode
        ?
        (
            calcWetBuff(player) > 0
            ? `<span class="buff-plus">+${calcWetBuff(player)}%</span>`
            : calcWetBuff(player) < 0
            ? `<span class="buff-minus">${calcWetBuff(player)}%</span>`
            : "0%"
        )
        :
        (player.customWet || "")
    }
</td>

<td
    <td class="custom-select-cell ${customMixedMode === 2 ? 'custom-off-column' : ''}"
    onclick="showCustomScoreMenu(this, '${name}', 'mixed')">

    ${
        customMixedMode
        ?
        (
            calcMixedBuff(player) > 0
            ? `<span class="buff-plus">+${calcMixedBuff(player)}%</span>`
            : calcMixedBuff(player) < 0
            ? `<span class="buff-minus">${calcMixedBuff(player)}%</span>`
            : "0%"
        )
        :
        (player.customMixed || "")
    }
</td>

<td class="${customHandicapMode === 2 ? 'custom-off-column' : ''}">
    ${
        customHandicapMode
        ?
        (
            calcDevelopmentDeployBuff(player) > 0
            ? `<span class="buff-plus">+${calcDevelopmentDeployBuff(player)}%</span>`
            : calcDevelopmentDeployBuff(player) < 0
            ? `<span class="buff-minus">${calcDevelopmentDeployBuff(player)}%</span>`
            : "0%"
        )
        :
        player.handicap
    }
</td>

<td class="${customHandicapAngleMode === 2 ? 'custom-off-column' : ''}">
    ${
        customHandicapAngleMode
?
(
    calcDevelopmentHandicapAngleBuff(player) > 0
    ? `<span class="buff-plus">+${calcDevelopmentHandicapAngleBuff(player)}%</span>`
    : calcDevelopmentHandicapAngleBuff(player) < 0
    ? `<span class="buff-minus">${calcDevelopmentHandicapAngleBuff(player)}%</span>`
    : "0%"
)
:
player.handicap + "ライン"
    }
        </td>

        <td class="custom-select-cell ${customStartPowerMode === 2 ? 'custom-off-column' : ''}">
        ${
            customStartPowerMode === 1
            ?
            (
                calcDevelopmentStartPowerBuff(player) > 0
                ? `<span class="buff-plus">+${calcDevelopmentStartPowerBuff(player)}%</span>`
                : calcDevelopmentStartPowerBuff(player) < 0
                ? `<span class="buff-minus">${calcDevelopmentStartPowerBuff(player)}%</span>`
                : "0%"
            )
            :
            customStartPowerMode === 2
            ?
            (
                calcDevelopmentStartPowerBuff(player) > 0
                ? `<span class="buff-plus">+${calcDevelopmentStartPowerBuff(player)}%</span>`
                : calcDevelopmentStartPowerBuff(player) < 0
                ? `<span class="buff-minus">${calcDevelopmentStartPowerBuff(player)}%</span>`
                : "0%"
            )
            :
            `${getStartPowerClass(player.rank)}★${player.sPower || ""}`
        }
        </td>

        <td class="${customSTMode === 2 ? 'custom-off-column' : ''}">
        ${
        customSTMode
        ?
        (calcDevelopmentSTBuff(player) > 0
        ? `<span class="buff-plus">+${calcDevelopmentSTBuff(player)}%</span>`
        : calcDevelopmentSTBuff(player) < 0
        ? `<span class="buff-minus">${calcDevelopmentSTBuff(player)}%</span>`
        : "0%")
        :
        player.st
        }
        </td>

        <td class="${customTempMode === 2 ? 'custom-off-column' : ''}">
    ${
                customTempMode
        ?
        (
            calcDevelopmentTemperatureBuff(player) > 0
            ? `<span class="buff-plus">+${calcDevelopmentTemperatureBuff(player)}%</span>`
            : calcDevelopmentTemperatureBuff(player) < 0
            ? `<span class="buff-minus">${calcDevelopmentTemperatureBuff(player)}%</span>`
            : "0%"
        )
        :
        race.track + " " + race.trackTemp
    }
</td>

<td
    class="score"
    onclick="showScoreDetail(
        '${name}',
        'customDevelopment',
        ${score}
    )"
>
    ${score ?? "—"}
</td>

    </tr>
    `;
}

colorCustomDevelopmentScoreRank();

}

function calcExpectationScore(player){

const abilityScore = calcAbilityScore(player);
const developmentScore = calcDevelopmentScore(player);

return (abilityScore + developmentScore) / 2;

}

async function createALVerificationData(resultList = null){

    if(!currentRaceData){
        console.error("現在のレースデータがありません");
        return [];
    }

    const venue =
        currentRaceData.placeKey ||
        "hamamatsu";

    const raceDate =
        currentRaceData.raceDate;

    const raceNo =
        Number(currentRaceData.raceNo);

    /*
     * =========================
     * 実際のレース結果を取得
     * =========================
     */

    const resultFile =
    `${venue}-${raceNo}r-result.json`;

let resultData;

try {
    const response =
        await fetch(resultFile);

    if(!response.ok){
        throw new Error(
            `結果JSON取得失敗: ${response.status}`
        );
    }

    resultData =
        await response.json();

} catch(error){
    console.error(
        "AL検証用の実結果取得失敗:",
        error
    );
    return [];
}

    /*
     * =========================
     * 実着順を車番 → 着順に変換
     * =========================
     */

    const finishMap = {};

    for(const result of resultData.results || []){

        finishMap[Number(result.car)] =
            result.finish;

    }

    /*
     * =========================
     * AL期待値を計算
     * =========================
     */

    const list =
        Object.entries(players).map(
            ([name, player]) => {

                return {

                    name: name,

                    car:
                        Number(player.car),

                    alScore:
                        calcExpectationScore(player),

                    finish:
                        finishMap[
                            Number(player.car)
                        ] ?? null

                };

            }
        );

    /*
     * =========================
     * AL期待値の高い順
     * =========================
     */

    list.sort(
        (a, b) =>
            b.alScore - a.alScore
    );

    /*
     * =========================
     * AL順位・次順位との差
     * =========================
     */

    list.forEach(
        (player, index) => {

            player.alRank =
                index + 1;

            if(
                index <
                list.length - 1
            ){

                player.scoreDiff =
                    player.alScore -
                    list[index + 1].alScore;

            }else{

                // 最下位は比較対象なし
                player.scoreDiff =
                    null;

            }

        }
    );

    console.table(list);

    return list;

}

async function calculateALVerificationStats(){

    const data = await createALVerificationData();
    const stats = {};

    // AL1位〜8位
    for(let rank = 1; rank <= 8; rank++){

        stats[rank] = {
            "3点以下": {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                triple: 0
            },
            "4点以上": {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                triple: 0
            }
        };

        // 同じAL順位の全データを集計
        const players = data.filter(
            player => player.alRank === rank
        );

        for(const player of players){

            let group;

            if(player.scoreDiff <= 3.0){

                group = stats[rank]["3点以下"];

            }else if(player.scoreDiff >= 3.5){

                group = stats[rank]["4点以上"];

            }else{

                continue;

            }

            group.count++;

            if(player.finish === 1){
                group.first++;
            }

            if(player.finish === 2){
                group.second++;
            }

            if(player.finish === 3){
                group.third++;
            }

            if(player.finish >= 1 && player.finish <= 3){
                group.triple++;
            }
        }
    }

    return stats;
}

function createExpectationTable(){

console.log("EXPECTATION TABLE UPDATE:", race.raceNo, "players:", Object.keys(players).length);
const table = document.getElementById("expectationTable");

table.innerHTML = "";

let playerList = Object.entries(players);


if(expectationRankMode){

    playerList.sort((a,b)=>{
        const aZero = Number(a[1].time) === 0;
        const bZero = Number(b[1].time) === 0;

        if(aZero && !bZero) return 1;
        if(!aZero && bZero) return -1;

        return calcExpectationScore(b[1])
        - calcExpectationScore(a[1]);
    });

}


for(const [name, player] of playerList){

const abilityScore = calcAbilityScore(player);
const developmentScore = calcDevelopmentScore(player);

const expectationScore =
Number(player.time) === 0
    ? null
    : ((abilityScore + developmentScore) / 2).toFixed(1);


table.innerHTML += `
<tr>

<td class="car car${player.car}">
${player.car}
</td>

<td>
    <a href="#" onclick="openPlayer('${name}')">
        ${name}
    </a>
</td>

<td>
${abilityScore}
</td>

<td>
${developmentScore}
</td>

<td class="score">
${expectationScore ?? "—"}
</td>

</tr>
`;

}

}

function createCustomExpectationTable(){

const table = document.getElementById("customExpectationTable");
table.innerHTML = "";

let playerList = Object.entries(players);

if(expectationRankMode){
playerList.sort((a,b)=>{
const aZero = Number(a[1].time) === 0;
const bZero = Number(b[1].time) === 0;

if(aZero && !bZero) return 1;
if(!aZero && bZero) return -1;

return calcExpectationScore(b[1])
- calcExpectationScore(a[1]);
});
}

for(const [name, player] of playerList){

const abilityScore = calcAbilityScore(player);
const developmentScore = calcDevelopmentScore(player);

const expectationScore =
Number(player.time) === 0
    ? null
    : ((abilityScore + developmentScore) / 2).toFixed(1);


table.innerHTML += `
<tr>

<td class="car car${player.car}">
${player.car}
</td>

<td>
<a href="#" onclick="openPlayer('${name}')">
${name}
</a>
</td>

<td>
${abilityScore}
</td>



<td>
${developmentScore}
</td>

<td class="score">
${expectationScore ?? "—"}
</td>

</tr>
`;

}
colorCustomExpectationScoreRank();
}



function calcSTBuff(player){

// 同じハンデの選手だけ集める
const group = Object.values(players).filter(p =>
    p.handicap === player.handicap
);

// 同ハンデ1人なら補正なし
if(group.length <= 1){
    return 0;
}

// 同ハンデ平均ST
const avgST =
group.reduce((sum,p)=>sum + Number(p.st),0) / group.length;

//平均との差
const diff =
avgST - Number(player.st);

let buff = 0;

// 差で補正
if(diff >= 0.03){
    buff = 3;
}
else if(diff >= 0.02){
    buff = 2;
}
else if(diff >= 0.01){
    buff = 1;
}
else if(diff <= -0.03){
    buff = -3;
}
else if(diff <= -0.02){
    buff = -2;
}
else if(diff <= -0.01){
    buff = -1;
}
else{
    buff = 0;
}

return buff;

}


// =========================
// 独走力・追込み力補正
// =========================

function isOpenHandicapRace(){

    const racePlayers = Object.values(players);

    if(racePlayers.length === 0){
        return "";
    }

    const handicaps = racePlayers.map(p => p.handicap);

    if(handicaps.every(h => h === "0m")){
        return "0m";
    }

    if(handicaps.every(h => h === "10m")){
        return "10m";
    }

    return "";
}

function calcSoloPowerBuff(player){

    const openHandicap = isOpenHandicapRace();

    // 0mオープン・10mオープンは補正なし
    if(openHandicap === "0m" || openHandicap === "10m"){
        return null;
    }

    const handicap = parseInt(
        String(player.handicap || "0").replace("m", ""),
        10
    );

    // 独走力は0m・10mのみ
    if(handicap !== 0 && handicap !== 10){
        return null;
    }

    const rankClass = getStartPowerClass(player.rank);

    if(!rankClass){
        return 0;
    }

    const star = Number(player.soloPower);

    if(star < 1 || star > 5){
        return 0;
    }

    const rankBuff = {
        "B級": {1:-1, 2:0, 3:1, 4:2, 5:3},
        "A級": {1:-2, 2:-1, 3:0, 4:1, 5:2},
        "S級": {1:-3, 2:-2, 3:-1, 4:0, 5:1}
    };

    return rankBuff[rankClass]?.[star] ?? 0;
}

function calcCatchUpPowerBuff(player){

    const openHandicap = isOpenHandicapRace();

    // 0mオープン・10mオープンは補正なし
    if(openHandicap === "0m" || openHandicap === "10m"){
        return null;
    }

    const handicap = parseInt(
        String(player.handicap || "0").replace("m", ""),
        10
    );

    // 追込み力は20m以上
    if(isNaN(handicap) || handicap < 20){
        return null;
    }

    const rankClass = getStartPowerClass(player.rank);

    if(!rankClass){
        return 0;
    }

    const star = Number(player.catchUpPower);

    if(star < 1 || star > 5){
        return 0;
    }

    const rankBuff = {
        "B級": {1:-1, 2:0, 3:1, 4:2, 5:3},
        "A級": {1:-2, 2:-1, 3:0, 4:1, 5:2},
        "S級": {1:-3, 2:-2, 3:-1, 4:0, 5:1}
    };

    return rankBuff[rankClass]?.[star] ?? 0;
}

function calcAbilitySoloPowerBuff(player){
    return calcSoloPowerBuff(player);
}

function calcAbilityCatchUpPowerBuff(player){
    return calcCatchUpPowerBuff(player);
}

function calcDevelopmentSoloPowerBuff(player){
    return calcSoloPowerBuff(player) * 3;
}

function calcDevelopmentCatchUpPowerBuff(player){
    return calcCatchUpPowerBuff(player) * 3;
}


function calcAbilitySTBuff(player){

    return calcSTBuff(player);

}

function calcDevelopmentSTBuff(player){

    return calcSTBuff(player) * 3;

}



function calcCustomStartBuff(player){

    // 同じハンデの選手だけ取得
    const group = Object.values(players).filter(p =>
        p.handicap === player.handicap &&
        p.customStart != null
    );

    // 比較対象が1人以下なら補正なし
    if(group.length <= 1){
        return 0;
    }

    // 同ハンデのスタート力平均
    const avgStart =
        group.reduce((sum, p) =>
            sum + Number(p.customStart), 0
        ) / group.length;

    // 平均との差
    const diff =
        Number(player.customStart) - avgStart;

    // 補正
    if(diff >= 2){
        return 3;
    }
    else if(diff >= 1){
        return 1;
    }
    else if(diff <= -2){
        return -3;
    }
    else if(diff <= -1){
        return -1;
    }

    return 0;
}


function calcAbilityTemperatureBuff(player){

    return calcTemperatureBuff(player);

}

function calcDevelopmentTemperatureBuff(player){

    return calcTemperatureBuff(player) * 3;

}

function calcAbilityDeployBuff(player){

    return calcDeployBuff(player);

}

function calcDevelopmentDeployBuff(player){

    return calcDeployBuff(player) * 3;

}

function calcAbilityStartBuff(player){
    return calcCustomStartBuff(player);
}

function calcDevelopmentStartBuff(player){
    return calcCustomStartBuff(player) * 3;
}

function calcWetBuff(player){

    const playersList = Object.values(players);

    const values = playersList.map(p =>
        Number(p.customWet || 0)
    ).filter(v => !isNaN(v));

    if(values.length === 0){
        return 0;
    }

    const average =
        values.reduce((sum, v) => sum + v, 0) / values.length;

    return (Number(player.customWet || 0) - average) * 2;
}

function calcMixedBuff(player){

    const values = Object.values(players)
        .map(p => Number(p.customMixed))
        .filter(v => !isNaN(v));

    if(values.length === 0) return 0;

    const value = Number(player.customMixed);

    // まだ数字が入力されていない選手は補正なし
    if(isNaN(value)) return 0;

    const average =
        values.reduce((a,b) => a + b, 0) / values.length;

    return Math.round((value - average) * 2);
}
if (document.getElementById("abilityTable")) {
    createAbilityTable();
}



function colorScoreRank(){

const scoreCells =
document.querySelectorAll("#abilityTable tr td:last-child");


let scores = [];

scoreCells.forEach(cell=>{
    scores.push(Number(cell.textContent));
});


scores.sort((a,b)=>b-a);


scoreCells.forEach(cell=>{

let score = Number(cell.textContent);


if(score === scores[0]){
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    cell.classList.add("second-score");
}

if(score === scores[0]){
    console.log("1位", score);
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    console.log("2位", score);
    cell.classList.add("second-score");
}

});

}

function colorCustomAbilityScoreRank(){

    const table =
        document.querySelector("#customAbilityTable");

    // まず既存の順位色を全部解除
    table.querySelectorAll(".best-score, .second-score")
        .forEach(cell=>{
            cell.classList.remove("best-score", "second-score");
        });

    // 試走タイム：小さいほど上位
    colorCustomColumnRank(
        table,
        ".trial-time",
        "asc"
    );

    // 予想競走タイム：小さいほど上位
    colorCustomColumnRank(
        table,
        ".predicted-time",
        "asc"
    );

    // 3連対率：大きいほど上位
    colorCustomColumnRank(
        table,
        ".triple-rate",
        "desc"
    );

    // ALスコア：大きいほど上位
    colorCustomColumnRank(
        table,
        ".score",
        "desc"
    );

}

function colorCustomColumnRank(table, selector, order){

    const cells =
        [...table.querySelectorAll(selector)];

    const values =
        cells.map(cell =>
            Number(
                cell.textContent
                    .replace("%","")
                    .trim()
            )
        );

    values.sort((a,b)=>
        order === "asc"
        ? a - b
        : b - a
    );

    cells.forEach(cell=>{

        const value =
            Number(
                cell.textContent
                    .replace("%","")
                    .trim()
            );

        if(value === values[0]){
            cell.classList.add("best-score");
        }

        else if(value === values[1]){
            cell.classList.add("second-score");
        }

    });

}

function colorCustomDevelopmentScoreRank(){

    const table =
        document.querySelector("#customDevelopmentTable");

    // 既存の順位色を解除
    table.querySelectorAll(".best-score, .second-score")
        .forEach(cell=>{
            cell.classList.remove("best-score", "second-score");
        });

    // 試走タイム：小さいほど上位
    colorCustomColumnRank(
        table,
        ".trial-time",
        "asc"
    );

    // 予想競走タイム：小さいほど上位
    colorCustomColumnRank(
        table,
        ".predicted-time",
        "asc"
    );

    // 3連対率：大きいほど上位
    colorCustomColumnRank(
        table,
        ".triple-rate",
        "desc"
    );

    // ALスコア：大きいほど上位
    colorCustomColumnRank(
        table,
        ".score",
        "desc"
    );

}

function colorCustomExpectationScoreRank(){

    const table =
        document.querySelector("#customExpectationTable");

    // 既存の順位色を解除
    table.querySelectorAll(".best-score, .second-score")
        .forEach(cell=>{
            cell.classList.remove("best-score", "second-score");
        });

    const rows =
        [...table.querySelectorAll("tr")];

    // 能力スコア
    colorCustomColumnRankByCell(
        rows,
        2
    );

    // 展開スコア
    colorCustomColumnRankByCell(
        rows,
        3
    );

    // AL期待値
    colorCustomColumnRank(
        table,
        ".score",
        "desc"
    );

}

function colorCustomColumnRankByCell(rows, index){

    const cells =
        rows.map(row =>
            row.querySelectorAll("td")[index]
        );

    const values =
        cells.map(cell =>
            Number(cell.textContent.trim())
        );

    values.sort((a,b)=>b-a);

    cells.forEach(cell=>{

        const value =
            Number(cell.textContent.trim());

        if(value === values[0]){
            cell.classList.add("best-score");
        }

        else if(value === values[1]){
            cell.classList.add("second-score");
        }

    });

}


function colorDevelopmentScoreRank(){

const scoreCells =
document.querySelectorAll("#developmentTable tr td:last-child");


let scores = [];

scoreCells.forEach(cell=>{
    scores.push(Number(cell.textContent));
});


scores.sort((a,b)=>b-a);


scoreCells.forEach(cell=>{

let score = Number(cell.textContent);


if(score === scores[0]){
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    cell.classList.add("second-score");
}

if(score === scores[0]){
    console.log("1位", score);
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    console.log("2位", score);
    cell.classList.add("second-score");
}

});

}





/*
document.getElementById("mainRaceVenue").innerHTML = race.venue;

document.getElementById("mainRaceNo").innerHTML = race.raceNo;

document.getElementById("mainRaceTitle").innerHTML = race.title;

document.getElementById("mainRaceDate").innerHTML = race.date;

document.getElementById("mainRaceWeather").innerHTML = race.weather;

document.getElementById("mainRaceTrack").innerHTML = race.track;

document.getElementById("mainRaceCars").innerHTML = race.cars;
*/
function changeTab(tabId, button) {

    // 全部隠す
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
    });

    // ボタンの色をリセット
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // 成績ボタンの青を解除
document.querySelectorAll(".race-tab-btn")
.forEach(btn=>{
    if(btn.textContent.trim() === "成績"){
        btn.classList.remove("active");
    }
});

    // 選んだタブを表示
    document.getElementById(tabId).style.display = "block";

    // 押したボタンを青色に
    button.classList.add("active");

    // AL検証タブを開いたら検証表を自動更新
    if(tabId === "verification"){
        renderALVerificationStats();
    }

    const params = new URLSearchParams(window.location.search);

const raceNumber = params.get("race");

if (raceNumber) {
    document.getElementById("raceTitle").textContent =
    race.venue + " " + raceNumber + "R";
}
}

function changeRecent(){

// 成績ボタンだけ青
event.currentTarget.classList.add("active");


// AL予想などメインタブの色解除
document.querySelectorAll(".tab-btn")
.forEach(btn=>{
    btn.classList.remove("active");
});


// AL内部タブ解除
document.querySelectorAll(".al-tab-btn")
.forEach(btn=>{
    btn.classList.remove("active");
});


// 全ページ非表示
document.querySelectorAll(".tab-content")
.forEach(tab=>{
    tab.style.display="none";
});


// 成績表示
document.getElementById("recent").style.display="block";

}
function toggleAbout(button){

const about =
document.getElementById("about");


if(about.style.display === "block"){

about.style.display = "none";
button.classList.remove("active");

}else{

about.style.display = "block";
button.classList.add("active");

}

}

function changeALTab(tab, button){

const page = document.getElementById(tab);

console.log(page);
console.log("tab:", tab);

// AL予想とは？をもう一度押したら閉じる
if(tab === "about" && page.style.display === "block"){

    page.style.display = "none";
    button.classList.remove("active");

    return;
}

// 一旦全部閉じる
document.querySelectorAll(".al-page").forEach(page=>{
    page.style.display = "none";
});


// 選択したページ表示
page.style.display = "block";

if(tab === "expectationArea"){
    createExpectationTable();
    colorExpectationAbilityRank();
    colorExpectationDevelopmentRank();
    colorExpectationScoreRank();
}

console.log("表示設定:", page.style.display);

// ボタン状態変更
document.querySelectorAll(".al-tab-btn").forEach(btn=>{
    btn.classList.remove("active");
});

document.querySelectorAll(".race-tab-btn")
.forEach(btn=>{
    if(btn.textContent === "成績"){
        btn.classList.remove("active");
    }
});

button.classList.add("active");

}



// 初期表示を能力重視ALにする
document.addEventListener("DOMContentLoaded", function(){

const abilityButton =
document.querySelector(".al-sub-tabs .al-tab-btn");

if(abilityButton){
    changeALTab("ability", abilityButton);
}

});

function colorTripleRateRank(){

const rateCells =
document.querySelectorAll("#abilityTable .triple-rate");

let rates = [];

rateCells.forEach(cell=>{
rates.push(Number(cell.textContent.replace("%","")));
});

rates.sort((a,b)=>b-a);

rateCells.forEach(cell=>{

let rate =
Number(cell.textContent.replace("%",""));

if(rate === rates[0]){
cell.classList.add("best-score");
}
else if(rate === rates[1]){
cell.classList.add("second-score");
}

});

}

function colorDevelopmentTripleRateRank(){

const rateCells =
document.querySelectorAll("#developmentTable .triple-rate");

let rates = [];

rateCells.forEach(cell=>{
rates.push(Number(cell.textContent.replace("%","")));
});

rates.sort((a,b)=>b-a);

rateCells.forEach(cell=>{

let rate =
Number(cell.textContent.replace("%",""));

if(rate === rates[0]){
cell.classList.add("best-score");
}

else if(rate === rates[1]){
cell.classList.add("second-score");
}

});

}

function colorPredictedTimeRank(){

const timeCells =
document.querySelectorAll("#abilityTable .predicted-time");

let times = [];

timeCells.forEach(cell=>{
    times.push(Number(cell.textContent));
});

times.sort((a,b)=>a-b);


timeCells.forEach(cell=>{

let time = Number(cell.textContent);


if(time === times[0]){
    cell.classList.add("best-score");
}

else if(time === times[1]){
    cell.classList.add("second-score");
}

});

}

function colorDevelopmentPredictedTimeRank(){

    const timeCells =
        document.querySelectorAll("#developmentTable .predicted-time");

    const validCells = [];
    const times = [];

    timeCells.forEach(cell => {

        const time = Number(cell.textContent);

        if(Number.isFinite(time)){
            validCells.push(cell);
            times.push(time);
        }

    });

    times.sort((a,b) => a-b);

    validCells.forEach(cell => {

        const time = Number(cell.textContent);

        if(time === times[0]){
            cell.classList.add("best-score");
        }
        else if(time === times[1]){
            cell.classList.add("second-score");
        }

    });

}

function colorTrialTimeRank(){

const trialCells =
document.querySelectorAll("#abilityTable .trial-time");
let times = [];

trialCells.forEach(cell=>{
    times.push(Number(cell.textContent));
});

times.sort((a,b)=>a-b);

trialCells.forEach(cell=>{

let time = Number(cell.textContent);

if(time === times[0]){
    cell.classList.add("best-score");
}

else if(time === times[1]){
    cell.classList.add("second-score");
}

});

}

function colorDevelopmentTrialTimeRank(){

const trialCells =
document.querySelectorAll("#developmentTable .trial-time");
let times = [];

trialCells.forEach(cell=>{
    times.push(Number(cell.textContent));
});

times.sort((a,b)=>a-b);

trialCells.forEach(cell=>{

let time = Number(cell.textContent);

if(time === times[0]){
    cell.classList.add("best-score");
}

else if(time === times[1]){
    cell.classList.add("second-score");
}

});

}


function toggleAbilityRank(){

    abilityRankMode = !abilityRankMode;

    createAbilityTable();

    colorScoreRank();
    colorPredictedTimeRank();
    colorTrialTimeRank();
    colorTripleRateRank();

}

function toggleDevelopmentRank(){

    developmentRankMode = !developmentRankMode;

    createDevelopmentTable();

    colorDevelopmentScoreRank();
    colorDevelopmentPredictedTimeRank();
    colorDevelopmentTrialTimeRank();
    colorDevelopmentTripleRateRank();


}

function toggleExpectationRank(){

    expectationRankMode = !expectationRankMode;

    createExpectationTable();

    colorExpectationAbilityRank();
    colorExpectationDevelopmentRank();
    colorExpectationScoreRank();

}


function toggleCustomAbilityRank(){

abilityRankMode = !abilityRankMode;

createCustomAbilityTable();

colorScoreRank();
colorPredictedTimeRank();
colorTrialTimeRank();
colorTripleRateRank();

}

function toggleCustomDevelopmentRank(){

developmentRankMode = !developmentRankMode;

createCustomDevelopmentTable();

colorDevelopmentScoreRank();
colorDevelopmentPredictedTimeRank();
colorDevelopmentTrialTimeRank();
colorDevelopmentTripleRateRank();

}

function toggleCustomExpectationRank(){

expectationRankMode = !expectationRankMode;

createCustomExpectationTable();

}


function toggleHandicap(){

    handicapMode = !handicapMode;

    const headers =
    document.querySelectorAll(".handicap-header");

    headers.forEach(header => {

        if(handicapMode){
            header.textContent = "ハンデ補正 ▲";
        }else{
            header.textContent = "ハンデ ▼";
        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();
    colorPredictedTimeRank();
    colorDevelopmentPredictedTimeRank();

}

function toggleHandicapAngle(){

handicapAngleMode = !handicapAngleMode;

const headers =
document.querySelectorAll(".handicap-angle-header");

headers.forEach(header=>{

    if(handicapAngleMode){
        header.textContent =
        "ハンデ角度補正 ▲";
    }else{
        header.textContent =
        "ハンデ角度 ▼";
    }

});

createAbilityTable();
createDevelopmentTable();

const area =
document.getElementById("handicapAngleArea");

if(!area){
    return;
}

if(handicapAngleMode){

let html = "";

const groups = {};

Object.values(players).forEach(player=>{

    if(!groups[player.handicap]){
        groups[player.handicap] = [];
    }

    groups[player.handicap].push(player);

});

for(let handicap in groups){

    if(handicap === "0m"){
        continue;
    }

    html += `
    <div class="handicap-line">
        <h4>${handicap}ライン</h4>
    `;

    groups[handicap]
.sort((a,b)=>a.car-b.car)
.forEach((player,index)=>{

    let buff = 0;

    if(groups[handicap].length >= 4){
        buff = index * -0.5;
    }

        html += `
        <div>
            ${player.car}号車 ${Object.keys(players)
            .find(name=>players[name]===player)}
            :
            ${buff}%
        </div>
        `;

    });

    html += `
    </div>
    `;

}

area.innerHTML = "";

}else{

area.innerHTML = "";

}

}

function toggleST(){

    stMode = !stMode;

    const headers =
    document.querySelectorAll(".st-header");

    headers.forEach(header => {

        if(stMode){
            header.textContent = "平均ST補正 ▲";
        }else{
            header.textContent = "平均ST ▼";
        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();
    colorPredictedTimeRank();
    colorDevelopmentPredictedTimeRank();

}
function toggleStartPower(){

    startPowerMode = !startPowerMode;

    const headers =
        document.querySelectorAll(".start-power-header");

    headers.forEach(header => {

        if(startPowerMode){

            header.textContent =
                "スタート力補正 ▲";

        }else{

            header.textContent =
                "スタート力 ▼";

        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();
    colorPredictedTimeRank();
    colorDevelopmentPredictedTimeRank();

}

function toggleSoloPower(){

    soloPowerMode = !soloPowerMode;

    const headers =
        document.querySelectorAll(".solo-power-header");

    headers.forEach(header => {

        if(soloPowerMode){

            header.textContent =
                "独走力補正 ▲";

        }else{

            header.textContent =
                "独走力 ▼";

        }

    });

    createAbilityTable();
    createDevelopmentTable();
    colorScoreRank();
    colorDevelopmentScoreRank();
    colorPredictedTimeRank();
    colorDevelopmentPredictedTimeRank();

}

function toggleCatchUpPower(){

    catchUpPowerMode = !catchUpPowerMode;

    const headers =
        document.querySelectorAll(".catch-up-power-header");

    headers.forEach(header => {

        if(catchUpPowerMode){

            header.textContent =
                "追込み力補正 ▲";

        }else{

            header.textContent =
                "追込み力 ▼";

        }

    });

    createAbilityTable();
    createDevelopmentTable();
    colorScoreRank();
    colorDevelopmentScoreRank();
    colorPredictedTimeRank();
    colorDevelopmentPredictedTimeRank();

}

function toggleTemperature(){

    tempMode = !tempMode;

    const headers =
    document.querySelectorAll(".temp-header");

    headers.forEach(header => {

        if(tempMode){
            header.textContent = "走路温度補正 ▲";
        }else{
            header.textContent = "走路温度 ▼";
        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();
    colorPredictedTimeRank();
    colorDevelopmentPredictedTimeRank();

}

function toggleCustomHandicap(){

    console.log("玄人ハンデクリック");

    customHandicapMode =
        (customHandicapMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-handicap-header");

    console.log("玄人ハンデヘッダー数:", headers.length);

    headers.forEach(header => {

        if(customHandicapMode === 0){

            header.textContent = "ハンデ ▼";

        }else if(customHandicapMode === 1){

            header.textContent = "ハンデ補正 ▲";

        }else{

            header.textContent = "ハンデ OFF";

        }

        console.log(
            "変更後ヘッダー:",
            header.textContent
        );

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}
function toggleCustomHandicapAngle(){

    customHandicapAngleMode =
        (customHandicapAngleMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-handicap-angle-header");

    headers.forEach(header => {

        if(customHandicapAngleMode === 0){

            header.textContent = "ハンデ角度 ▼";

        }else if(customHandicapAngleMode === 1){

            header.textContent = "ハンデ角度補正 ▲";

        }else{

            header.textContent = "ハンデ角度 OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();
}

function toggleCustomST(){

    customSTMode =
        (customSTMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-st-header");

    headers.forEach(header => {

        if(customSTMode === 0){

            header.textContent = "平均ST ▼";

        }else if(customSTMode === 1){

            header.textContent = "平均ST補正 ▲";

        }else{

            header.textContent = "平均ST OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();
}

function toggleCustomStart(){

    customStartMode =
        (customStartMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-start-header");

    headers.forEach(header => {

        if(customStartMode === 0){

            header.textContent =
                "スタート力 ▼";

        }else if(customStartMode === 1){

            header.textContent =
                "スタート力補正 ▲";

        }else{

            header.textContent =
                "スタート力 OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}

function toggleCustomStartPower(){

    customStartPowerMode =
        (customStartPowerMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-start-power-header");

    headers.forEach(header => {

        if(customStartPowerMode === 0){

            header.textContent =
                "スタート力 ▼";

        }else if(customStartPowerMode === 1){

            header.textContent =
                "スタート力補正 ▲";

        }else{

            header.textContent =
                "スタート力 OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}

function toggleCustomTemperature(){

    customTempMode =
        (customTempMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-temp-header");

    headers.forEach(header => {

        if(customTempMode === 0){

            header.textContent = "走路温度 ▼";

        }else if(customTempMode === 1){

            header.textContent = "走路温度補正 ▲";

        }else{

            header.textContent = "走路温度 OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();
}

function colorTripleRateRank(){

const rateCells =
document.querySelectorAll("#abilityTable .triple-rate");

let rates = [];

rateCells.forEach(cell=>{
    rates.push(
        Number(cell.textContent.replace("%",""))
    );
});

rates.sort((a,b)=>b-a);


rateCells.forEach(cell=>{

let rate =
Number(cell.textContent.replace("%",""));


if(rate === rates[0]){
    cell.classList.add("best-score");
}

else if(rate === rates[1]){
    cell.classList.add("second-score");
}

});

}

function toggleCustomWet(){

    customWetMode =
        (customWetMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-wet-header");

    headers.forEach(header => {

        if(customWetMode === 0){

            header.textContent =
                "湿 ▼";

        }else if(customWetMode === 1){

            header.textContent =
                "湿補正 ▲";

        }else{

            header.textContent =
                "湿 OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}
function toggleCustomMixed(){

    customMixedMode =
        (customMixedMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-mixed-header");

    headers.forEach(header => {

        if(customMixedMode === 0){

            header.textContent =
                "斑 ▼";

        }else if(customMixedMode === 1){

            header.textContent =
                "斑補正 ▲";

        }else{

            header.textContent =
                "斑 OFF";

        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}

function colorExpectationScoreRank(){

const scoreCells =
document.querySelectorAll("#expectationTable .score");

let scores = [];

scoreCells.forEach(cell=>{
    scores.push(Number(cell.textContent));
});

scores.sort((a,b)=>b-a);


scoreCells.forEach(cell=>{

let score = Number(cell.textContent);


if(score === scores[0]){
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    cell.classList.add("second-score");
}

});

}

function colorExpectationAbilityRank(){

const cells =
document.querySelectorAll("#expectationTable td:nth-child(3)");

let scores = [];

cells.forEach(cell=>{
    scores.push(Number(cell.textContent));
});

scores.sort((a,b)=>b-a);


cells.forEach(cell=>{

let score = Number(cell.textContent);

if(score === scores[0]){
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    cell.classList.add("second-score");
}

});

}

function colorExpectationDevelopmentRank(){

const cells =
document.querySelectorAll("#expectationTable td:nth-child(4)");

let scores = [];

cells.forEach(cell=>{
    scores.push(Number(cell.textContent));
});

scores.sort((a,b)=>b-a);


cells.forEach(cell=>{

let score = Number(cell.textContent);

if(score === scores[0]){
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    cell.classList.add("second-score");
}

});

}

async function fetchRaceData(raceNo) {

    const params = new URLSearchParams(window.location.search);
    const venue = params.get("venue") || "hamamatsu";

    const response =
        await fetch(`${venue}-${raceNo}r.json`);

    if (!response.ok) {
        throw new Error("JSON取得失敗: " + response.status);
    }

    const data = await response.json();

    currentRaceData = data;

    console.log("JSON取得成功:", data);
    console.log("開催場:", venue);
    console.log("選手数:", data.players.length);

    const players = {};

    for (const player of data.players) {
const history = data.latest10List?.[player.playerCode] || [];

const recentRaces = history.map(r => ({
    date: r.raceDate,
    place: r.placeName || "",
    raceNo: r.raceNo,
    order: r.order,
    raceTime: r.raceTime,
    trialTime: r.trialTime,
    st: r.stTime
}));

    console.log(
        player.playerName,
        "試走:", player.trialRunTime,
        "偏差:", player.raceDev
    );

   

console.log(
    player.playerName,
    "近10走:",
    recentRaces
);

    const name = player.playerName;

console.log(
    "3連対率確認:",
    player.playerName,
    "player.rate3=",
    player.rate3,
    "playerCode=",
    player.playerCode
);

let tripleRate = Number(player.rate3 || 0);

let goodTrack3Rate = 0;
let wetTrack3Rate = 0;

let sPower = 1;
let soloPower = 1;
let catchUpPower = 1;
let wetTrackSkill = 1;
let course = "不明";
if (player.playerCode) {

    try {

        const profileResponse =
            await fetch(
                `./profiles/${player.playerCode}.json`
            );


        if (profileResponse.ok) {

            const profileData =
                await profileResponse.json();


            // 公式プロフィール特性
            const characteristics =
                profileData.body?.characteristics || {};

            sPower =
                Number(characteristics.startPower) || 1;

            soloPower =
                Number(characteristics.runAlonePower) || 1;

            catchUpPower =
                Number(characteristics.catchUpPower) || 1;
            wetTrackSkill =
                Number(characteristics.wetTrackSkill) || 1;

            course =
                characteristics.course || "不明";

            // 総合3連対率
            const profileRate3 =
                Number(
                    profileData.body?.totalResult?.rate3
                );

            if (!isNaN(profileRate3)) {
                tripleRate = profileRate3;
            }

            // 良走路3連対率
            const profileGoodTrack3Rate =
                Number(
                    profileData.body
                        ?.latest180Result
                        ?.goodTrack
                        ?.rate3
                        ?.winRate
                );

            if (!isNaN(profileGoodTrack3Rate)) {
                goodTrack3Rate =
                    profileGoodTrack3Rate;
            }

            // 湿走路3連対率
            const profileWetTrack3Rate =
                Number(
                    profileData.body
                        ?.latest180Result
                        ?.wetTrack
                        ?.rate3
                        ?.winRate
                );

            if (!isNaN(profileWetTrack3Rate)) {
                wetTrack3Rate =
                    profileWetTrack3Rate;
            }

        }

    } catch (error) {

        console.warn(
            `プロフィールデータ取得失敗: ${player.playerCode}`,
            error
        );

    }
}

players[name] = {

    playerCode: player.playerCode,

    // 公式プロフィール特性
    sPower: sPower,
    soloPower: soloPower,
    catchUpPower: catchUpPower,
    wetTrackSkill: wetTrackSkill,
    course: course,
    car: player.carNo,
    place: player.placeName || "",
    rank: player.rank || "",
    handicap: (player.handicap ?? 0) + "m",

    tripleRate: tripleRate + "%",

    goodTrack3Rate:
        goodTrack3Rate,

    wetTrack3Rate:
        wetTrack3Rate,

    diff: player.raceDev || "",
    time: player.trialRunTime || "",

    recentRaces: recentRaces
};

  }

    return {

        players: players,

        raceInfo: {

    venue: data.venue,

    raceNo: data.raceNo + "R",

    trackTemp:
        data.raceInfo?.raceRoadtemp ??
        data.raceInfo?.roadtemp ??
        "",

            deadline:
        data.raceInfo?.telvoteTime ??
        "",

    trackSituationCode:
    data.raceInfo?.raceSituationCode ??
    data.raceInfo?.situationCode ??
    "",

track:
    Number(
        data.raceInfo?.raceSituationCode ??
        data.raceInfo?.situationCode ??
        0
    ) === 0
        ? "良"
        : Number(
            data.raceInfo?.raceSituationCode ??
            data.raceInfo?.situationCode ??
            0
        ) === 1
            ? "湿"
            : Number(
                data.raceInfo?.raceSituationCode ??
                data.raceInfo?.situationCode ??
                0
            ) === 5
                ? "斑"
                               : "",

    finalRaceNo:
        Number(data.raceInfo?.finalRaceNo ?? 9)

}

    };

}

async function showCurrentRace() {
    const params = new URLSearchParams(window.location.search);
    const venue = params.get("venue") || "hamamatsu";

    const now = new Date();

    const today =
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    let currentRace = null;
    let nearestDeadline = null;
    let finalRaceNo = null;

    for (let raceNo = 1; raceNo <= 12; raceNo++) {
        try {
            const response = await fetch(
                `${venue}-${raceNo}r.json`,
                {
                    cache: "no-store"
                }
            );

            if (!response.ok) {
                continue;
            }

            const data = await response.json();

            // 今日のデータだけを対象にする
            if (data.raceDate !== today) {
                console.log(
                    `⏭️ ${raceNo}R は別日のデータのため無視: ${data.raceDate}`
                );
                continue;
            }

            const raceFinalNo =
                Number(data.raceInfo?.finalRaceNo);

            if (raceFinalNo) {
                finalRaceNo = raceFinalNo;
            }

            if (
                finalRaceNo &&
                raceNo > finalRaceNo
            ) {
                continue;
            }

            const telvoteTime =
                data.raceInfo?.telvoteTime;

            if (!telvoteTime) {
                continue;
            }

            const [hour, minute] =
                telvoteTime.split(":").map(Number);

            const deadline = new Date();

            deadline.setHours(
                hour,
                minute,
                0,
                0
            );

            if (hour >= 24) {
                deadline.setDate(
                    deadline.getDate() + 1
                );

                deadline.setHours(
                    hour - 24,
                    minute,
                    0,
                    0
                );
            }

            if (deadline > now) {
                if (
                    nearestDeadline === null ||
                    deadline < nearestDeadline
                ) {
                    nearestDeadline = deadline;
                    currentRace = raceNo;
                }
            }

        } catch (error) {
            console.warn(
                `${raceNo}R 締切時刻取得失敗`,
                error
            );
        }
    }

    if (!finalRaceNo) {
        console.warn(
            "⚠️ 今日の開催データが見つかりません"
        );
        return;
    }

    console.log(
        `★ 今日の最終R: ${finalRaceNo}R`
    );

    if (currentRace !== null) {
        console.log(
            `★ 現在発売中: ${currentRace}R`
        );

        console.log(
            `★ 締切: ${nearestDeadline}`
        );

        changeRace(currentRace);
        return;
    }

    console.log(
        "★ 本日のレースは終了しています"
    );

    changeRace(finalRaceNo);
}



function changeCustomALTab(tab, button){

    document
    .querySelectorAll(".custom-al-page")
    .forEach(page=>{
        page.style.display="none";
    });

    document
    .querySelectorAll(".custom-al-tab-btn")
    .forEach(btn=>{
        btn.classList.remove("active");
    });

    document
    .getElementById(tab)
    .style.display="block";

    button.classList.add("active");
}

const todayRaces = [
    {
        venue: "川口オート",
        date: "7/21〜7/23",
        day: "最終日",
        status: "🟢 開催中"
    },
    {
        venue: "浜松オート",
        date: "7/22〜7/26",
        day: "第2日目",
        status: "🟢 開催中"
    }
];

function createRaceCards() {

    const container = document.getElementById("race-list");

    if (!container) return;

    container.innerHTML = "";

    todayRaces.forEach(race => {

        const card = document.createElement("div");

        card.className = "race-card";

        card.innerHTML = `
            <h3>${race.venue}</h3>
            <p>${race.date}</p>
            <p>${race.day}</p>
            <p>${race.status}</p>

            <a href="race.html">
                <button>レースを見る</button>
            </a>
        `;

        container.appendChild(card);
    });
}

createRaceCards();

function calcBaseAbilityScore(player){

    const timeScore =
        calcRaceTimeScore(player);

    let trackRate = 0;

    if (race.track === "良") {

        trackRate =
            Number(player.goodTrack3Rate || 0);

    } else if (race.track === "湿") {

        trackRate =
            Number(player.wetTrack3Rate || 0);

    } else if (race.track === "斑") {

        const good =
            Number(player.goodTrack3Rate || 0);

        const wet =
            Number(player.wetTrack3Rate || 0);

        trackRate =
            (good + wet) / 2;
    }

    const rateScore =
        70 + (trackRate - 70) * 0.5;

    return (
        timeScore * 0.7 +
        rateScore * 0.3
    );
}

function showScoreDetail(
    name,
    type,
    finalScore
){

    const player = players[name];

    if (!player) {
        console.error(
            "選手データが見つかりません:",
            name
        );
        return;
    }

    // =========================
    // 能力スコア
    // =========================

    let abilityScore;

    if (type === "development") {
        abilityScore =
            calcAbilityScore(player);
    } else {
        abilityScore =
            calcAbilityScore(player);
    }

    let totalBuff = 0;

    // =========================
    // スタンダード能力
    // =========================

    if (type === "ability") {

        totalBuff =
            calcDeployBuff(player) +
            calcHandicapAngleBuff(player) +
            calcTemperatureBuff(player) +
            calcAbilityStartPowerBuff(player) +
            (calcAbilitySoloPowerBuff(player) ?? 0) +
            (calcAbilityCatchUpPowerBuff(player) ?? 0);

    }

    // =========================
    // 玄人能力
    // =========================

    else if (type === "customAbility") {

        totalBuff =
            (customHandicapMode === 2
                ? 0
                : calcDeployBuff(player))

            +

            (customHandicapAngleMode === 2
                ? 0
                : calcHandicapAngleBuff(player))

            +

            (customSTMode === 2
                ? 0
                : calcAbilitySTBuff(player))

            +

            (customTempMode === 2
                ? 0
                : calcTemperatureBuff(player))

            +

            (customStartMode === 2
                ? 0
                : calcCustomStartBuff(player))

            +

            (customWetMode === 2
                ? 0
                : calcWetBuff(player))

            +

            (customMixedMode === 2
                ? 0
                : calcMixedBuff(player))

            +

            (customStartPowerMode === 2
                ? 0
                : calcAbilityStartPowerBuff(player));

    }

    // =========================
    // スタンダード展開
    // =========================

    else if (type === "development") {

        totalBuff =
            calcDevelopmentDeployBuff(player) +
            (calcHandicapAngleBuff(player) * 3) +
            calcDevelopmentTemperatureBuff(player) +
            calcDevelopmentStartPowerBuff(player) +
            (calcDevelopmentSoloPowerBuff(player) ?? 0) +
            (calcDevelopmentCatchUpPowerBuff(player) ?? 0);

    }

    // =========================
    // 玄人展開
    // =========================

    else if (type === "customDevelopment") {

        totalBuff =
            (customHandicapMode === 2
                ? 0
                : calcDevelopmentDeployBuff(player))

            +

            (customHandicapAngleMode === 2
                ? 0
                : calcHandicapAngleBuff(player) * 3)

            +

            (customSTMode === 2
                ? 0
                : calcDevelopmentSTBuff(player))

            +

            (customTempMode === 2
                ? 0
                : calcDevelopmentTemperatureBuff(player))

            +

            (customStartMode === 2
                ? 0
                : calcDevelopmentStartBuff(player))

            +

            (customWetMode === 2
                ? 0
                : calcWetBuff(player) * 3)

            +

            (customMixedMode === 2
                ? 0
                : calcMixedBuff(player) * 3)

            +

            (customStartPowerMode === 2
                ? 0
                : calcDevelopmentStartPowerBuff(player));

    }

    // =========================
    // 最終スコア
    // ※全モード共通：
    // 能力スコアに展開補正を最後に1回だけ反映
    // =========================

    const detailFinalScore =
        abilityScore *
        (1 + totalBuff / 100);

    const buffText =
        (totalBuff > 0 ? "+" : "") +
        totalBuff.toFixed(1) +
        "%";

    document.getElementById(
        "scoreDetailAbility"
    ).textContent =
        Math.round(abilityScore);

    document.getElementById(
        "scoreDetailBuff"
    ).textContent =
        buffText;

    document.getElementById(
        "scoreDetailFinal"
    ).textContent =
        Math.round(detailFinalScore);

    document.getElementById(
        "scoreDetailRate"
    ).textContent =
        buffText;

    document.getElementById(
        "scoreDetailModal"
    ).style.display =
        "flex";
}


function closeScoreDetail(){

    document.getElementById(
        "scoreDetailModal"
    ).style.display =
        "none";
}



function closeScoreDetail(){

    document.getElementById(
        "scoreDetailModal"
    ).style.display = "none";

}


async function displayALVerificationStats(){

    const area = document.getElementById("alVerificationArea");

    if(!area) return;

    // 保存済みAL検証データから集計
    const stats = await calculateSavedALScoreDiffStats();

    let html = `
    <div class="table-scroll">
    <table class="al-verification-table">
    <thead>
        <tr>
            <th>AL順位</th>
            <th>隣との差</th>
            <th>1着率</th>
            <th>2着率</th>
            <th>3着率</th>
            <th>3連対率</th>
        </tr>
    </thead>
    <tbody>
    `;

    for(let rank = 1; rank <= 8; rank++){

        const groups = [
            ["3点以下", stats[rank]?.["3点以下"]],
            ["4点以上", stats[rank]?.["4点以上"]]
        ];

        for(const [label, group] of groups){

            if(!group) continue;

            const count = group.count || 0;

            const firstRate =
                count > 0
                    ? (group.first / count * 100).toFixed(1)
                    : "-";

            const secondRate =
                count > 0
                    ? (group.second / count * 100).toFixed(1)
                    : "-";

            const thirdRate =
                count > 0
                    ? (group.third / count * 100).toFixed(1)
                    : "-";

            const tripleRate =
                count > 0
                    ? (group.top3 / count * 100).toFixed(1)
                    : "-";

            html += `
            <tr>
                <td>${rank}位</td>
                <td>${label}</td>
                <td>${firstRate}${count > 0 ? "%" : ""}</td>
                <td>${secondRate}${count > 0 ? "%" : ""}</td>
                <td>${thirdRate}${count > 0 ? "%" : ""}</td>
                <td>${tripleRate}${count > 0 ? "%" : ""}</td>
            </tr>
            `;
        }
    }

    html += `
    </tbody>
    </table>
    </div>
    `;

    area.innerHTML = html;
}

async function createALVerificationRecord(resultList){

    if(!currentRaceData){
        console.error("現在のレースデータがありません");
        return [];
    }

    const data =
    await createALVerificationData();

    if(!data || !data.length){
        console.error("AL検証データを作成できません");
        return [];
    }

    return data.map(player => {

        const result =
            resultList.find(
                r => Number(r.car) === Number(player.car)
            );

        return {
            date: currentRaceData.raceDate,
            venue: currentRaceData.venue,
            raceNo: currentRaceData.raceNo,
            car: player.car,
            alScore: player.alScore,
            alRank: player.alRank,
            scoreDiff: player.scoreDiff,
            finish: result ? Number(result.finish) : null
        };

    });

}
async function addALVerificationRecord(resultList){

    const newData =
    await createALVerificationRecord(resultList);

    if(!newData.length){
        console.error("検証データを作成できません");
        return [];
    }

    const raceKey =
        `${newData[0].date}_${newData[0].venue}_${newData[0].raceNo}`;

    const savedData =
        JSON.parse(
            localStorage.getItem("alVerificationData") || "[]"
        );

    const alreadySaved =
        savedData.some(record =>
            `${record.date}_${record.venue}_${record.raceNo}` === raceKey
        );

    if(alreadySaved){

        console.log(
            "このレースはすでに保存されています:",
            raceKey
        );

        return savedData;
    }

    const updatedData = [
        ...savedData,
        ...newData
    ];

    localStorage.setItem(
        "alVerificationData",
        JSON.stringify(updatedData)
    );

    console.log(
        "✅ AL検証データ保存:",
        raceKey,
        newData
    );

    return updatedData;

}

function calculateSavedALVerificationStats(){

    const data =
        JSON.parse(
            localStorage.getItem("alVerificationData") || "[]"
        );

    const stats = {};

    for(let rank = 1; rank <= 8; rank++){

        const players =
            data.filter(player => player.alRank === rank);

        const count = players.length;

        const first =
            players.filter(player => player.finish === 1).length;

        const second =
            players.filter(player => player.finish === 2).length;

        const third =
            players.filter(player => player.finish === 3).length;

        const top3 =
            players.filter(player => player.finish <= 3).length;

        stats[rank] = {

            count: count,

            first: first,

            second: second,

            third: third,

            top3: top3,

            firstRate:
                count ? (first / count * 100).toFixed(1) : "0.0",

            secondRate:
                count ? (second / count * 100).toFixed(1) : "0.0",

            thirdRate:
                count ? (third / count * 100).toFixed(1) : "0.0",

            top3Rate:
                count ? (top3 / count * 100).toFixed(1) : "0.0"

        };

    }

    return stats;

}

async function calculateSavedALScoreDiffStats(){

    let data = [];

    try {
        const response =
            await fetch("./al-verification-data.json");

        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }

        const races = await response.json();

        data = races.flatMap(race =>
            Array.isArray(race.players)
                ? race.players
                : []
        );

        console.log(
            "AL検証JSON読み込み:",
            races.length,
            "レース /",
            data.length,
            "選手"
        );

    } catch(error){

        console.error(
            "AL検証JSON読み込み失敗:",
            error
        );

        return {};
    }

    const stats = {};

    /*
     * =========================
     * 実際に存在するAL順位を取得
     * =========================
     */

    const maxRank =
        data.length > 0
            ? Math.max(...data.map(player => player.alRank))
            : 8;

    /*
     * =========================
     * AL順位ごとの集計
     * =========================
     */

    for(let rank = 1; rank <= maxRank; rank++){

        stats[rank] = {

            "3点以下": {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                top3: 0,
                firstRate: "0.0",
                secondRate: "0.0",
                thirdRate: "0.0",
                top3Rate: "0.0"
            },

            "4点以上": {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                top3: 0,
                firstRate: "0.0",
                secondRate: "0.0",
                thirdRate: "0.0",
                top3Rate: "0.0"
            },

            "比較なし": {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                top3: 0,
                firstRate: "0.0",
                secondRate: "0.0",
                thirdRate: "0.0",
                top3Rate: "0.0"
            }

        };

        const players =
            data.filter(
                player => player.alRank === rank
            );

        players.forEach(player => {

            let group;

            /*
             * 最下位
             * scoreDiff = null
             */
            if(player.scoreDiff === null){

                group =
                    stats[rank]["比較なし"];

            }

            /*
             * 3点以下
             */
            else if(player.scoreDiff <= 3.0){

                group =
                    stats[rank]["3点以下"];

            }

            /*
             * 3.5点以上
             */
            else if(player.scoreDiff >= 3.5){

                group =
                    stats[rank]["4点以上"];

            }

            else{

                return;

            }

            group.count++;

            if(player.finish === 1){
                group.first++;
            }

            if(player.finish === 2){
                group.second++;
            }

            if(player.finish === 3){
                group.third++;
            }

            if(
                player.finish !== null &&
                player.finish <= 3
            ){
                group.top3++;
            }

        });

        /*
         * =========================
         * 率を計算
         * =========================
         */

        for(
            const groupName of
            ["3点以下", "4点以上", "比較なし"]
        ){

            const group =
                stats[rank][groupName];

            if(group.count > 0){

                group.firstRate =
                    (
                        group.first /
                        group.count *
                        100
                    ).toFixed(1);

                group.secondRate =
                    (
                        group.second /
                        group.count *
                        100
                    ).toFixed(1);

                group.thirdRate =
                    (
                        group.third /
                        group.count *
                        100
                    ).toFixed(1);

                group.top3Rate =
                    (
                        group.top3 /
                        group.count *
                        100
                    ).toFixed(1);

            }

        }

    }

    return stats;

}
function calculateALRankStats(){

    const data =
        window.alVerificationJsonData || [];

    const stats = {};

    for(let rank = 1; rank <= 8; rank++){

        stats[rank] = {
            count: 0,
            first: 0,
            second: 0,
            third: 0,
            top3: 0,
            firstRate: "0.0",
            secondRate: "0.0",
            thirdRate: "0.0",
            top3Rate: "0.0"
        };

    }

    data.forEach(race => {

        if(!Array.isArray(race.players)){
            return;
        }

        race.players.forEach(player => {

            const rank = Number(player.alRank);
            const finish = Number(player.finish);

            if(
                rank < 1 ||
                rank > 8 ||
                !Number.isFinite(finish)
            ){
                return;
            }

            stats[rank].count++;

            if(finish === 1){
                stats[rank].first++;
            }

            if(finish === 2){
                stats[rank].second++;
            }

            if(finish === 3){
                stats[rank].third++;
            }

            if(finish <= 3){
                stats[rank].top3++;
            }

        });

    });

    for(let rank = 1; rank <= 8; rank++){

        const group = stats[rank];

        if(group.count > 0){

            group.firstRate =
                (group.first / group.count * 100).toFixed(1);

            group.secondRate =
                (group.second / group.count * 100).toFixed(1);

            group.thirdRate =
                (group.third / group.count * 100).toFixed(1);

            group.top3Rate =
                (group.top3 / group.count * 100).toFixed(1);

        }

    }

    return stats;

}


async function showALVerificationTab(tabName){

    const area =
        document.getElementById("alVerificationArea");

    if(!area){
        return;
    }

    // JSONを読み込む
    try{

        const response =
            await fetch("./al-verification-data.json");

        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }

        window.alVerificationJsonData =
            await response.json();

        console.log(
            "AL検証JSON読み込み:",
            window.alVerificationJsonData.length,
            "レース"
        );

    }catch(error){

        console.error(
            "AL検証JSON読み込み失敗:",
            error
        );

        window.alVerificationJsonData = [];

    }

    const rankButton =
        document.getElementById("alRankStatsBtn");

    const scoreDiffButton =
        document.getElementById("alScoreDiffStatsBtn");

    if(rankButton){
        rankButton.classList.remove("active");
    }

    if(scoreDiffButton){
        scoreDiffButton.classList.remove("active");
    }

    if(tabName === "rank" && rankButton){
        rankButton.classList.add("active");
    }

    if(tabName === "scoreDiff" && scoreDiffButton){
        scoreDiffButton.classList.add("active");
    }

    // ========================================
    // 📈 AL順位別成績
    // ========================================

    if(tabName === "rank"){

        const stats =
            calculateALRankStats();

        let html = `

            <h3>📈 AL順位別成績</h3>

            <div class="table-scroll">

            <table class="al-verification-table">

            <thead>

            <tr>
                <th>AL順位</th>
                <th>件数</th>
                <th>1着率</th>
                <th>2着率</th>
                <th>3着率</th>
                <th>3連対率</th>
            </tr>

            </thead>

            <tbody>
        `;

        for(let rank = 1; rank <= 8; rank++){

            const group = stats[rank];

            html += `

                <tr>
                    <td>${rank}位</td>
                    <td>${group.count}</td>
                    <td>${group.count > 0 ? group.firstRate + "%" : "-"}</td>
                    <td>${group.count > 0 ? group.secondRate + "%" : "-"}</td>
                    <td>${group.count > 0 ? group.thirdRate + "%" : "-"}</td>
                    <td>${group.count > 0 ? group.top3Rate + "%" : "-"}</td>
                </tr>

            `;

        }

        html += `

            </tbody>
            </table>
            </div>

        `;

        area.innerHTML = html;

        return;

    }

    // ========================================
    // 📊 AL順位 × スコア差別成績
    // ========================================

    if(tabName === "scoreDiff"){

        const stats =
            await calculateSavedALScoreDiffStats();

        let html = `

            <h3>📊 AL順位 × スコア差別成績</h3>

            <div class="table-scroll">

            <table class="al-verification-table">

            <thead>

            <tr>
                <th rowspan="2">AL順位</th>
                <th rowspan="2">スコア差</th>
                <th rowspan="2">件数</th>
                <th colspan="4">着率</th>
            </tr>

            <tr>
                <th>1着率</th>
                <th>2着率</th>
                <th>3着率</th>
                <th>3連対率</th>
            </tr>

            </thead>

            <tbody>
        `;

        for(let rank = 1; rank <= 8; rank++){

            const rankStats =
                stats[rank];

            if(!rankStats){
                continue;
            }

            const groupNames =
                ["4点以上", "3点以下"];

            groupNames.forEach((groupName, index) => {

                const group =
                    rankStats[groupName];

                if(!group){
                    return;
                }

                html += `

                    <tr>

                        ${index === 0
                            ? `<td rowspan="2">${rank}位</td>`
                            : ""}

                        <td>${groupName}</td>
                        <td>${group.count}</td>
                        <td>${group.count > 0 ? group.firstRate + "%" : "-"}</td>
                        <td>${group.count > 0 ? group.secondRate + "%" : "-"}</td>
                        <td>${group.count > 0 ? group.thirdRate + "%" : "-"}</td>
                        <td>${group.count > 0 ? group.top3Rate + "%" : "-"}</td>

                    </tr>

                `;

            });

        }

        html += `

            </tbody>
            </table>
            </div>

        `;

        area.innerHTML = html;

    }

}


async function renderALVerificationStats(){

    const area =
        document.getElementById("alVerificationArea");

    if(!area){
        return;
    }

    // デフォルトはAL順位別成績
    await showALVerificationTab("rank");

}

function getRaceResultsFromPage() {

    const rows = [
        ...document.querySelectorAll("#race_result tr")
    ].filter(row => {

        const cells = row.querySelectorAll("td");

        if (cells.length !== 9) {
            return false;
        }

        const finish =
            cells[0].textContent.trim();

        return /^[1-8]$/.test(finish);
    });

    return rows.map(row => {

        const cells =
            row.querySelectorAll("td");

        return {
            finish:
                Number(
                    cells[0].textContent.trim()
                ),

            car:
                Number(
                    cells[2].textContent.trim()
                )
        };
    });
}

function updateALVerificationResults(resultList) {
    const savedAL =
        JSON.parse(localStorage.getItem("alVerificationData")) || [];

    if (!currentRaceData) {
        console.error("現在のレースデータがありません");
        return [];
    }

    const updated = savedAL.map(record => {
        if (
            record.date !== currentRaceData.raceDate ||
            record.venue !== currentRaceData.venue ||
            record.raceNo !== currentRaceData.raceNo
        ) {
            return record;
        }

        const result = resultList.find(
            r => r.car === record.car
        );

        if (!result) {
            return record;
        }

        return {
            ...record,
            finish: result.finish
        };
    });

    localStorage.setItem(
        "alVerificationData",
        JSON.stringify(updated)
    );

    console.log(
        "AL検証結果を更新:",
        currentRaceData.venue,
        currentRaceData.raceNo + "R"
    );

    return updated;
}

function updateVerificationFromOfficialResultPage() {
    const results = getRaceResultsFromPage();

    if (!results || results.length !== 8) {
        console.error(
            "着順を8車取得できませんでした:",
            results
        );
        return [];
    }

    console.log("公式結果を取得:", results);

    const updated = updateALVerificationResults(results);

    console.log("AL検証データを更新しました");

    return updated;
}

// ========================================
// 公式結果ページからの着順データ受信
// ========================================
window.addEventListener("message", function(event) {

    if (event.origin !== "https://autorace.jp") {
        return;
    }

    if (!event.data || event.data.type !== "AUTOLAB_RACE_RESULT") {
        return;
    }

    const results = event.data.results;

    if (!Array.isArray(results) || results.length !== 8) {
        console.error("受信した着順データが不正です:", results);
        return;
    }

    console.log("公式結果を受信:", results);

    const updated = updateALVerificationResults(results);

    console.log("AL検証データを更新しました");

    // 検証画面の再描画
    if (typeof renderALVerification === "function") {
        renderALVerification();
    }

});

// ========================================
// Auto-Labから公式結果ページを開く
// ========================================
function openOfficialResultPage() {

    if (!currentRaceData) {
        console.error("現在のレースデータがありません");
        return;
    }

    const venue = currentRaceData.placeKey || "hamamatsu";
    const date = currentRaceData.raceDate;
    const raceNo = currentRaceData.raceNo;

    const url =
        `https://autorace.jp/race_info/RaceResult/${venue}/${date}_${raceNo}`;

    const resultWindow = window.open(
        url,
        "autoraceResult",
        "width=1200,height=900"
    );

    if (!resultWindow) {
        console.error("公式結果ページを開けませんでした");
        return;
    }

    console.log("公式結果ページを開きました:", url);
}

// ========================================
// 公式結果ページを別タブで開く
// ========================================
function openOfficialResultPageTab() {

    if (!currentRaceData) {
        console.error("現在のレースデータがありません");
        return;
    }

    const venue = currentRaceData.placeKey || "hamamatsu";
    const date = currentRaceData.raceDate;
    const raceNo = currentRaceData.raceNo;

    const url =
        `https://autorace.jp/race_info/RaceResult/${venue}/${date}_${raceNo}`;

    const resultWindow = window.open(url, "_blank");

    if (!resultWindow) {
        console.error("公式結果ページを開けませんでした");
        return;
    }

    console.log("公式結果ページを別タブで開きました:", url);
}

// ========================================
// 公式結果 自動取得開始
// ========================================
function startAutomaticResultCheck() {

    if (!currentRaceData) {
        console.error("現在のレースデータがありません");
        return;
    }

    const venue = currentRaceData.placeKey;
    const date = currentRaceData.raceDate;
    const raceNo = currentRaceData.raceNo;

    const url =
        `https://autorace.jp/race_info/RaceResult/${venue}/${date}_${raceNo}`;

    console.log(
        "公式結果の自動取得を開始:",
        venue,
        date,
        raceNo + "R"
    );

    const resultWindow = window.open(
        url,
        "_blank"
    );

    if (!resultWindow) {
        console.error("公式結果ページを開けませんでした");
        return;
    }

    console.log("公式結果ページを開きました:", url);
}


async function fetchOfficialRaceResult() {

    try {

        console.log("===== JSONから公式結果取得 =====");

        const venue = currentRaceData.placeKey;

        const raceNo =
            Number(currentRaceData.raceNo);

        const resultFile =
            `${venue}-${raceNo}r-result.json`;

        const response =
            await fetch(resultFile);

        if(!response.ok){

            throw new Error(
                `結果JSON取得失敗: ${response.status}`
            );

        }

        const data =
            await response.json();

        console.log(
            "結果JSONから受信:",
            data
        );

        if(
            !Array.isArray(data.results)
        ){

            throw new Error(
                "結果データが不正です"
            );

        }

        if(data.results.length !== 8){

            console.error(
                "8車取得できていません:",
                data.results
            );

            return [];

        }

        console.log(
            "✅ 8車の公式結果を取得しました"
        );

        return data.results;

    } catch(error){

        console.error(
            "❌ 公式結果取得エラー:",
            error
        );

        return [];

    }

}
async function runOfficialResultVerification() {

    console.log("===== AL検証 結果取得開始 =====");

    const results = await fetchOfficialRaceResult();

    if (!results || results.length !== 8) {
        console.error(
            "❌ 公式結果を8車取得できませんでした"
        );
        return;
    }

   

   const updated =
    await addALVerificationRecord(results);
    console.log(
        "✅ AL検証データを保存しました"
    );

    if (typeof renderALVerification === "function") {
        renderALVerification();
    }

    return updated;
}

async function autoVerifyCurrentRace() {

    if (!currentRaceData) {
        console.log("現在のレースデータがありません");
        return;
    }

    console.log(
        "===== 自動AL検証開始 =====",
        currentRaceData.venue,
        currentRaceData.raceNo + "R"
    );

    const result = await runOfficialResultVerification();

    if (result && result.length) {
        console.log(
            "✅ 自動AL検証完了:",
            currentRaceData.venue,
            currentRaceData.raceNo + "R"
        );
    }
}


async function autoVerifyAllRaces(startRaceNo, endRaceNo) {

    console.log(
        `===== 複数レースAL検証開始 ${startRaceNo}R〜${endRaceNo}R =====`
    );

    for (
        let raceNo = startRaceNo;
        raceNo <= endRaceNo;
        raceNo++
    ) {

        console.log(`===== ${raceNo}R 処理開始 =====`);

        try {

            // レースデータを読み込む
            await fetchRaceData(raceNo);

            // currentRaceData が更新されたことを確認
            if (!currentRaceData) {
                console.error(`${raceNo}R currentRaceDataなし`);
                continue;
            }

            console.log(
                `📊 ${currentRaceData.venue} ${raceNo}R AL計算開始`
            );

            // 公式結果取得 → AL検証保存
            const result =
                await runOfficialResultVerification();

            if (result && result.length) {
                console.log(
                    `✅ ${raceNo}R AL検証完了`
                );
            } else {
                console.error(
                    `❌ ${raceNo}R AL検証失敗`
                );
            }

        } catch (error) {

            console.error(
                `❌ ${raceNo}R 処理エラー:`,
                error
            );

        }

        // 次のレースへ少し待つ
        await new Promise(
            resolve => setTimeout(resolve, 1000)
        );
    }

    console.log(
        "===== 複数レースAL検証終了 ====="
    );
}


showCurrentRace();

function getStartPowerClass(rank){
    const rankText = String(rank || "").toUpperCase();
    if(rankText.startsWith("S-")) return "S級";
    if(rankText.startsWith("A-")) return "A級";
    if(rankText.startsWith("B-")) return "B級";
    return "";
}

function calcStartPowerBuff(player){
    const rankClass = getStartPowerClass(player.rank);
    const star = Number(player.sPower);

    if(!rankClass || star < 1 || star > 5){
        return 0;
    }

    const rankBuff = {
        "B級": {1:-1, 2:0, 3:1, 4:2, 5:3},
        "A級": {1:-2, 2:-1, 3:0, 4:1, 5:2},
        "S級": {1:-3, 2:-2, 3:-1, 4:0, 5:1}
    };

    const basicBuff = rankBuff[rankClass]?.[star] ?? 0;

    const group = Object.values(players).filter(p =>
        p.handicap === player.handicap &&
        Number(p.sPower) >= 1 &&
        Number(p.sPower) <= 5
    );

    if(group.length <= 1){
        return basicBuff;
    }

    const sameHandicapBuff = {
        1:-2, 2:-1, 3:0, 4:1, 5:2
    }[star] ?? 0;

    return basicBuff + sameHandicapBuff;
}

function calcAbilityStartPowerBuff(player){
    return calcStartPowerBuff(player);
}

function calcDevelopmentStartPowerBuff(player){
    return calcStartPowerBuff(player) * 3;
}

