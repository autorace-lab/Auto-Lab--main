/*
 * Auto-Lab 共通AL計算エンジン
 *
 * 本番予想・AL検証で同じ計算ロジックを使用する。
 * 入力データだけが本番／過去検証で異なる。
 */

// ========================================
// 直近10走スコア
// ========================================

function calcRecent10Score(player) {

    const races =
        player.recentRaces || [];

    const validRaces =
        races.filter(race => {

            const order =
                Number(race.order);

            return order >= 1 && order <= 8;

        });

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

    const scores =
        validRaces.map(race =>
            scoreMap[Number(race.order)]
        );

    if (scores.length === 0) {

        return {

            score: 0,
            evaluation: "データなし",
            firstHalf: 0,
            secondHalf: 0,
            validCount: 0

        };

    }

    const average =
        scores.reduce(
            (sum, score) => sum + score,
            0
        ) / scores.length;

    const score =
        average * 10;

    const firstHalfScores =
        scores.slice(0, 5);

    const secondHalfScores =
        scores.slice(5, 10);

    const firstHalf =
        firstHalfScores.length > 0
            ? firstHalfScores.reduce(
                (sum, score) => sum + score,
                0
              ) / firstHalfScores.length
            : 0;

    const secondHalf =
        secondHalfScores.length > 0
            ? secondHalfScores.reduce(
                (sum, score) => sum + score,
                0
              ) / secondHalfScores.length
            : 0;

    let evaluation = "安定→";

    if (firstHalf > secondHalf) {

        evaluation = "上昇⤴︎";

    }
    else if (firstHalf < secondHalf) {

        evaluation = "下降⤵︎";

    }

    return {

        score: Math.round(score),
        evaluation,
        firstHalf,
        secondHalf,
        validCount: scores.length

    };

}


// ========================================
// 良走路3連対率スコア
// ========================================

function calcGoodTrack3RateScore(player) {

    const rate =
        Number(player.goodTrack3Rate || 0);

    return (
        70 +
        (rate - 70) * 0.5
    );

}


// ========================================
// 湿走路3連対率スコア
// ========================================

function calcWetTrack3RateScore(player) {

    const rate =
        Number(player.wetTrack3Rate || 0);

    return (
        70 +
        (rate - 70) * 0.5
    );

}


// ========================================
// 走路別タイムスコア
// players / track / situationCode は
// 本番・検証それぞれから渡す
// ========================================

function calcRaceTimeScore(
    player,
    players,
    track,
    situationCode = 5
) {

    const raceTime =
        (track === "湿" || track === "斑")
            ? Number(player.time)
            : Number(player.time) +
              Number(player.diff) / 1000;

    // ------------------------------------
    // 湿・斑
    // ------------------------------------

    if (
        track === "湿" ||
        track === "斑"
    ) {

        const raceTimes =
            Object.values(players)
                .map(p =>
                    Number(p.time)
                )
                .filter(v =>
                    Number.isFinite(v) &&
                    v > 0
                );

        if (raceTimes.length === 0) {

            return 0;

        }

        const averageTime =
            raceTimes.reduce(
                (a, b) => a + b,
                0
            ) / raceTimes.length;

        const score =
            70 +
            (averageTime - raceTime) * 200;

        return Math.round(score);

    }

    // ------------------------------------
    // 良
    // ------------------------------------

    if (raceTime <= 3.30) {

        return 100;

    }

    if (raceTime <= 3.40) {

        return Math.round(
            100 -
            (raceTime - 3.30) * 100
        );

    }

    if (raceTime <= 3.60) {

        return Math.round(
            90 -
            (raceTime - 3.40) * 300
        );

    }

    if (raceTime <= 3.90) {

        return Math.round(
            30 -
            (raceTime - 3.60) * 100
        );

    }

    return 0;

}


// ========================================
// 共通 基本能力スコア
//
// 良:
// タイム 60%
// 実戦 40%
//   ├ 良3連対率 60%
//   └ 直近10走 40%
//
// 湿:
// タイム 70%
// 湿3連対率 30%
//
// 斑:
// タイム 100%
// ========================================

function calcBaseAbilityScore(
    player,
    players,
    track,
    situationCode = 5
) {

    const timeScore =
        calcRaceTimeScore(
            player,
            players,
            track,
            situationCode
        );

    let abilityScore;

    if (track === "良") {

        const goodTrack3RateScore =
            calcGoodTrack3RateScore(
                player
            );

        const recent10 =
            calcRecent10Score(player);

        const practicalScore =
            (goodTrack3RateScore * 0.6) +
            (recent10.score * 0.4);

        abilityScore =
            (timeScore * 0.6) +
            (practicalScore * 0.4);

    }
    else if (track === "湿") {

        const wetTrack3RateScore =
            calcWetTrack3RateScore(
                player
            );

        abilityScore =
            (timeScore * 0.7) +
            (wetTrack3RateScore * 0.3);

    }
    else if (track === "斑") {

        abilityScore =
            timeScore;

    }
    else {

        abilityScore =
            timeScore;

    }

    return Math.round(abilityScore);

}


// ========================================
// Start / Solo / Catch-up 補正
// ========================================

function getStartPowerClass(rank) {

    const rankText =
        String(rank || "").toUpperCase();

    if (rankText.startsWith("S-")) {
        return "S級";
    }

    if (rankText.startsWith("A-")) {
        return "A級";
    }

    if (rankText.startsWith("B-")) {
        return "B級";
    }

    return "";
}


function isOpenHandicapRace(players) {

    const racePlayers =
        Object.values(players);

    if (racePlayers.length === 0) {
        return "";
    }

    const handicaps =
        racePlayers.map(
            p => p.handicap
        );

    if (
        handicaps.every(
            h => h === "0m"
        )
    ) {
        return "0m";
    }

    if (
        handicaps.every(
            h => h === "10m"
        )
    ) {
        return "10m";
    }

    return "";
}


function calcStartPowerBuff(
    player,
    players
) {

    const rankClass =
        getStartPowerClass(
            player.rank
        );

    const star =
        Number(player.sPower);

    if (
        !rankClass ||
        star < 1 ||
        star > 5
    ) {
        return 0;
    }

    const rankBuff = {
        "B級": {
            1: -1,
            2: 0,
            3: 1,
            4: 2,
            5: 3
        },
        "A級": {
            1: -2,
            2: -1,
            3: 0,
            4: 1,
            5: 2
        },
        "S級": {
            1: -3,
            2: -2,
            3: -1,
            4: 0,
            5: 1
        }
    };

    const basicBuff =
        rankBuff[rankClass]?.[star] ?? 0;

    const group =
        Object.values(players).filter(
            p =>
                p.handicap ===
                    player.handicap &&
                Number(p.sPower) >= 1 &&
                Number(p.sPower) <= 5
        );

    if (group.length <= 1) {
        return basicBuff;
    }

    const sameHandicapBuff = {
        1: -2,
        2: -1,
        3: 0,
        4: 1,
        5: 2
    }[star] ?? 0;

    return (
        basicBuff +
        sameHandicapBuff
    );
}


function calcSoloPowerBuff(
    player,
    players
) {

    const openHandicap =
        isOpenHandicapRace(
            players
        );

    if (
        openHandicap === "0m" ||
        openHandicap === "10m"
    ) {
        return null;
    }

    const handicap =
        parseInt(
            String(
                player.handicap || "0"
            ).replace("m", ""),
            10
        );

    if (
        handicap !== 0 &&
        handicap !== 10
    ) {
        return null;
    }

    const rankClass =
        getStartPowerClass(
            player.rank
        );

    if (!rankClass) {
        return 0;
    }

    const star =
        Number(player.soloPower);

    if (
        star < 1 ||
        star > 5
    ) {
        return 0;
    }

    const rankBuff = {
        "B級": {
            1: -1,
            2: 0,
            3: 1,
            4: 2,
            5: 3
        },
        "A級": {
            1: -2,
            2: -1,
            3: 0,
            4: 1,
            5: 2
        },
        "S級": {
            1: -3,
            2: -2,
            3: -1,
            4: 0,
            5: 1
        }
    };

    return (
        rankBuff[rankClass]?.[star] ??
        0
    );
}


function calcCatchUpPowerBuff(
    player,
    players
) {

    const openHandicap =
        isOpenHandicapRace(
            players
        );

    if (
        openHandicap === "0m" ||
        openHandicap === "10m"
    ) {
        return null;
    }

    const handicap =
        parseInt(
            String(
                player.handicap || "0"
            ).replace("m", ""),
            10
        );

    if (
        Number.isNaN(handicap) ||
        handicap < 20
    ) {
        return null;
    }

    const rankClass =
        getStartPowerClass(
            player.rank
        );

    if (!rankClass) {
        return 0;
    }

    const star =
        Number(player.catchUpPower);

    if (
        star < 1 ||
        star > 5
    ) {
        return 0;
    }

    const rankBuff = {
        "B級": {
            1: -1,
            2: 0,
            3: 1,
            4: 2,
            5: 3
        },
        "A級": {
            1: -2,
            2: -1,
            3: 0,
            4: 1,
            5: 2
        },
        "S級": {
            1: -3,
            2: -2,
            3: -1,
            4: 0,
            5: 1
        }
    };

    return (
        rankBuff[rankClass]?.[star] ??
        0
    );
}


// ========================================
// 共通AL計算エンジンの公開関数
// ========================================

if (typeof module !== "undefined") {

    module.exports = {

        calcRecent10Score,
        calcGoodTrack3RateScore,
        calcWetTrack3RateScore,
        calcRaceTimeScore,
        calcBaseAbilityScore,
        calcStartPowerBuff,
        calcSoloPowerBuff,
        calcCatchUpPowerBuff

    };

}
