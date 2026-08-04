const race = {
    venue:"川口オート",
    raceNo:"12R",
    date:"2026-07-23",
    title:"優勝戦",
    weather:"晴",
    track:"良",
    trackTemp:"45℃",
    cars:8,
    deadline:"16:35",
    startDate:"7/21",
    endDate:"7/23",
    day:"最終日"
};


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


const players = {

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

let abilityRankMode = false;


let developmentRankMode = false;


let expectationRankMode = false;


let handicapMode = false;


let stMode = false;


let tempMode = false;

function calcAbilityScore(player){

    // 試走＋偏差＝予想競走タイム
    const raceTime =
    Number(player.time) + Number(player.diff) / 1000;


    // 予想競走タイム評価
    // 速いほど高得点

    let timeScore =
    100 - ((raceTime - 3.300) * 300);


    // 良走路3連対率評価

   let rate =
Number(player.tripleRate.replace("%",""));


// 3連対率補正
let rateScore =
70 + (rate - 70) * 0.5;


    // 能力スコア
    let abilityScore =
    (timeScore * 0.7) +
    (rateScore * 0.3);


    return Math.round(abilityScore);

}

function calcDevelopmentScore(player){

// 試走＋偏差＝予想競走タイム
const raceTime =
Number(player.time) + Number(player.diff) / 1000;

// 予想競走タイム評価
let timeScore =
100 - ((raceTime - 3.300) * 300);

// 良走路3連対率評価
let rate =
Number(player.tripleRate.replace("%",""));

// 3連対率補正
let rateScore =
70 + (rate - 70) * 0.5;

// 能力スコア
let abilityScore =
(timeScore * 0.7) +
(rateScore * 0.3);

// 展開補正
let deployBuff = calcDeployBuff(player) * 2;
let stBuff = calcSTBuff(player) * 2;
let tempBuff = calcTemperatureBuff(player) * 2;

let developmentScore =
abilityScore *
(1 + deployBuff / 100) *
(1 + stBuff / 100) *
(1 + tempBuff / 100);

return Math.round(developmentScore);

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
"能力",
abilityScore,
"ハンデ",
deployBuff,
"ST",
stBuff,
"温度",
tempBuff,
"最終",
finalScore
);

    document.getElementById("playerName").innerHTML = "👤 " + name;

    document.getElementById("playerCar").innerHTML = player.car;

    document.getElementById("playerHandicap").innerHTML = player.handicap;

    document.getElementById("playerEvaluation").innerHTML = player.evaluation;

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
`${race.result} ${race.time}`
).join(" / ")
:
"データなし";

document.getElementById("playerRecent").innerHTML =
player.recentRaces
?
player.recentRaces.map(race =>
`${race.date} ${race.result} ${race.time} ST${race.st}`
).join("<br>")
:
"データなし";

    document.getElementById("playerModal").style.display="block";

}


function closePlayer(){

    document.getElementById("playerModal").style.display="none";

}

function createRaceTable(){

const table = document.getElementById("raceTable");

table.innerHTML = "";

for (let name in players) {

const player = players[name];

table.innerHTML += `
<tr onclick="openPlayer('${name}')">

<td class="car car${player.car}">
    ${player.car}
</td>

<td>
<strong>${name}</strong><br>
${player.place} ${player.rank}
</td>

<td>
    ${player.handicap}
</td>

<td class="trial-time">${Number(player.time).toFixed(2)}</td>

<td>+${player.diff}</td>

<td>${player.st}</td>
<td class="triple-rate">${player.tripleRate}</td>

<td>
${player.recentRaces.map(r => r.result).join(" ")}
</td>

</tr>
`;

}

}




function calcDeployBuff(player){

let buff = 0;

// ハンデ位置補正（能力重視なので弱め）

if(player.handicap === "0m"){
buff = 0;
}
else if(player.handicap === "10m"){
buff = -1;
}
else if(player.handicap === "20m"){
buff = -2;
}
else if(player.handicap === "30m"){
buff = -3;
}

return buff;

}

function calcDevelopmentHandicapBuff(player){

    if(player.handicap === "0m"){
        return 0;
    }
    else if(player.handicap === "10m"){
        return -2;
    }
    else if(player.handicap === "20m"){
        return -4;
    }
    else if(player.handicap === "30m"){
        return -6;
    }

    return 0;

}




function calcTemperatureBuff(player){

let temp = Number(race.trackTemp.replace("℃",""));

let buff = 0;


// 高温45℃以上
// 軽ハンデ有利、重ハンデ不利

if(temp >= 45){

    if(player.handicap === "0m"){
        buff = 2;
    }
    else if(player.handicap === "10m"){
        buff = 1;
    }
    else if(player.handicap === "20m"){
        buff = -1;
    }
    else if(player.handicap === "30m"){
        buff = -2;
    }

}


// 低温10℃以下
// 軽ハンデ不利、重ハンデ有利

else if(temp <= 10){

    if(player.handicap === "0m"){
        buff = -2;
    }
    else if(player.handicap === "10m"){
        buff = -1;
    }
    else if(player.handicap === "20m"){
        buff = 1;
    }
    else if(player.handicap === "30m"){
        buff = 2;
    }

}


return buff;

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
                ${player.tripleRate}
            </td>

            <td>
    ${
    handicapMode
    ? (calcDeployBuff(player) > 0
        ? `<span class="buff-plus">+${calcDeployBuff(player)}%</span>`
        : calcDeployBuff(player) < 0
            ? `<span class="buff-minus">${calcDeployBuff(player)}%</span>`
            : "0%")
    : player.handicap
}
</td>

           <td>
${
stMode
? (calcAbilitySTBuff(player) > 0
    ? `<span class="buff-plus">+${calcAbilitySTBuff(player)}%</span>`
    : calcAbilitySTBuff(player) < 0
        ? `<span class="buff-minus">${calcAbilitySTBuff(player)}%</span>`
        : "0%")
: player.st
}
<td>
${
tempMode
? (calcAbilityTemperatureBuff(player) > 0
    ? `<span class="buff-plus">+${calcAbilityTemperatureBuff(player)}%</span>`
    : calcAbilityTemperatureBuff(player) < 0
        ? `<span class="buff-minus">${calcAbilityTemperatureBuff(player)}%</span>`
        : "0%")
: `${race.track} ${race.trackTemp}`
}
</td>
<td class="score">
    ${score}

</td>
        </tr>
        `;
    }

    }


function createDevelopmentTable(){

    const table = document.getElementById("developmentTable");
    table.innerHTML = "";

    let playerList = Object.entries(players);

    if(developmentRankMode){
    playerList.sort((a,b)=>{
        return calcDevelopmentScore(b[1]) - calcDevelopmentScore(a[1]);
    });
}

    for(const [name, player] of playerList){

        const predictedTime =
        (Number(player.time) + Number(player.diff)/1000).toFixed(3);

        const score = calcDevelopmentScore(player);

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
                ${player.tripleRate}
            </td>
<td>
            ${
handicapMode
? (calcDevelopmentDeployBuff(player) > 0
? `<span class="buff-plus">+${calcDevelopmentDeployBuff(player)}%</span>`
: calcDevelopmentDeployBuff(player) < 0
? `<span class="buff-minus">${calcDevelopmentDeployBuff(player)}%</span>`
: "0%")
: player.handicap
}
</td>

           <td>
${
stMode
? (calcDevelopmentSTBuff(player) > 0
    ? `<span class="buff-plus">+${calcDevelopmentSTBuff(player)}%</span>`
    : calcDevelopmentSTBuff(player) < 0
        ? `<span class="buff-minus">${calcDevelopmentSTBuff(player)}%</span>`
        : "0%")
: player.st
}
</td>
            <td>
${
tempMode
? (calcDevelopmentTemperatureBuff(player) > 0
    ? `<span class="buff-plus">+${calcDevelopmentTemperatureBuff(player)}%</span>`
    : calcDevelopmentTemperatureBuff(player) < 0
        ? `<span class="buff-minus">${calcDevelopmentTemperatureBuff(player)}%</span>`
        : "0%")
: `${race.track} ${race.trackTemp}`
}
</td>
            <td class="score">
    ${score}

</td>

        </tr>
        `;
    }
}

function calcExpectationScore(player){

const abilityScore = calcAbilityScore(player);
const developmentScore = calcDevelopmentScore(player);

return (abilityScore + developmentScore) / 2;

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

function calcAbilitySTBuff(player){

    return calcSTBuff(player);

}

function calcDevelopmentSTBuff(player){

    return calcSTBuff(player) * 2;

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
createAbilityTable();

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






document.getElementById("raceTitle").textContent =
race.venue + " " + race.raceNo;


/*
document.getElementById("mainRaceVenue").innerHTML = race.venue;

document.getElementById("mainRaceNo").innerHTML = race.raceNo;

document.getElementById("mainRaceTitle").innerHTML = race.title;

document.getElementById("mainRaceDate").innerHTML = race.date;

document.getElementById("mainRaceWeather").innerHTML = race.weather;

document.getElementById("mainRaceTrack").innerHTML = race.track;

document.getElementById("mainRaceCars").innerHTML = race.cars;
*/
function changeTab(tabId) {

    // 全部隠す
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.style.display = "none";
    });

    // ボタンの色をリセット
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // 選んだタブを表示
    document.getElementById(tabId).style.display = "block";

    // 押したボタンを青色に
    event.currentTarget.classList.add("active");

    const params = new URLSearchParams(window.location.search);

const raceNumber = params.get("race");

if (raceNumber) {
    document.getElementById("raceTitle").textContent =
    "川口オート " + raceNumber + "R";
}
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

console.log("表示設定:", page.style.display);

// ボタン状態変更
document.querySelectorAll(".al-tab-btn").forEach(btn=>{
    btn.classList.remove("active");
});

button.classList.add("active");

}

createRaceTable();
createAbilityTable();
createDevelopmentTable();
createExpectationTable();


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

async function fetchRaceData() {

    const html = await fetch("hamamatsu12.html")
        .then(r => r.text());

    const doc = new DOMParser().parseFromString(html, "text/html");

    const rows = doc.querySelector(".liveTable tbody").querySelectorAll("tr");

    const players = {};

    rows.forEach(row => {

        const tds = row.querySelectorAll("td");

        console.log(tds[6].innerText)

const recentText = tds[6].innerText;

const name = tds[1].innerText.trim().split("\n")[0];

       const rateText = tds[5].innerText;

const tripleRate =
rateText.match(/3連率\s*(\d+\.\d+)/)?.[1] + "%";


const timeNumbers = recentText.match(/\d+\.\d+/g);

let trialTime = "";

if (timeNumbers) {
    trialTime = timeNumbers[0];
    
    if (timeNumbers.length >= 2) {
        trialTime = timeNumbers[timeNumbers.length - 2];
    }
}
const stMatch = recentText.match(/ST\s(\d+\.\d+)/);

players[name] = {
    car: Number(tds[0].innerText),
    handicap: tds[2].innerText + "m",
    diff: tds[4].innerText,
    tripleRate: tripleRate,
    time: trialTime,
    st: stMatch ? stMatch[1] : ""
};

    });

    return players;
}

fetchRaceData().then(players => {
    console.log(players);
});
 