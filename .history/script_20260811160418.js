


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
let currentRace = 1;


function changeRace(raceNo){

currentRace = raceNo;

document.querySelectorAll(".race-tab-btn")
.forEach((btn,index)=>{
    btn.classList.toggle("active", index === raceNo - 1);
});
console.log("現在のレース:", currentRace);


fetchRaceData(currentRace).then(data => {

players = data.players;

race.venue = data.raceInfo.venue;
race.raceNo = data.raceInfo.raceNo;
race.trackTemp = data.raceInfo.trackTemp;
race.track = data.raceInfo.track;

race.weather = "晴";
race.deadline = "15:30";
race.startDate = "08/01";
race.endDate = "08/03";
race.day = "初日";

race.cars = Object.keys(players).length;


document.getElementById("raceTitle").textContent =
race.venue + " " + race.raceNo;

document.getElementById("track").textContent =
"走路 " + race.track;

document.getElementById("cars").textContent =
"車数 " + race.cars + "車";


createRaceTable();
createRecentTable();
createAbilityTable();
createDevelopmentTable();
createCustomDevelopmentTable();
createCustomExpectationTable();
createExpectationTable();
createCustomAbilityTable();

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

let customHandicapMode = false;
let customSTMode = false;
let customTempMode = false;
let customHandicapAngleMode = false;
let customStartMode = 0;
let customWetMode = 2;
let customMixedMode = 2;

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
Number((player.tripleRate || "0").replace("%",""));


// 3連対率補正
let rateScore =
70 + (rate - 70) * 0.5;


    // 能力スコア
let abilityScore =
(timeScore * 0.7) +
(rateScore * 0.3);

// スタート力補正
const startBuff =
    customStartMode === 2
    ? 0
    : calcCustomStartBuff(player);

// 湿補正
const wetBuff =
    customWetMode === 2
    ? 0
    : calcWetBuff(player);

// 斑補正
const mixedBuff =
    customMixedMode === 2
    ? 0
    : calcMixedBuff(player);

abilityScore =
    abilityScore
    * (1 + startBuff / 100)
    * (1 + wetBuff / 100)
    * (1 + mixedBuff / 100);

return Math.round(abilityScore);
}

function calcDevelopmentScore(player){

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

let timeScore =
100 - ((raceTime - 3.300) * 300);

let rate =
Number((player.tripleRate || "0").replace("%",""));

let rateScore =
70 + (rate - 70) * 0.5;

let abilityScore =
(timeScore * 0.7) +
(rateScore * 0.3);


// 展開補正
let deployBuff = calcDevelopmentDeployBuff(player);
let angleBuff = calcHandicapAngleBuff(player) * 2;
let stBuff = calcDevelopmentSTBuff(player);
let tempBuff = calcDevelopmentTemperatureBuff(player);
let wetBuff =
    customWetMode === 2
    ? 0
    : calcWetBuff(player) * 2;
let mixedBuff =
    customMixedMode === 2
    ? 0
    : calcMixedBuff(player) * 2;


let developmentScore =
abilityScore *
(1 + (deployBuff + angleBuff) / 100) *
(1 + stBuff / 100) *
(1 + tempBuff / 100) *
(1 + wetBuff / 100) *
(1 + mixedBuff / 100);

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
        ${races[i].venue || ""}<br>
        ${races[i].result}<br>
        ${races[i].time}<br>
        ST ${races[i].st}
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

let temp = Number(
(race.trackTemp || "0℃").replace("℃","")
);

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
            ${player.tripleRate}
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
player.handicap + "ライン"
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

        <td class="score">
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

        <td>
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

        <td>
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

        <td>
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

        <td>
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

        <td class="score">
            ${score}
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
        return calcDevelopmentScore(b[1]) - calcDevelopmentScore(a[1]);
    });
}

for(const [name, player] of playerList){

    const predictedTime =
        (Number(player.time) + Number(player.diff) / 1000).toFixed(3);

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
        player.handicap + "ライン"
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
        <td class="score">
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
player.handicap + "ライン"
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

        <td class="score">
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

function calcCustomStartBuff(player){

    // スタート力が未入力なら補正なし
    if(!player.customStart){
        return 0;
    }

    // 同じハンデで、スタート力が入力されている選手だけ
    const group = Object.values(players).filter(p =>
        p.handicap === player.handicap &&
        p.customStart
    );

    // 比較対象が1人以下なら補正なし
    if(group.length <= 1){
        return 0;
    }

    // 同ハンデのスタート力平均
    const avgStart =
        group.reduce(
            (sum,p) => sum + Number(p.customStart),
            0
        ) / group.length;

    // 平均との差
    const diff =
        Number(player.customStart) - avgStart;

    let buff = 0;

    // 平均より高いほどプラス
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

    // まだ数字が入力されていない選手は補正なし
    if(isNaN(value)) return 0;

    const average =
        values.reduce((a,b) => a + b, 0) / values.length;

    return Math.round((value - average) * 2);
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
function changeTab(tabId) {

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
    event.currentTarget.classList.add("active");

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

function toggleCustomHandicap(){

    console.log("玄人ハンデクリック");

    customHandicapMode = !customHandicapMode;

    const headers =
        document.querySelectorAll(".custom-handicap-header");

    console.log("玄人ハンデヘッダー数:", headers.length);

    headers.forEach(header => {

        header.textContent =
            customHandicapMode
            ? "ハンデ補正 ▲"
            : "ハンデ ▼";

        console.log("変更後ヘッダー:", header.textContent);

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}
function toggleCustomHandicapAngle(){

    customHandicapAngleMode = !customHandicapAngleMode;

    const headers =
    document.querySelectorAll(".custom-handicap-angle-header");

    headers.forEach(header => {

        if(customHandicapAngleMode){
            header.textContent = "ハンデ角度補正 ▲";
        }else{
            header.textContent = "ハンデ角度 ▼";
        }

    });

    createCustomAbilityTable();
    createCustomDevelopmentTable();

}

function toggleCustomST(){

    customSTMode = !customSTMode;

    const headers =
    document.querySelectorAll(".custom-st-header");

    headers.forEach(header => {

        if(customSTMode){
            header.textContent = "平均ST補正 ▲";
        }else{
            header.textContent = "平均ST ▼";
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

function toggleCustomTemperature(){

    customTempMode = !customTempMode;

    const headers =
    document.querySelectorAll(".custom-temp-header");

    headers.forEach(header => {

        if(customTempMode){
            header.textContent = "走路温度補正 ▲";
        }else{
            header.textContent = "走路温度 ▼";
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

const html = await fetch(`hamamatsu${raceNo}_new.html`)
.then(r => r.text());

    const doc = new DOMParser().parseFromString(html, "text/html");

    const recentHtml = await fetch(`hamamatsu${raceNo}_recent.html`)
.then(r => r.text());

const recentDoc = new DOMParser().parseFromString(recentHtml, "text/html");

const recentRows =
recentDoc.querySelectorAll("table")[5].querySelectorAll("tr");

    const infoTables = doc.querySelectorAll(".race-infoTable");

console.log("テーブル数", infoTables.length);

let raceInfo = {};

if(infoTables.length >= 2){

    const infoTds = infoTables[1].querySelectorAll("tbody td");

    raceInfo = {
    venue: "浜松オート",
    raceNo:`${raceNo}R`,
    temperature: infoTds[0].innerText,
    humidity: infoTds[1].innerText,
    trackTemp: infoTds[2].innerText,
    track: infoTds[3].innerText
};

    console.log("走路情報", raceInfo);
}

    const rows = doc.querySelector(".liveTable tbody").querySelectorAll("tr");

    const players = {};

    rows.forEach((row, index) => {

const recentRow = recentRows[index + 1];

let recentData = "";

if(recentRow){
    recentData = recentRow.innerText.trim();
}

console.log("近10走データ");
console.log(recentData);


const tds = row.querySelectorAll("td");


         console.log(tds[1].outerHTML);
        console.log(tds[6].innerText)

const recentText = tds[6].innerText;

const recentRaces = [];

const recentLines = recentData
.split("\n")
.map(x => x.trim())
.filter(x => x);

recentLines.splice(0,3);


for(let i = 0; i < recentLines.length; i++){

    if(recentLines[i].match(/\d{2}\/\d{2}/)){

        recentRaces.push({

            date: recentLines[i] || "",

            result: recentLines[i + 1] || "",

            time:
            recentLines[i + 2] && 
            recentLines[i + 2].match(/\d+\.\d+/)
            ? recentLines[i + 2]
            : "",

            st:
            recentLines[i + 4]
            ? recentLines[i + 4].replace("ST ","")
            : ""

        });

    }

}
const lines = tds[1].innerText
.split("\n")
.map(x => x.trim())
.filter(x => x);

console.log("lines:", lines);

const rawName = lines[0] || "";

console.log("rawName:", rawName);


/*
選手名と競走車名を分離
例:
小林　頼介ホクサイ５
↓
小林　頼介
*/

let name = rawName;

const carIndex = rawName.search(/[ァ-ンーＡ-ＺA-ZＤＳＲ・]/);

if(carIndex !== -1){
    name = rawName.substring(0, carIndex);
}

name = name.trim();

console.log("選手名:", name);



const infoLines = lines;

const place = infoLines[1]
? infoLines[1].split(" ")[0]
: "";

const rank = infoLines[2]
? infoLines[2].split(" ").pop()
: "";

console.log("場所:", place);
console.log("ランク:", rank);

console.log("td数", tds.length);
console.log("5番目", tds[5]?.innerText);
       const rateText = tds[5].innerText;

console.log("率データ", rateText);

const rateMatch = rateText.match(/3連率\s*(\d+\.\d+)/);

const tripleRate = rateMatch
    ? rateMatch[1] + "%"
    : "0%";

const trialTime = tds[3].innerText.trim();
const stMatch = recentText.match(/ST\s(\d+\.\d+)/);

players[name] = {
car: Number(tds[0].innerText),
place: place,
rank: rank,
handicap: tds[2].innerText + "m",
diff: tds[4].innerText,
tripleRate: tripleRate,
time: trialTime,
st: stMatch ? stMatch[1] : "",
recentRaces: recentRaces
};

console.log(name, tripleRate);

    });

   return {
    players: players,
    raceInfo: raceInfo
};
}

window.addEventListener("DOMContentLoaded", () => {
    changeRace(1);
});

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

