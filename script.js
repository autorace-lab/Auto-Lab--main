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
    tripleRate:"90.0%",
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
    tripleRate:"90.0%",
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
    tripleRate:"90.0%",
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
    tripleRate:"90.0%",
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
    tripleRate:"90.0%",
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
    tripleRate:"90.0%",
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
    tripleRate:"90.0%",
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

function calcAbilityScore(player){

    // 予想競走タイム
    const raceTime = Number(player.time) + Number(player.diff) / 1000;


    // 予想競走タイム評価（仮）
    let timeScore = 60;

    if(raceTime <= 3.35){
        timeScore = 60;
    }else if(raceTime <= 3.40){
        timeScore = 58;
    }else if(raceTime <= 3.45){
        timeScore = 55;
    }else{
        timeScore = 52;
    }


    // ハンデ評価
    let handicapScore = 10;

    if(player.handicap === "10m"){
        handicapScore = 9;
    }
    else if(player.handicap === "20m"){
        handicapScore = 8;
    }
    else if(player.handicap === "30m"){
        handicapScore = 7;
    }


    // ST評価
    let stScore = 10;

    if(Number(player.st) >= 0.12){
        stScore = 8;
    }


    // 良走路3連対率
    let trackScore = 10;


    // 走路温度適性（今回は仮）
    let tempScore = 10;


    return timeScore + handicapScore + stScore + trackScore + tempScore;

}



function openPlayer(name){

   const player = players[name];

const predictedTime =
(Number(player.time) + Number(player.diff)/1000).toFixed(3);

const score = calcAbilityScore(player);

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
    <a href="#" onclick="openPlayer('${name}')">
        <strong>${name}</strong>
    </a>
    <br>
    <span>${player.place} ${player.rank}</span>
    </td>
</td>

            <td>${player.handicap}</td>

            <td>${Number(player.time).toFixed(2)}</td>

            <td>+${(Number(player.diff)/1000).toFixed(3)}</td>

            <td>${player.st}</td>

            <td>${player.tripleRate}</td>

            <td>
${player.recentRaces.map(r => r.result).join(" ")}
</td>






        </tr>
        `;
    }

}

createRaceTable();


function createAbilityTable(){

const table = document.getElementById("abilityTable");

table.innerHTML = "";


for(let name in players){

    console.log(name);

    const player = players[name];

const predictedTime =
(Number(player.time) + Number(player.diff)/1000).toFixed(3);

const score = calcAbilityScore(player);

    table.innerHTML += `

    <tr>

        <td>${player.car}</td>

        <td>${name}</td>

        <td>${Number(player.time).toFixed(2)}</td>

        <td>+${(Number(player.diff)/1000).toFixed(3)}</td>

        <td>${predictedTime}</td>

        <td>${player.handicap}</td>

        <td>${player.st}</td>

        <td>${race.track}/${race.trackTemp}</td>

        <td>${score}</td>

    </tr>

    `;

}

}




createAbilityTable();

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



function changeALTab(tab){

const page = document.getElementById(tab);
const button = event.currentTarget;


// すでに表示中なら閉じる
if(page.style.display === "block"){

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


// ボタン状態変更
document.querySelectorAll(".al-tab-btn").forEach(btn=>{
    btn.classList.remove("active");
});

button.classList.add("active");

}