const params = new URLSearchParams(location.search);
const venue = params.get("venue");

console.log("髢句ぎ蝣ｴ:", venue);


/*
document.getElementById("deadline").textContent =
"邱蛻・" + race.deadline;

document.getElementById("raceTitleType").textContent =
race.title;

document.getElementById("weather").textContent =
"螟ｩ豌・" + race.weather;

document.getElementById("track").textContent =
"襍ｰ霍ｯ " + race.track;

document.getElementById("cars").textContent =
"霆頑焚 " + race.cars + "霆・;

document.getElementById("raceDay").textContent =
race.startDate + "縲・ + race.endDate + " " + race.day;
/*
let players = {

"髱貞ｱｱ 蜻ｨ蟷ｳ": {
car:1,
place:"莨雁兇蟠・,
handicap:"0m",
rank:"S-1",
time:"3.290",
st:"0.08",
diff:"085",
tripleRate:"90.0%",
recentRaces:[
{
date:"07/20",
venue:"蟾晏哨",
track:"濶ｯ",
trackTemp:"45邃・,
result:"1逹",
time:"3.426",
st:"0.07"
},
{
date:"07/19",
venue:"蟾晏哨",
track:"濶ｯ",
result:"1逹",
time:"3.412",
st:"0.09"
},
{
date:"07/18",
venue:"蟾晏哨",
track:"濶ｯ",
result:"1逹",
time:"3.431",
st:"0.12"
}
],
evaluation:"笳・
},

"驤ｴ譛ｨ 蝨ｭ荳驛・: {
    car:2,
    place:"豬懈收",
    handicap:"0m",
    rank: "S-2",
    time: "3.280",
    st: "0.07",
    diff:"050",
    tripleRate:"86.0%",
    recentRaces:[
{
date:"07/20",
venue:"蟾晏哨",
track:"濶ｯ",
trackTemp:"45邃・,
result:"1逹",
time:"3.541",
st:"0.07"
},
{
date:"07/19",
venue:"蟾晏哨",
track:"濶ｯ",
result:"2逹",
time:"3.548",
st:"0.08"
}
],
    evaluation:"笳・
    
},

"豌ｸ莠・螟ｧ莉・: {
    car:3,
    place:"蟾晏哨",
    handicap:"10m",
    rank: "S-10",
    time: "3.340",
    st: "0.11",
    diff:"010",
    tripleRate:"69.0%",
    recentRaces:[
{
date:"07/20",
venue:"蟾晏哨",
track:"濶ｯ",
trackTemp:"45邃・,
result:"1逹",
time:"3.541",
st:"0.11"
},
{
date:"07/19",
venue:"蟾晏哨",
track:"濶ｯ",
result:"2逹",
time:"3.548",
st:"0.12"
}
],
    evaluation:"笳・
},

"菴占陸 鞫ｩ蠑･": {
    car:4,
    place:"蟾晏哨",
    handicap:"10m",
    rank: "S-11",
    time: "3.360",
    st: "0.10",
    diff:"070",
    tripleRate:"68.0%",
    recentRaces:[
{
date:"07/20",
venue:"蟾晏哨",
track:"濶ｯ",
trackTemp:"45邃・,
result:"1逹",
time:"3.541",
st:"0.10"
},
{
date:"07/19",
venue:"蟾晏哨",
track:"濶ｯ",
result:"2逹",
time:"3.548",
st:"0.11"
}
],
    evaluation:"笳・
},

"鬮俶ｩ・雋｢": {
    car:5,
    place:"莨雁兇蟠・,
    handicap:"20m",
    rank: "S-17",
    time: "3.330",
    st: "0.12",
    diff:"100",
    tripleRate:"65.0%",
    recentRaces:[
{
date:"07/20",
venue:"莨雁兇蟠・,
track:"濶ｯ",
trackTemp:"45邃・,
result:"1逹",
time:"3.541",
st:"0.12"
},
{
date:"07/19",
venue:"莨雁兇蟠・,
track:"濶ｯ",
result:"2逹",
time:"3.548",
st:"0.13"
}
],
    evaluation:"笳・
},

"譌ｩ蟾・貂・､ｪ驛・: {
    car:6,
    place:"莨雁兇蟠・,
    handicap:"20m",
    rank: "S-20",
    time: "3.350",
    st: "0.13",
    diff:"058",
    tripleRate:"60.0%",
    recentRaces:[
{
date:"07/20",
venue:"莨雁兇蟠・,
track:"濶ｯ",
trackTemp:"45邃・,
result:"1逹",
time:"3.541",
st:"0.13"
},
{
date:"07/19",
venue:"莨雁兇蟠・,
track:"濶ｯ",
result:"2逹",
time:"3.548",
st:"0.14"
}
],
    evaluation:"笳・
},

"譛牙翠 霎ｰ荵・: {
    car:7,
    place:"鬟ｯ蝪・,
    handicap:"30m",
    rank: "S-7",
    time: "3.370",
    st: "0.14",
    diff:"110",
    tripleRate:"77.0%",
    recentRaces:[
{
date:"07/20",
venue:"鬟ｯ蝪・,
track:"濶ｯ",
result:"1逹",
time:"3.541",
st:"0.14"
},
{
date:"07/19",
venue:"鬟ｯ蝪・,
track:"濶ｯ",
trackTemp:"45邃・,
result:"2逹",
time:"3.548",
st:"0.15"
}
],
    evaluation:"笳・
},

"譛ｨ譚・豁ｦ荵・: {
    car:8,
    place:"豬懈收",
    handicap:"30m",
    rank: "S-30",
    time: "3.300",
    st: "0.07",
    diff:"150",
    tripleRate:"58.0%",
    recentRaces:[
{
date:"07/20",
venue:"豬懈收",
track:"濶ｯ",
result:"1逹",
time:"3.541",
st:"0.07"
},
{
date:"07/19",
venue:"豬懈收",
track:"濶ｯ",
trackTemp:"45邃・,
result:"2逹",
time:"3.548",
st:"0.08"
}
],
    evaluation:"笳・
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

    console.log("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ:", currentRace);


    fetchRaceData(currentRace).then(async data => {

       // =========================
// 髢句ぎR謨ｰ縺ｫ蜷医ｏ縺帙※繝ｬ繝ｼ繧ｹ繧ｿ繝悶ｒ陦ｨ遉ｺ
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
        // 襍ｰ霍ｯ3騾｣蟇ｾ邇・ｒ隱ｭ縺ｿ霎ｼ繧
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
                "濶ｯ繝ｻ貉ｿ3騾｣蟇ｾ邇・ｪｭ縺ｿ霎ｼ縺ｿ螳御ｺ・,
                trackRates
            );

        } catch (err) {

            console.error(
                "track-rates.json 隱ｭ縺ｿ霎ｼ縺ｿ螟ｱ謨・",
                err
            );

        }


       // =========================
// 繝ｬ繝ｼ繧ｹ諠・ｱ
// =========================
race.venue = data.raceInfo.venue;

race.raceNo = data.raceInfo.raceNo;

race.trackTemp =
    data.raceInfo.trackTemp
        ? data.raceInfo.trackTemp + "邃・
        : "";

const situationCode =
    Number(data.raceInfo.situationCode ?? 0);

window.currentRaceInfo = data.raceInfo;

race.track =
    situationCode === 0
        ? "濶ｯ"
        : situationCode === 1
            ? "貉ｿ"
            : situationCode === 5
                ? "譁・
                : "";

race.weather = "譎ｴ";

// JSON縺九ｉ螳滄圀縺ｮ邱蛻・凾蛻ｻ繧貞叙蠕・
race.deadline =
    data.raceInfo.deadline || "";

race.startDate = "08/01";

race.endDate = "08/03";

race.day = "蛻晄律";

race.cars =
    Object.keys(players).length;


// =========================
// 繝ｬ繝ｼ繧ｹ諠・ｱ陦ｨ遉ｺ
// =========================
document.getElementById("raceTitle").textContent =
    race.venue + " " + race.raceNo;

// 邱蛻・凾蛻ｻ繧定｡ｨ遉ｺ
document.getElementById("deadline").textContent =
    "邱蛻・" + race.deadline;

// 莉雁屓縺ｯ襍ｰ霍ｯ繝ｻ霆頑焚繧定｡ｨ遉ｺ縺励↑縺・
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
// 蜷・ユ繝ｼ繝悶Ν菴懈・
// =========================
createRaceTable();

createRecentTable();

createAbilityTable();

createDevelopmentTable();

createCustomDevelopmentTable();

createCustomExpectationTable();

createExpectationTable();

createCustomAbilityTable();


        // =========================
        // 繧ｫ繧ｹ繧ｿ繝陦ｨ遉ｺ
        // =========================
        document.querySelectorAll(".custom-wet-header")
        .forEach(header => {
            header.textContent = "貉ｿ OFF";
        });

        document.querySelectorAll(".custom-mixed-header")
        .forEach(header => {
            header.textContent = "譁・OFF";
        });


        // =========================
        // 繝ｩ繝ｳ繧ｯ濶ｲ
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


let tempMode = false;

let handicapAngleMode = false;

let customHandicapMode = 0;
let customSTMode = 0;
let customTempMode = 0;
let customHandicapAngleMode = 0;
let customStartMode = 0;
let customWetMode = 2;
let customMixedMode = 2;

function calcRaceTimeScore(player){

    const raceTime =
        Number(player.time) + Number(player.diff) / 1000;

    // 襍ｰ霍ｯ迥ｶ豕・
    const situationCode =
        Number(
            window.currentRaceInfo?.raceSituationCode ??
            window.currentRaceInfo?.situationCode ??
            5
        );

    // =========================
    // 貉ｿ襍ｰ霍ｯ
    // =========================
    if(situationCode === 1){

        const raceTimes = Object.values(players)
            .map(p =>
                Number(p.time) + Number(p.diff) / 1000
            )
            .filter(v => !isNaN(v));

        const averageTime =
            raceTimes.reduce((a,b) => a + b, 0)
            / raceTimes.length;

        // 3.80繧・0轤ｹ蝓ｺ貅・
        // 縺昴％縺九ｉ8莠ｺ縺ｮ蟷ｳ蝮・ち繧､繝縺ｨ縺ｮ蟾ｮ縺ｧ隧穂ｾ｡
        const score =
    70 + (averageTime - raceTime) * 200;

        return Math.round(score);
    }


    // =========================
    // 濶ｯ襍ｰ霍ｯ繝ｻ譁題ｵｰ霍ｯ
    // =========================

    // 3.30 竊・100
    if(raceTime <= 3.30){
        return 100;
    }

    // 3.31 ・・3.40
    if(raceTime <= 3.40){
        return Math.round(
            100 - (raceTime - 3.30) * 100
        );
    }

    // 3.41 ・・3.60
    if(raceTime <= 3.60){
        return Math.round(
            90 - (raceTime - 3.40) * 300
        );
    }

    // 3.61 ・・3.90
    if(raceTime <= 3.90){
        return Math.round(
            30 - (raceTime - 3.60) * 100
        );
    }

    // 3.90繧医ｊ驕・＞
    return 0;
}


function calcAbilityScore(player){

    console.log("=== ABILITY DEBUG ===");
    console.log("name:", player.name || player.playerName);
    console.log("time:", player.time);
    console.log("diff:", player.diff);
    console.log("tripleRate:", player.tripleRate);



    // 隧ｦ襍ｰ・句￥蟾ｮ・昜ｺ域Φ遶ｶ襍ｰ繧ｿ繧､繝
    const raceTime =
    Number(player.time) + Number(player.diff) / 1000;




    // 莠域Φ遶ｶ襍ｰ繧ｿ繧､繝隧穂ｾ｡
    // 騾溘＞縺ｻ縺ｩ鬮伜ｾ礼せ

   let timeScore = calcRaceTimeScore(player);


    // 濶ｯ襍ｰ霍ｯ3騾｣蟇ｾ邇・ｩ穂ｾ｡
// 襍ｰ霍ｯ3騾｣蟇ｾ邇・
let trackRate = 0;

if (race.track === "濶ｯ") {
    trackRate = Number(player.goodTrack3Rate || 0);

} else if (race.track === "貉ｿ") {
    trackRate = Number(player.wetTrack3Rate || 0);

} else if (race.track === "譁・) {
    const good = Number(player.goodTrack3Rate || 0);
    const wet = Number(player.wetTrack3Rate || 0);

    trackRate = (good + wet) / 2;
}

// 襍ｰ霍ｯ3騾｣蟇ｾ邇・せ繧ｳ繧｢
let rateScore =
    70 + (trackRate - 70) * 0.5;


    // 閭ｽ蜉帙せ繧ｳ繧｢
let abilityScore =
(timeScore * 0.7) +
(rateScore * 0.3);

// 繧ｹ繧ｿ繝ｳ繝繝ｼ繝牙ｱ暮幕陬懈ｭ｣
const deployBuff =
    calcDeployBuff(player);

const angleBuff =
    calcHandicapAngleBuff(player);

const stBuff =
    calcAbilitySTBuff(player);

const tempBuff =
    calcTemperatureBuff(player);

// 螻暮幕陬懈ｭ｣繧貞粋邂・
const totalBuff =
    deployBuff +
    angleBuff +
    stBuff +
    tempBuff;

// 閭ｽ蜉帙せ繧ｳ繧｢縺ｸ譛蠕後↓1蝗槭□縺大渚譏
abilityScore =
    abilityScore *
    (1 + totalBuff / 100);

console.log(
    "螻暮幕陬懈ｭ｣蜷郁ｨ・",
    totalBuff + "%",
    "譛邨・",
    abilityScore
);

return Math.round(abilityScore);
}

function calcCustomAbilityScore(player){

    // 蝓ｺ譛ｬ閭ｽ蜉帙せ繧ｳ繧｢
    const timeScore =
        calcRaceTimeScore(player);

    let trackRate = 0;

    if (race.track === "濶ｯ") {

        trackRate =
            Number(player.goodTrack3Rate || 0);

    } else if (race.track === "貉ｿ") {

        trackRate =
            Number(player.wetTrack3Rate || 0);

    } else if (race.track === "譁・) {

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

    // =========================
    // 邇・ｺｺ蜷代￠ 螻暮幕陬懈ｭ｣
    // =========================

    const deployBuff =
        customHandicapMode === 2
            ? 0
            : calcDeployBuff(player);

    const angleBuff =
        customHandicapAngleMode === 2
            ? 0
            : calcHandicapAngleBuff(player);

    const stBuff =
        customSTMode === 2
            ? 0
            : calcAbilitySTBuff(player);

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

    // 7鬆・岼縺ｮ陬懈ｭ｣繧貞粋邂・
    const totalBuff =
        deployBuff +
        angleBuff +
        stBuff +
        tempBuff +
        startBuff +
        wetBuff +
        mixedBuff;

    // 蜷育ｮ励＠縺溯｣懈ｭ｣繧呈怙蠕後↓1蝗槭□縺大渚譏
    abilityScore =
        abilityScore *
        (1 + totalBuff / 100);

    console.log(
        "=== CUSTOM ABILITY DEBUG ===",
        "player:", player.name || player.playerName,
        "deploy:", deployBuff,
        "angle:", angleBuff,
        "st:", stBuff,
        "temp:", tempBuff,
        "start:", startBuff,
        "wet:", wetBuff,
        "mixed:", mixedBuff,
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

    console.log(
player.handicap,
"deploy",
calcDevelopmentDeployBuff(player),
"angle",
calcHandicapAngleBuff(player)*2,
"st",
calcDevelopmentSTBuff(player),
"temp",
calcDevelopmentTemperatureBuff(player)
);

const raceTime =
Number(player.time) + Number(player.diff) / 1000;

let timeScore = calcRaceTimeScore(player);

let rate;


if (race.track === "濶ｯ") {

    rate = Number(player.goodTrack3Rate || 0);

} else if (race.track === "貉ｿ") {

    rate = Number(player.wetTrack3Rate || 0);

} else if (race.track === "譁・) {

    const good = Number(player.goodTrack3Rate || 0);
    const wet = Number(player.wetTrack3Rate || 0);

    rate = (good + wet) / 2;

} else {

    rate = 0;

}
let rateScore =
70 + (rate - 70) * 0.5;

let abilityScore =
(timeScore * 0.7) +
(rateScore * 0.3);


// 螻暮幕陬懈ｭ｣
const deployBuff =
    calcDevelopmentDeployBuff(player);

const angleBuff =
    calcHandicapAngleBuff(player) * 2;

const stBuff =
    calcDevelopmentSTBuff(player);

const tempBuff =
    calcDevelopmentTemperatureBuff(player);;
let wetBuff =
    customWetMode === 2
    ? 0
    : calcWetBuff(player) * 2;
let mixedBuff =
    customMixedMode === 2
    ? 0
    : calcMixedBuff(player) * 2;


// 螻暮幕陬懈ｭ｣繧偵☆縺ｹ縺ｦ蜷育ｮ・
const totalDevelopmentBuff =
    deployBuff +
    angleBuff +
    stBuff +
    tempBuff;

// 蜷育ｮ励＠縺溯｣懈ｭ｣繧呈怙蠕後↓1蝗槭□縺大渚譏
let developmentScore =
    abilityScore *
    (1 + totalDevelopmentBuff / 100);

console.log(
    "螻暮幕陬懈ｭ｣蜷郁ｨ・",
    totalDevelopmentBuff + "%",
    "譛邨ゅせ繧ｳ繧｢:",
    developmentScore
);

return Math.round(developmentScore);
}

function calcCustomDevelopmentScore(player){

    // =========================
    // 蝓ｺ譛ｬ閭ｽ蜉帙せ繧ｳ繧｢
    // =========================

    const timeScore =
        calcRaceTimeScore(player);

    let rate = 0;

    if (race.track === "濶ｯ") {

        rate =
            Number(player.goodTrack3Rate || 0);

    } else if (race.track === "貉ｿ") {

        rate =
            Number(player.wetTrack3Rate || 0);

    } else if (race.track === "譁・) {

        const good =
            Number(player.goodTrack3Rate || 0);

        const wet =
            Number(player.wetTrack3Rate || 0);

        rate = (good + wet) / 2;
    }

    const rateScore =
        70 + (rate - 70) * 0.5;

    let abilityScore =
        (timeScore * 0.7) +
        (rateScore * 0.3);


    // =========================
    // 繧ｹ繧ｿ繝ｳ繝繝ｼ繝牙ｱ暮幕4鬆・岼
    // =========================

    const deployBuff =
        customHandicapMode === 2
            ? 0
            : calcDevelopmentDeployBuff(player);

    const angleBuff =
        customHandicapAngleMode === 2
            ? 0
            : calcHandicapAngleBuff(player) * 2;

    const stBuff =
        customSTMode === 2
            ? 0
            : calcDevelopmentSTBuff(player);

    const tempBuff =
        customTempMode === 2
            ? 0
            : calcDevelopmentTemperatureBuff(player);


    // =========================
    // 邇・ｺｺ霑ｽ蜉3鬆・岼
    // =========================

    const startBuff =
        customStartMode === 2
            ? 0
            : calcDevelopmentStartBuff(player);

    const wetBuff =
        customWetMode === 2
            ? 0
            : calcWetBuff(player) * 2;

    const mixedBuff =
        customMixedMode === 2
            ? 0
            : calcMixedBuff(player) * 2;


    // =========================
    // 7鬆・岼繧偵☆縺ｹ縺ｦ蜷育ｮ・
    // =========================

    const totalBuff =
        deployBuff +
        angleBuff +
        stBuff +
        tempBuff +
        startBuff +
        wetBuff +
        mixedBuff;


    // =========================
    // 譛蠕後↓1蝗槭□縺大渚譏
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
        "st:", stBuff,
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

const predictedTime =
(Number(player.time) + Number(player.diff)/1000).toFixed(3);

const abilityScore = calcAbilityScore(player);

const deployBuff = calcDeployBuff(player);

const stBuff = calcSTBuff(player);

const tempBuff = calcTemperatureBuff(player);

const finalScore =
abilityScore *
(1 + deployBuff / 100) *
(1 + stBuff / 100) *
(1 + tempBuff / 100);

console.log(
name,
"閭ｽ蜉・,
abilityScore,
"繝上Φ繝・,
deployBuff,
"ST",
stBuff,
"貂ｩ蠎ｦ",
tempBuff,
"譛邨・,
finalScore
);

    document.getElementById("playerName").innerHTML = "側 " + name;

    document.getElementById("playerCar").innerHTML = player.car;

    document.getElementById("playerHandicap").innerHTML = player.handicap;

    

    document.getElementById("playerRank").innerHTML = player.rank;

    document.getElementById("playerTime").innerHTML = player.time;

    document.getElementById("playerST").innerHTML = player.st;

    document.getElementById("playerDiff").innerHTML = player.diff;

    document.getElementById("playerTripleRate").textContent =
player.tripleRate;

   document.getElementById("playerResults").innerHTML =
player.recentRaces
?
player.recentRaces.map(race =>
`${race.order}逹 ${race.raceTime} 隧ｦ襍ｰ${race.trialTime}`
).join(" / ")
:
"繝・・繧ｿ縺ｪ縺・;


document.getElementById("playerRecent").innerHTML =
player.recentRaces
?
player.recentRaces.map(race =>
`${race.date} ${race.place} ${race.raceNo}R ${race.order}逹<br>遶ｶ襍ｰ ${race.raceTime}縲隧ｦ襍ｰ ${race.trialTime}縲ST ${race.st}`
).join("<br>")
:
"繝・・繧ｿ縺ｪ縺・;

    document.getElementById("playerModal").style.display="block";

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
player.handicap + "繝ｩ繧､繝ｳ"
}
</td>
<td>
${player.time}
</td>

<td>
${player.st}
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
    <td>
    ${races[i].date}<br>
    ${races[i].place || ""}<br>
    ${races[i].raceNo || ""}R<br>
    ${races[i].order || ""}逹<br>
    遶ｶ襍ｰ ${races[i].raceTime || ""}<br>
    隧ｦ襍ｰ ${races[i].trialTime || ""}<br>
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

// 0m縺ｯ陬懈ｭ｣縺ｪ縺・
if(player.handicap === "0m"){
    return 0;
}

// 蜷後§繝上Φ繝・・驕ｸ謇九ｒ蜿門ｾ・
const group = Object.values(players)
.filter(p => p.handicap === player.handicap)
.sort((a,b)=>a.car-b.car);


// 3莠ｺ莉･荳九・陬懈ｭ｣蟇ｾ雎｡螟・
if(group.length <= 3){
    return 0;
}


// 4莠ｺ莉･荳翫・蝣ｴ蜷医・縺ｿ隗貞ｺｦ陬懈ｭ｣
const index = group.findIndex(p => p.car === player.car);


// 譛蜀・%縲∝､悶∈ -0.5%
return index * -0.5;

}



function calcTemperatureBuff(player){

    const temp = Number(
        (race.trackTemp || "0邃・).replace("邃・,"")
    );

    const handicap =
        parseInt(player.handicap, 10);

    let buff = 0;


    // =========================
    // 鬮俶ｸｩ45邃・ｻ･荳・
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
    // 菴取ｸｩ10邃・ｻ･荳・
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

    return calcHandicapAngleBuff(player) * 2;

}

function createAbilityTable(){

const table = document.getElementById("abilityTable");
table.innerHTML = "";

let playerList = Object.entries(players);

if(abilityRankMode){
    playerList.sort((a,b)=>{
        return calcAbilityScore(b[1]) - calcAbilityScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
    (Number(player.time) + Number(player.diff)/1000).toFixed(3);

    const score = calcAbilityScore(player);

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
            ${Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${predictedTime}
        </td>

        <td class="triple-rate">
${
    race.track === "濶ｯ"
        ? Number(player.goodTrack3Rate || 0).toFixed(1) + "%"
        : race.track === "貉ｿ"
            ? Number(player.wetTrack3Rate || 0).toFixed(1) + "%"
            : race.track === "譁・
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0.0%"
}
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

        <td>
        ${
        handicapAngleMode
        ?
        (calcHandicapAngleBuff(player) > 0
        ? `<span class="buff-plus">+${calcHandicapAngleBuff(player)}%</span>`
        : calcHandicapAngleBuff(player) < 0
        ? `<span class="buff-minus">${calcHandicapAngleBuff(player)}%</span>`
        : "0%")
        :
player.handicap + "繝ｩ繧､繝ｳ"
        }
        </td>

        <td>
        ${
        stMode
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
    ${score}
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
            ${Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${predictedTime}
        </td>

       <td class="triple-rate">
${
    race.track === "濶ｯ"
        ? Number(player.goodTrack3Rate || 0) + "%"
        : race.track === "貉ｿ"
            ? Number(player.wetTrack3Rate || 0) + "%"
            : race.track === "譁・
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0%"
}
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
player.handicap + "繝ｩ繧､繝ｳ"
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
    ${score}
</td>

    </tr>
    `;
}
colorCustomAbilityScoreRank();

}
function showCustomScoreMenu(cell, name, type){

    // 縺吶〒縺ｫ繝｡繝九Η繝ｼ縺後≠繧後・蜑企勁
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
        return calcCustomDevelopmentScore(b[1]) - calcCustomDevelopmentScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
        (Number(player.time) + Number(player.diff) / 1000).toFixed(3);

    const score = calcCustomDevelopmentScore(player);

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
            ${Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${predictedTime}
        </td>

       <td class="triple-rate">
${
    race.track === "濶ｯ"
        ? Number(player.goodTrack3Rate || 0) + "%"
        : race.track === "貉ｿ"
            ? Number(player.wetTrack3Rate || 0) + "%"
            : race.track === "譁・
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0%"
}
</td>

        <td>
    ${
        handicapMode
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
        player.handicap + "繝ｩ繧､繝ｳ"
    }
</td>

        <td>
            ${
                stMode
                ?
                (
                    calcDevelopmentSTBuff(player) > 0
                    ? `<span class="buff-plus">+${calcDevelopmentSTBuff(player)}%</span>`
                    : calcDevelopmentSTBuff(player) < 0
                    ? `<span class="buff-minus">${calcDevelopmentSTBuff(player)}%</span>`
                    : "0%"
                )
                :
                player.st
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
    ${score}
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
        return calcCustomDevelopmentScore(b[1]) - calcCustomDevelopmentScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
    (Number(player.time) + Number(player.diff)/1000).toFixed(3);

    const score = calcCustomDevelopmentScore(player);

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
            ${Number(player.time).toFixed(2)}
        </td>

        <td>
            +${player.diff}
        </td>

        <td class="predicted-time">
            ${predictedTime}
        </td>

        <td class="triple-rate">
${
    race.track === "濶ｯ"
        ? Number(player.goodTrack3Rate || 0) + "%"
        : race.track === "貉ｿ"
            ? Number(player.wetTrack3Rate || 0) + "%"
            : race.track === "譁・
                ? (
                    (
                        Number(player.goodTrack3Rate || 0) +
                        Number(player.wetTrack3Rate || 0)
                    ) / 2
                  ).toFixed(1) + "%"
                : "0%"
}
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
            calcWetBuff(player) * 2 > 0
            ? `<span class="buff-plus">+${calcWetBuff(player) * 2}%</span>`
            : calcWetBuff(player) * 2 < 0
            ? `<span class="buff-minus">${calcWetBuff(player) * 2}%</span>`
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
            ? `<span class="buff-plus">+${calcMixedBuff(player) * 2}%</span>`
            : calcMixedBuff(player) < 0
            ? `<span class="buff-minus">${calcMixedBuff(player) * 2}%</span>`
            : "0%"
        )
        :
        (player.customMixed || "")
    }
</td>

<td>
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

<td>
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
player.handicap + "繝ｩ繧､繝ｳ"
    }
        </td>

        <td>
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

        <td>
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
    ${score}
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

```javascript
async function createALVerificationData(resultList = null){

    if(!currentRaceData){
        console.error("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ繝・・繧ｿ縺後≠繧翫∪縺帙ｓ");
        return [];
    }

    /*
     * =========================
     * 螳溽捩鬆・ョ繝ｼ繧ｿ
     * =========================
     */

    const finishMap = {};

    for(const result of resultList || []){
        finishMap[Number(result.car)] =
            Number(result.finish);
    }

    /*
     * =========================
     * 迴ｾ蝨ｨ縺ｮAL莠域Φ繧ｹ繧ｳ繧｢繧貞叙蠕・
     * =========================
     *
     * 菫晏ｭ俶ｸ医∩縺ｮAL繧ｹ繧ｳ繧｢縺ｯ菴ｿ繧上↑縺・・
     * 迴ｾ蝨ｨ縺ｮ players 縺ｨ迴ｾ蝨ｨ縺ｮ險育ｮ怜ｼ上°繧・
     * 縺昴・蝣ｴ縺ｧAL繧ｹ繧ｳ繧｢繧貞・險育ｮ励☆繧九・
     */

    const list =
        Object.entries(players).map(
            ([name, player]) => {

                return {

                    name: name,

                    car:
                        Number(player.car),

                    // 迴ｾ蝨ｨ縺ｮAL莠域Φ繧偵◎縺ｮ縺ｾ縺ｾ菴ｿ逕ｨ
                    alScore:
                        Number(
                            calcExpectationScore(player)
                        ),

                    finish:
                        finishMap[
                            Number(player.car)
                        ] ?? null

                };

            }
        );

    /*
     * =========================
     * AL繧ｹ繧ｳ繧｢縺ｮ鬮倥＞鬆・↓荳ｦ縺ｹ繧・
     * =========================
     */

    list.sort(
        (a, b) =>
            b.alScore - a.alScore
    );

    /*
     * =========================
     * AL鬆・ｽ阪・髫｣縺ｨ縺ｮ蟾ｮ
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
                    Number(
                        (
                            player.alScore -
                            list[index + 1].alScore
                        ).toFixed(1)
                    );

            }else{

                // 譛荳倶ｽ阪・豈碑ｼ・ｯｾ雎｡縺ｪ縺・
                player.scoreDiff =
                    null;

            }

        }
    );

    console.table(list);

    return list;
}
```
async function calculateALVerificationStats(){

    const data = await createALVerificationData();
    const stats = {};

    // AL1菴阪・菴・
    for(let rank = 1; rank <= 8; rank++){

        stats[rank] = {
            "3轤ｹ莉･荳・: {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                triple: 0
            },
            "4轤ｹ莉･荳・: {
                count: 0,
                first: 0,
                second: 0,
                third: 0,
                triple: 0
            }
        };

        // 蜷後§AL鬆・ｽ阪・蜈ｨ繝・・繧ｿ繧帝寔險・
        const players = data.filter(
            player => player.alRank === rank
        );

        for(const player of players){

            let group;

            if(player.scoreDiff <= 3.0){

                group = stats[rank]["3轤ｹ莉･荳・];

            }else if(player.scoreDiff >= 3.5){

                group = stats[rank]["4轤ｹ莉･荳・];

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

const table = document.getElementById("expectationTable");

table.innerHTML = "";

let playerList = Object.entries(players);


if(expectationRankMode){

    playerList.sort((a,b)=>{

        return calcExpectationScore(b[1])
        - calcExpectationScore(a[1]);

    });

}


for(const [name, player] of playerList){

const abilityScore = calcAbilityScore(player);
const developmentScore = calcDevelopmentScore(player);

const expectationScore =
((abilityScore + developmentScore) / 2).toFixed(1);


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
${expectationScore}
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
return calcExpectationScore(b[1])
- calcExpectationScore(a[1]);
});
}

for(const [name, player] of playerList){

const abilityScore = calcAbilityScore(player);
const developmentScore = calcDevelopmentScore(player);

const expectationScore =
((abilityScore + developmentScore) / 2).toFixed(1);


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
${expectationScore}
</td>

</tr>
`;

}
colorCustomExpectationScoreRank();
}



function calcSTBuff(player){

// 蜷後§繝上Φ繝・・驕ｸ謇九□縺鷹寔繧√ｋ
const group = Object.values(players).filter(p =>
    p.handicap === player.handicap
);

// 蜷後ワ繝ｳ繝・莠ｺ縺ｪ繧芽｣懈ｭ｣縺ｪ縺・
if(group.length <= 1){
    return 0;
}

// 蜷後ワ繝ｳ繝・ｹｳ蝮⑳T
const avgST =
group.reduce((sum,p)=>sum + Number(p.st),0) / group.length;

//蟷ｳ蝮・→縺ｮ蟾ｮ
const diff =
avgST - Number(player.st);

let buff = 0;

// 蟾ｮ縺ｧ陬懈ｭ｣
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

function calcCustomStartBuff(player){

    // 繧ｹ繧ｿ繝ｼ繝亥鴨縺梧悴蜈･蜉帙↑繧芽｣懈ｭ｣縺ｪ縺・
    if(!player.customStart){
        return 0;
    }

    // 蜷後§繝上Φ繝・〒縲√せ繧ｿ繝ｼ繝亥鴨縺悟・蜉帙＆繧後※縺・ｋ驕ｸ謇九□縺・
    const group = Object.values(players).filter(p =>
        p.handicap === player.handicap &&
        p.customStart
    );

    // 豈碑ｼ・ｯｾ雎｡縺・莠ｺ莉･荳九↑繧芽｣懈ｭ｣縺ｪ縺・
    if(group.length <= 1){
        return 0;
    }

    // 蜷後ワ繝ｳ繝・・繧ｹ繧ｿ繝ｼ繝亥鴨蟷ｳ蝮・
    const avgStart =
        group.reduce(
            (sum,p) => sum + Number(p.customStart),
            0
        ) / group.length;

    // 蟷ｳ蝮・→縺ｮ蟾ｮ
    const diff =
        Number(player.customStart) - avgStart;

    let buff = 0;

    // 蟷ｳ蝮・ｈ繧企ｫ倥＞縺ｻ縺ｩ繝励Λ繧ｹ
    if(diff >= 2){
        buff = 3;
    }
    else if(diff >= 1){
        buff = 2;
    }
    else if(diff <= -2){
        buff = -3;
    }
    else if(diff <= -1){
        buff = -2;
    }
    else{
        buff = 0;
    }

    return buff;
}

function calcAbilitySTBuff(player){

    return calcSTBuff(player);

}

function calcDevelopmentSTBuff(player){

    return calcSTBuff(player) * 2;

}



function calcCustomStartBuff(player){

    // 蜷後§繝上Φ繝・・驕ｸ謇九□縺大叙蠕・
    const group = Object.values(players).filter(p =>
        p.handicap === player.handicap &&
        p.customStart != null
    );

    // 豈碑ｼ・ｯｾ雎｡縺・莠ｺ莉･荳九↑繧芽｣懈ｭ｣縺ｪ縺・
    if(group.length <= 1){
        return 0;
    }

    // 蜷後ワ繝ｳ繝・・繧ｹ繧ｿ繝ｼ繝亥鴨蟷ｳ蝮・
    const avgStart =
        group.reduce((sum, p) =>
            sum + Number(p.customStart), 0
        ) / group.length;

    // 蟷ｳ蝮・→縺ｮ蟾ｮ
    const diff =
        Number(player.customStart) - avgStart;

    // 陬懈ｭ｣
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

    return calcTemperatureBuff(player) * 2;

}

function calcAbilityDeployBuff(player){

    return calcDeployBuff(player);

}

function calcDevelopmentDeployBuff(player){

    return calcDeployBuff(player) * 2;

}

function calcAbilityStartBuff(player){
    return calcCustomStartBuff(player);
}

function calcDevelopmentStartBuff(player){
    return calcCustomStartBuff(player) * 2;
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

    // 縺ｾ縺謨ｰ蟄励′蜈･蜉帙＆繧後※縺・↑縺・∈謇九・陬懈ｭ｣縺ｪ縺・
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
    console.log("1菴・, score);
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    console.log("2菴・, score);
    cell.classList.add("second-score");
}

});

}

function colorCustomAbilityScoreRank(){

    const table =
        document.querySelector("#customAbilityTable");

    // 縺ｾ縺壽里蟄倥・鬆・ｽ崎牡繧貞・驛ｨ隗｣髯､
    table.querySelectorAll(".best-score, .second-score")
        .forEach(cell=>{
            cell.classList.remove("best-score", "second-score");
        });

    // 隧ｦ襍ｰ繧ｿ繧､繝・壼ｰ上＆縺・⊇縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".trial-time",
        "asc"
    );

    // 莠域Φ遶ｶ襍ｰ繧ｿ繧､繝・壼ｰ上＆縺・⊇縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".predicted-time",
        "asc"
    );

    // 3騾｣蟇ｾ邇・ｼ壼､ｧ縺阪＞縺ｻ縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".triple-rate",
        "desc"
    );

    // AL繧ｹ繧ｳ繧｢・壼､ｧ縺阪＞縺ｻ縺ｩ荳贋ｽ・
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

    // 譌｢蟄倥・鬆・ｽ崎牡繧定ｧ｣髯､
    table.querySelectorAll(".best-score, .second-score")
        .forEach(cell=>{
            cell.classList.remove("best-score", "second-score");
        });

    // 隧ｦ襍ｰ繧ｿ繧､繝・壼ｰ上＆縺・⊇縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".trial-time",
        "asc"
    );

    // 莠域Φ遶ｶ襍ｰ繧ｿ繧､繝・壼ｰ上＆縺・⊇縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".predicted-time",
        "asc"
    );

    // 3騾｣蟇ｾ邇・ｼ壼､ｧ縺阪＞縺ｻ縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".triple-rate",
        "desc"
    );

    // AL繧ｹ繧ｳ繧｢・壼､ｧ縺阪＞縺ｻ縺ｩ荳贋ｽ・
    colorCustomColumnRank(
        table,
        ".score",
        "desc"
    );

}

function colorCustomExpectationScoreRank(){

    const table =
        document.querySelector("#customExpectationTable");

    // 譌｢蟄倥・鬆・ｽ崎牡繧定ｧ｣髯､
    table.querySelectorAll(".best-score, .second-score")
        .forEach(cell=>{
            cell.classList.remove("best-score", "second-score");
        });

    const rows =
        [...table.querySelectorAll("tr")];

    // 閭ｽ蜉帙せ繧ｳ繧｢
    colorCustomColumnRankByCell(
        rows,
        2
    );

    // 螻暮幕繧ｹ繧ｳ繧｢
    colorCustomColumnRankByCell(
        rows,
        3
    );

    // AL譛溷ｾ・､
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
    console.log("1菴・, score);
    cell.classList.add("best-score");
}

else if(score === scores[1]){
    console.log("2菴・, score);
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

    // 蜈ｨ驛ｨ髫縺・
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
    });

    // 繝懊ち繝ｳ縺ｮ濶ｲ繧偵Μ繧ｻ繝・ヨ
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // 謌千ｸｾ繝懊ち繝ｳ縺ｮ髱偵ｒ隗｣髯､
document.querySelectorAll(".race-tab-btn")
.forEach(btn=>{
    if(btn.textContent.trim() === "謌千ｸｾ"){
        btn.classList.remove("active");
    }
});

    // 驕ｸ繧薙□繧ｿ繝悶ｒ陦ｨ遉ｺ
    document.getElementById(tabId).style.display = "block";

    // 謚ｼ縺励◆繝懊ち繝ｳ繧帝搨濶ｲ縺ｫ
    button.classList.add("active");

    // AL讀懆ｨｼ繧ｿ繝悶ｒ髢九＞縺溘ｉ讀懆ｨｼ陦ｨ繧定・蜍墓峩譁ｰ
    if(tabId === "verification"){
        displayALVerificationStats();
    }

    const params = new URLSearchParams(window.location.search);

const raceNumber = params.get("race");

if (raceNumber) {
    document.getElementById("raceTitle").textContent =
    race.venue + " " + raceNumber + "R";
}
}

function changeRecent(){

// 謌千ｸｾ繝懊ち繝ｳ縺縺鷹搨
event.currentTarget.classList.add("active");


// AL莠域Φ縺ｪ縺ｩ繝｡繧､繝ｳ繧ｿ繝悶・濶ｲ隗｣髯､
document.querySelectorAll(".tab-btn")
.forEach(btn=>{
    btn.classList.remove("active");
});


// AL蜀・Κ繧ｿ繝冶ｧ｣髯､
document.querySelectorAll(".al-tab-btn")
.forEach(btn=>{
    btn.classList.remove("active");
});


// 蜈ｨ繝壹・繧ｸ髱櫁｡ｨ遉ｺ
document.querySelectorAll(".tab-content")
.forEach(tab=>{
    tab.style.display="none";
});


// 謌千ｸｾ陦ｨ遉ｺ
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

// AL莠域Φ縺ｨ縺ｯ・溘ｒ繧ゅ≧荳蠎ｦ謚ｼ縺励◆繧蛾哩縺倥ｋ
if(tab === "about" && page.style.display === "block"){

    page.style.display = "none";
    button.classList.remove("active");

    return;
}

// 荳譌ｦ蜈ｨ驛ｨ髢峨§繧・
document.querySelectorAll(".al-page").forEach(page=>{
    page.style.display = "none";
});


// 驕ｸ謚槭＠縺溘・繝ｼ繧ｸ陦ｨ遉ｺ
page.style.display = "block";

console.log("陦ｨ遉ｺ險ｭ螳・", page.style.display);

// 繝懊ち繝ｳ迥ｶ諷句､画峩
document.querySelectorAll(".al-tab-btn").forEach(btn=>{
    btn.classList.remove("active");
});

document.querySelectorAll(".race-tab-btn")
.forEach(btn=>{
    if(btn.textContent === "謌千ｸｾ"){
        btn.classList.remove("active");
    }
});

button.classList.add("active");

}



// 蛻晄悄陦ｨ遉ｺ繧定・蜉幃㍾隕泡L縺ｫ縺吶ｋ
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
            header.textContent = "繝上Φ繝・｣懈ｭ｣ 笆ｲ";
        }else{
            header.textContent = "繝上Φ繝・笆ｼ";
        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();

}

function toggleHandicapAngle(){

handicapAngleMode = !handicapAngleMode;

const headers =
document.querySelectorAll(".handicap-angle-header");

headers.forEach(header=>{

    if(handicapAngleMode){
        header.textContent =
        "繝上Φ繝・ｧ貞ｺｦ陬懈ｭ｣ 笆ｲ";
    }else{
        header.textContent =
        "繝上Φ繝・ｧ貞ｺｦ 笆ｼ";
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
        <h4>${handicap}繝ｩ繧､繝ｳ</h4>
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
            ${player.car}蜿ｷ霆・${Object.keys(players)
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
            header.textContent = "蟷ｳ蝮⑳T陬懈ｭ｣ 笆ｲ";
        }else{
            header.textContent = "蟷ｳ蝮⑳T 笆ｼ";
        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();

}

function toggleTemperature(){

    tempMode = !tempMode;

    const headers =
    document.querySelectorAll(".temp-header");

    headers.forEach(header => {

        if(tempMode){
            header.textContent = "襍ｰ霍ｯ貂ｩ蠎ｦ陬懈ｭ｣ 笆ｲ";
        }else{
            header.textContent = "襍ｰ霍ｯ貂ｩ蠎ｦ 笆ｼ";
        }

    });

    createAbilityTable();
    createDevelopmentTable();

    colorScoreRank();
    colorDevelopmentScoreRank();

}

function toggleCustomHandicap(){

    console.log("邇・ｺｺ繝上Φ繝・け繝ｪ繝・け");

    customHandicapMode =
        (customHandicapMode + 1) % 3;

    const headers =
        document.querySelectorAll(".custom-handicap-header");

    console.log("邇・ｺｺ繝上Φ繝・・繝・ム繝ｼ謨ｰ:", headers.length);

    headers.forEach(header => {

        if(customHandicapMode === 0){

            header.textContent = "繝上Φ繝・笆ｼ";

        }else if(customHandicapMode === 1){

            header.textContent = "繝上Φ繝・｣懈ｭ｣ 笆ｲ";

        }else{

            header.textContent = "繝上Φ繝・OFF";

        }

        console.log(
            "螟画峩蠕後・繝・ム繝ｼ:",
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

            header.textContent = "繝上Φ繝・ｧ貞ｺｦ 笆ｼ";

        }else if(customHandicapAngleMode === 1){

            header.textContent = "繝上Φ繝・ｧ貞ｺｦ陬懈ｭ｣ 笆ｲ";

        }else{

            header.textContent = "繝上Φ繝・ｧ貞ｺｦ OFF";

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

            header.textContent = "蟷ｳ蝮⑳T 笆ｼ";

        }else if(customSTMode === 1){

            header.textContent = "蟷ｳ蝮⑳T陬懈ｭ｣ 笆ｲ";

        }else{

            header.textContent = "蟷ｳ蝮⑳T OFF";

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
                "繧ｹ繧ｿ繝ｼ繝亥鴨 笆ｼ";

        }else if(customStartMode === 1){

            header.textContent =
                "繧ｹ繧ｿ繝ｼ繝亥鴨陬懈ｭ｣ 笆ｲ";

        }else{

            header.textContent =
                "繧ｹ繧ｿ繝ｼ繝亥鴨 OFF";

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

            header.textContent = "襍ｰ霍ｯ貂ｩ蠎ｦ 笆ｼ";

        }else if(customTempMode === 1){

            header.textContent = "襍ｰ霍ｯ貂ｩ蠎ｦ陬懈ｭ｣ 笆ｲ";

        }else{

            header.textContent = "襍ｰ霍ｯ貂ｩ蠎ｦ OFF";

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
                "貉ｿ 笆ｼ";

        }else if(customWetMode === 1){

            header.textContent =
                "貉ｿ陬懈ｭ｣ 笆ｲ";

        }else{

            header.textContent =
                "貉ｿ OFF";

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
                "譁・笆ｼ";

        }else if(customMixedMode === 1){

            header.textContent =
                "譁題｣懈ｭ｣ 笆ｲ";

        }else{

            header.textContent =
                "譁・OFF";

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
        throw new Error("JSON蜿門ｾ怜､ｱ謨・ " + response.status);
    }

    const data = await response.json();

    currentRaceData = data;

    console.log("JSON蜿門ｾ玲・蜉・", data);
    console.log("髢句ぎ蝣ｴ:", venue);
    console.log("驕ｸ謇区焚:", data.players.length);

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
        "隧ｦ襍ｰ:", player.trialRunTime,
        "蛛丞ｷｮ:", player.raceDev
    );

   

console.log(
    player.playerName,
    "霑・0襍ｰ:",
    recentRaces
);

    const name = player.playerName;

console.log(
    "3騾｣蟇ｾ邇・｢ｺ隱・",
    player.playerName,
    "player.rate3=",
    player.rate3,
    "playerCode=",
    player.playerCode
);

let tripleRate = Number(player.rate3 || 0);

let goodTrack3Rate = 0;
let wetTrack3Rate = 0;

if (player.playerCode) {

    try {

        const profileResponse =
            await fetch(
                `./profiles/${player.playerCode}.json`
            );

        if (profileResponse.ok) {

            const profileData =
                await profileResponse.json();

            // 邱丞粋3騾｣蟇ｾ邇・
            const profileRate3 =
                Number(
                    profileData.body?.totalResult?.rate3
                );

            if (!isNaN(profileRate3)) {
                tripleRate = profileRate3;
            }

            // 濶ｯ襍ｰ霍ｯ3騾｣蟇ｾ邇・
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

            // 貉ｿ襍ｰ霍ｯ3騾｣蟇ｾ邇・
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
            `繝励Ο繝輔ぅ繝ｼ繝ｫ繝・・繧ｿ蜿門ｾ怜､ｱ謨・ ${player.playerCode}`,
            error
        );

    }
}

players[name] = {

    playerCode: player.playerCode,
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

    st: player.averageST != null
        ? Number(player.averageST).toFixed(2)
        : "",

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
        ? "濶ｯ"
        : Number(
            data.raceInfo?.raceSituationCode ??
            data.raceInfo?.situationCode ??
            0
        ) === 1
            ? "貉ｿ"
            : Number(
                data.raceInfo?.raceSituationCode ??
                data.raceInfo?.situationCode ??
                0
            ) === 5
                ? "譁・
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

            // 莉頑律縺ｮ繝・・繧ｿ縺縺代ｒ蟇ｾ雎｡縺ｫ縺吶ｋ
            if (data.raceDate !== today) {
                console.log(
                    `竢ｭ・・${raceNo}R 縺ｯ蛻･譌･縺ｮ繝・・繧ｿ縺ｮ縺溘ａ辟｡隕・ ${data.raceDate}`
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
                `${raceNo}R 邱蛻・凾蛻ｻ蜿門ｾ怜､ｱ謨輿,
                error
            );
        }
    }

    if (!finalRaceNo) {
        console.warn(
            "笞・・莉頑律縺ｮ髢句ぎ繝・・繧ｿ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ"
        );
        return;
    }

    console.log(
        `笘・莉頑律縺ｮ譛邨３: ${finalRaceNo}R`
    );

    if (currentRace !== null) {
        console.log(
            `笘・迴ｾ蝨ｨ逋ｺ螢ｲ荳ｭ: ${currentRace}R`
        );

        console.log(
            `笘・邱蛻・ ${nearestDeadline}`
        );

        changeRace(currentRace);
        return;
    }

    console.log(
        "笘・譛ｬ譌･縺ｮ繝ｬ繝ｼ繧ｹ縺ｯ邨ゆｺ・＠縺ｦ縺・∪縺・
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
        venue: "蟾晏哨繧ｪ繝ｼ繝・,
        date: "7/21縲・/23",
        day: "譛邨よ律",
        status: "泙 髢句ぎ荳ｭ"
    },
    {
        venue: "豬懈收繧ｪ繝ｼ繝・,
        date: "7/22縲・/26",
        day: "隨ｬ2譌･逶ｮ",
        status: "泙 髢句ぎ荳ｭ"
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
                <button>繝ｬ繝ｼ繧ｹ繧定ｦ九ｋ</button>
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

    if (race.track === "濶ｯ") {

        trackRate =
            Number(player.goodTrack3Rate || 0);

    } else if (race.track === "貉ｿ") {

        trackRate =
            Number(player.wetTrack3Rate || 0);

    } else if (race.track === "譁・) {

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
            "驕ｸ謇九ョ繝ｼ繧ｿ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ:",
            name
        );
        return;
    }

    const abilityScore =
        calcBaseAbilityScore(player);

    let totalBuff = 0;

    // =========================
    // 繧ｹ繧ｿ繝ｳ繝繝ｼ繝芽・蜉・
    // =========================

    if (type === "ability") {

        totalBuff =
            calcDeployBuff(player) +
            calcHandicapAngleBuff(player) +
            calcAbilitySTBuff(player) +
            calcTemperatureBuff(player);

    }

    // =========================
    // 邇・ｺｺ閭ｽ蜉・
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
                : calcMixedBuff(player));

    }

    // =========================
    // 繧ｹ繧ｿ繝ｳ繝繝ｼ繝牙ｱ暮幕
    // =========================

    else if (type === "development") {

        totalBuff =
            calcDevelopmentDeployBuff(player) +
            calcHandicapAngleBuff(player) * 2 +
            calcDevelopmentSTBuff(player) +
            calcDevelopmentTemperatureBuff(player);

    }

    // =========================
    // 邇・ｺｺ螻暮幕
    // =========================

    else if (type === "customDevelopment") {

        totalBuff =
            (customHandicapMode === 2
                ? 0
                : calcDevelopmentDeployBuff(player))
            +
            (customHandicapAngleMode === 2
                ? 0
                : calcHandicapAngleBuff(player) * 2)
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
                : calcWetBuff(player) * 2)
            +
            (customMixedMode === 2
                ? 0
                : calcMixedBuff(player) * 2);
    }

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
        finalScore;

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

    // 菫晏ｭ俶ｸ医∩AL讀懆ｨｼ繝・・繧ｿ縺九ｉ髮・ｨ・
    const stats = calculateSavedALScoreDiffStats();

    let html = `
    <div class="table-scroll">
    <table class="al-verification-table">
    <thead>
        <tr>
            <th>AL鬆・ｽ・/th>
            <th>髫｣縺ｨ縺ｮ蟾ｮ</th>
            <th>1逹邇・/th>
            <th>2逹邇・/th>
            <th>3逹邇・/th>
            <th>3騾｣蟇ｾ邇・/th>
        </tr>
    </thead>
    <tbody>
    `;

    for(let rank = 1; rank <= 8; rank++){

        const groups = [
            ["3轤ｹ莉･荳・, stats[rank]?.["3轤ｹ莉･荳・]],
            ["4轤ｹ莉･荳・, stats[rank]?.["4轤ｹ莉･荳・]]
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
                <td>${rank}菴・/td>
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
        await createALVerificationData(resultList);

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

            // 現在のALスコアを保存
            alScore: Number(player.alScore),

            // 現在のAL順位を保存
            alRank: Number(player.alRank),

            // 現在の隣との差を保存
            scoreDiff:
                player.scoreDiff === null
                    ? null
                    : Number(player.scoreDiff),

            // 実着順
            finish:
                result
                    ? Number(result.finish)
                    : null
        };

    });

}

async function addALVerificationRecord(resultList){

    const newData =
        await createALVerificationRecord(resultList);

    if(!newData.length){
        console.error("AL検証データを作成できません");
        return [];
    }

    const raceKey =
        `${newData[0].date}_${newData[0].venue}_${newData[0].raceNo}`;

    const savedData =
        JSON.parse(
            localStorage.getItem("alVerificationData") || "[]"
        );

    const hasExistingRace =
        savedData.some(record =>
            `${record.date}_${record.venue}_${record.raceNo}` === raceKey
        );

    let updatedData;

    if(hasExistingRace){

        updatedData = savedData.map(record => {

            const recordRaceKey =
                `${record.date}_${record.venue}_${record.raceNo}`;

            if(recordRaceKey !== raceKey){
                return record;
            }

            const newRecord =
                newData.find(
                    player =>
                        Number(player.car) === Number(record.car)
                );

            return newRecord || record;
        });

        console.log(
            "🔄 既存AL検証データを現在のAL予想で更新:",
            raceKey,
            newData
        );

    }else{

        updatedData = [
            ...savedData,
            ...newData
        ];

        console.log(
            "✅ 新しいAL検証データを保存:",
            raceKey,
            newData
        );
    }

    localStorage.setItem(
        "alVerificationData",
        JSON.stringify(updatedData)
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

function calculateSavedALScoreDiffStats(){

    const data =
        JSON.parse(
            localStorage.getItem("alVerificationData") || "[]"
        );

    const stats = {};

    /*
     * =========================
     * 螳滄圀縺ｫ蟄伜惠縺吶ｋAL鬆・ｽ阪ｒ蜿門ｾ・
     * =========================
     */

    const maxRank =
        data.length > 0
            ? Math.max(...data.map(player => player.alRank))
            : 8;

    /*
     * =========================
     * AL鬆・ｽ阪＃縺ｨ縺ｮ髮・ｨ・
     * =========================
     */

    for(let rank = 1; rank <= maxRank; rank++){

        stats[rank] = {

            "3轤ｹ莉･荳・: {
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

            "4轤ｹ莉･荳・: {
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

            "豈碑ｼ・↑縺・: {
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
             * 譛荳倶ｽ・
             * scoreDiff = null
             */
            if(player.scoreDiff === null){

                group =
                    stats[rank]["豈碑ｼ・↑縺・];

            }

            /*
             * 3轤ｹ莉･荳・
             */
            else if(player.scoreDiff <= 3.0){

                group =
                    stats[rank]["3轤ｹ莉･荳・];

            }

            /*
             * 3.5轤ｹ莉･荳・
             */
            else if(player.scoreDiff >= 3.5){

                group =
                    stats[rank]["4轤ｹ莉･荳・];

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
         * 邇・ｒ險育ｮ・
         * =========================
         */

        for(
            const groupName of
            ["3轤ｹ莉･荳・, "4轤ｹ莉･荳・, "豈碑ｼ・↑縺・]
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
function renderALVerificationStats(){

    const area =
        document.getElementById("alVerificationArea");

    if(!area){
        return;
    }

    const stats =
        calculateSavedALScoreDiffStats();

    let html = "";

    html += `
        <h3>投 AL鬆・ｽ・ﾃ・繧ｹ繧ｳ繧｢蟾ｮ蛻･謌千ｸｾ</h3>

        <div class="table-scroll">

        <table class="al-verification-table">

        <thead>
        <tr>
            <th rowspan="2">AL鬆・ｽ・/th>
            <th rowspan="2">繧ｹ繧ｳ繧｢蟾ｮ</th>
            <th rowspan="2">莉ｶ謨ｰ</th>
            <th colspan="4">逹邇・/th>
        </tr>

        <tr>
            <th>1逹邇・/th>
            <th>2逹邇・/th>
            <th>3逹邇・/th>
            <th>3騾｣蟇ｾ邇・/th>
        </tr>
        </thead>

        <tbody>
    `;

    for(let rank = 1; rank <= 8; rank++){

        for(const groupName of ["3轤ｹ莉･荳・, "4轤ｹ莉･荳・, "豈碑ｼ・↑縺・]){

            const group =
                stats[rank][groupName];

            html += `
                <tr>

                    <td>${rank}菴・/td>

                    <td>${groupName === "4轤ｹ莉･荳・ ? "4轤ｹ莉･荳・ : groupName}</td>

                    <td>${group.count}</td>

                    <td>${group.firstRate}%</td>

                    <td>${group.secondRate}%</td>

                    <td>${group.thirdRate}%</td>

                    <td>${group.top3Rate}%</td>

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

// ========================================
// 繝ｬ繝ｼ繧ｹ邨先棡蜿門ｾ・
// ========================================
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
        console.error("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ繝・・繧ｿ縺後≠繧翫∪縺帙ｓ");
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
        "AL讀懆ｨｼ邨先棡繧呈峩譁ｰ:",
        currentRaceData.venue,
        currentRaceData.raceNo + "R"
    );

    return updated;
}

function updateVerificationFromOfficialResultPage() {
    const results = getRaceResultsFromPage();

    if (!results || results.length !== 8) {
        console.error(
            "逹鬆・ｒ8霆雁叙蠕励〒縺阪∪縺帙ｓ縺ｧ縺励◆:",
            results
        );
        return [];
    }

    console.log("蜈ｬ蠑冗ｵ先棡繧貞叙蠕・", results);

    const updated = updateALVerificationResults(results);

    console.log("AL讀懆ｨｼ繝・・繧ｿ繧呈峩譁ｰ縺励∪縺励◆");

    return updated;
}

// ========================================
// 蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ縺九ｉ縺ｮ逹鬆・ョ繝ｼ繧ｿ蜿嶺ｿ｡
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
        console.error("蜿嶺ｿ｡縺励◆逹鬆・ョ繝ｼ繧ｿ縺御ｸ肴ｭ｣縺ｧ縺・", results);
        return;
    }

    console.log("蜈ｬ蠑冗ｵ先棡繧貞女菫｡:", results);

    const updated = updateALVerificationResults(results);

    console.log("AL讀懆ｨｼ繝・・繧ｿ繧呈峩譁ｰ縺励∪縺励◆");

    // 讀懆ｨｼ逕ｻ髱｢縺ｮ蜀肴緒逕ｻ
    if (typeof displayALVerificationStats === "function") {
        displayALVerificationStats();
    }

});

// ========================================
// Auto-Lab縺九ｉ蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧帝幕縺・
// ========================================
function openOfficialResultPage() {

    if (!currentRaceData) {
        console.error("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ繝・・繧ｿ縺後≠繧翫∪縺帙ｓ");
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
        console.error("蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧帝幕縺代∪縺帙ｓ縺ｧ縺励◆");
        return;
    }

    console.log("蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧帝幕縺阪∪縺励◆:", url);
}

// ========================================
// 蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧貞挨繧ｿ繝悶〒髢九￥
// ========================================
function openOfficialResultPageTab() {

    if (!currentRaceData) {
        console.error("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ繝・・繧ｿ縺後≠繧翫∪縺帙ｓ");
        return;
    }

    const venue = currentRaceData.placeKey || "hamamatsu";
    const date = currentRaceData.raceDate;
    const raceNo = currentRaceData.raceNo;

    const url =
        `https://autorace.jp/race_info/RaceResult/${venue}/${date}_${raceNo}`;

    const resultWindow = window.open(url, "_blank");

    if (!resultWindow) {
        console.error("蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧帝幕縺代∪縺帙ｓ縺ｧ縺励◆");
        return;
    }

    console.log("蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧貞挨繧ｿ繝悶〒髢九″縺ｾ縺励◆:", url);
}

// ========================================
// 蜈ｬ蠑冗ｵ先棡 閾ｪ蜍募叙蠕鈴幕蟋・
// ========================================
function startAutomaticResultCheck() {

    if (!currentRaceData) {
        console.error("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ繝・・繧ｿ縺後≠繧翫∪縺帙ｓ");
        return;
    }

    const venue = currentRaceData.placeKey;
    const date = currentRaceData.raceDate;
    const raceNo = currentRaceData.raceNo;

    const url =
        `https://autorace.jp/race_info/RaceResult/${venue}/${date}_${raceNo}`;

    console.log(
        "蜈ｬ蠑冗ｵ先棡縺ｮ閾ｪ蜍募叙蠕励ｒ髢句ｧ・",
        venue,
        date,
        raceNo + "R"
    );

    const resultWindow = window.open(
        url,
        "_blank"
    );

    if (!resultWindow) {
        console.error("蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧帝幕縺代∪縺帙ｓ縺ｧ縺励◆");
        return;
    }

    console.log("蜈ｬ蠑冗ｵ先棡繝壹・繧ｸ繧帝幕縺阪∪縺励◆:", url);
}


async function fetchOfficialRaceResult() {

    try {

        console.log("===== Node.js縺九ｉ蜈ｬ蠑冗ｵ先棡蜿門ｾ・=====");

        const placeCode =
    currentRaceData.raceInfo?.placeCode ||
    currentRaceData.placeCode;

const raceDate =
    currentRaceData.raceDate;

const raceNo =
    currentRaceData.raceNo;

const response = await fetch(
    "http://127.0.0.1:3001/race-result" +
    `?placeCode=${encodeURIComponent(placeCode)}` +
    `&raceDate=${encodeURIComponent(raceDate)}` +
    `&raceNo=${encodeURIComponent(raceNo)}`
);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log("Node.js縺九ｉ蜿嶺ｿ｡:", data);

        if (
            !data.success ||
            !Array.isArray(data.results)
        ) {
            throw new Error("邨先棡繝・・繧ｿ縺御ｸ肴ｭ｣縺ｧ縺・);
        }

        if (data.results.length !== 8) {
            console.error(
                "8霆雁叙蠕励〒縺阪※縺・∪縺帙ｓ:",
                data.results
            );
            return [];
        }

        console.log(
            "笨・8霆翫・蜈ｬ蠑冗ｵ先棡繧貞叙蠕励＠縺ｾ縺励◆"
        );

        return data.results;

    } catch (error) {

        console.error(
            "笶・蜈ｬ蠑冗ｵ先棡蜿門ｾ励お繝ｩ繝ｼ:",
            error
        );

        return [];
    }
}

async function runOfficialResultVerification() {

    console.log("===== AL讀懆ｨｼ 邨先棡蜿門ｾ鈴幕蟋・=====");

    const results = await fetchOfficialRaceResult();

    if (!results || results.length !== 8) {
        console.error(
            "笶・蜈ｬ蠑冗ｵ先棡繧・霆雁叙蠕励〒縺阪∪縺帙ｓ縺ｧ縺励◆"
        );
        return;
    }

   

   const updated =
    await addALVerificationRecord(results);
    console.log(
        "笨・AL讀懆ｨｼ繝・・繧ｿ繧剃ｿ晏ｭ倥＠縺ｾ縺励◆"
    );

    if (typeof displayALVerificationStats === "function") {
        displayALVerificationStats();
    }

    return updated;
}

async function autoVerifyCurrentRace() {

    if (!currentRaceData) {
        console.log("迴ｾ蝨ｨ縺ｮ繝ｬ繝ｼ繧ｹ繝・・繧ｿ縺後≠繧翫∪縺帙ｓ");
        return;
    }

    console.log(
        "===== 閾ｪ蜍柊L讀懆ｨｼ髢句ｧ・=====",
        currentRaceData.venue,
        currentRaceData.raceNo + "R"
    );

    const result = await runOfficialResultVerification();

    if (result && result.length) {
        console.log(
            "笨・閾ｪ蜍柊L讀懆ｨｼ螳御ｺ・",
            currentRaceData.venue,
            currentRaceData.raceNo + "R"
        );
    }
}


async function autoVerifyAllRaces(startRaceNo, endRaceNo) {

    console.log(
        `===== 隍・焚繝ｬ繝ｼ繧ｹAL讀懆ｨｼ髢句ｧ・${startRaceNo}R縲・{endRaceNo}R =====`
    );

    for (
        let raceNo = startRaceNo;
        raceNo <= endRaceNo;
        raceNo++
    ) {

        console.log(`===== ${raceNo}R 蜃ｦ逅・幕蟋・=====`);

        try {

            // 繝ｬ繝ｼ繧ｹ繝・・繧ｿ繧定ｪｭ縺ｿ霎ｼ繧
            await fetchRaceData(raceNo);

            // currentRaceData 縺梧峩譁ｰ縺輔ｌ縺溘％縺ｨ繧堤｢ｺ隱・
            if (!currentRaceData) {
                console.error(`${raceNo}R currentRaceData縺ｪ縺輿);
                continue;
            }

            console.log(
                `投 ${currentRaceData.venue} ${raceNo}R AL險育ｮ鈴幕蟋義
            );

            // 蜈ｬ蠑冗ｵ先棡蜿門ｾ・竊・AL讀懆ｨｼ菫晏ｭ・
            const result =
                await runOfficialResultVerification();

            if (result && result.length) {
                console.log(
                    `笨・${raceNo}R AL讀懆ｨｼ螳御ｺ・
                );
            } else {
                console.error(
                    `笶・${raceNo}R AL讀懆ｨｼ螟ｱ謨輿
                );
            }

        } catch (error) {

            console.error(
                `笶・${raceNo}R 蜃ｦ逅・お繝ｩ繝ｼ:`,
                error
            );

        }

        // 谺｡縺ｮ繝ｬ繝ｼ繧ｹ縺ｸ蟆代＠蠕・▽
        await new Promise(
            resolve => setTimeout(resolve, 1000)
        );
    }

    console.log(
        "===== 隍・焚繝ｬ繝ｼ繧ｹAL讀懆ｨｼ邨ゆｺ・====="
    );
}


showCurrentRace();


