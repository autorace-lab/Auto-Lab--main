const race = {
    venue:"川口オート",
    raceNo:"12R",
    date:"2026-07-23",
    title:"優勝戦",
    weather:"晴",
    track:"良",
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
handicap:"0m",
rank:"S-1",
time:"3.29",
st:"0.08",
diff:"+0.08",
raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
evaluation:"◎"
},

"鈴木 圭一郎": {
    car:2,
    handicap:"0m",
    rank: "S-2",
    time: "3.28",
    st: "0.07",
    diff: "+0.05",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
    
},

"永井 大介": {
    car:3,
    handicap:"10m",
    rank: "S-10",
    time: "3.34",
    st: "0.11",
    diff: "+0.01",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
},

"佐藤 摩弥": {
    car:4,
    handicap:"10m",
    rank: "S-11",
    time: "3.36",
    st: "0.10",
    diff: "-0.07",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
},

"高橋 貢": {
    car:5,
    handicap:"20m",
    rank: "S-17",
    time: "3.33",
    st: "0.12",
    diff: "+0.10",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
},

"早川 清太郎": {
    car:6,
    handicap:"20m",
    rank: "S-20",
    time: "3.35",
    st: "0.13",
    diff: "+0.00",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
},

"有吉 辰也": {
    car:7,
    handicap:"30m",
    rank: "S-7",
    time: "3.37",
    st: "0.14",
    diff: "-0.11",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
},

"木村 武之": {
    car:8,
    handicap:"30m",
    rank: "S-30",
    time: "3.30",
    st: "0.07",
    diff: "+0.15",
    raceResults:"初日 1着 3.541 / 2日目 2着 3.548",
    evaluation:"◎"
}

};

function openPlayer(name){

    const player = players[name];

    document.getElementById("playerName").innerHTML = "👤 " + name;

    document.getElementById("playerCar").innerHTML = player.car;

    document.getElementById("playerHandicap").innerHTML = player.handicap;

    document.getElementById("playerEvaluation").innerHTML = player.evaluation;

    document.getElementById("playerRank").innerHTML = player.rank;

    document.getElementById("playerTime").innerHTML = player.time;

    document.getElementById("playerST").innerHTML = player.st;

    document.getElementById("playerDiff").innerHTML = player.diff;

    document.getElementById("playerResults").innerHTML =
player.raceResults;

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
                    ${name}
                </a>
            </td>

            <td>${player.handicap}</td>

            <td>${player.time}</td>

            <td>${player.diff}</td>

            <td>${player.st}</td>

            <td>${player.raceResults}</td>

            <td>${player.evaluation}</td>

        </tr>
        `;
    }

}

createRaceTable();

document.getElementById("raceTitle").textContent =
race.venue + " " + race.raceNo;

document.getElementById("raceVenue").innerHTML = race.venue;

document.getElementById("raceNo").innerHTML = race.raceNo;

document.getElementById("raceDate").innerHTML = race.date;

document.getElementById("raceWeather").innerHTML = race.weather;

document.getElementById("raceTrack").innerHTML = race.track;

document.getElementById("mainRaceVenue").innerHTML = race.venue;

document.getElementById("mainRaceNo").innerHTML = race.raceNo;

document.getElementById("mainRaceTitle").innerHTML = race.title;

document.getElementById("mainRaceDate").innerHTML = race.date;

document.getElementById("mainRaceWeather").innerHTML = race.weather;

document.getElementById("mainRaceTrack").innerHTML = race.track;

document.getElementById("mainRaceCars").innerHTML = race.cars;

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
    event.target.classList.add("active");

    const params = new URLSearchParams(window.location.search);

const raceNumber = params.get("race");

if (raceNumber) {
    document.getElementById("raceTitle").textContent =
    "川口オート " + raceNumber + "R";
}
}

const table = document.getElementById("playerTable");

players.forEach(player => {

    

});