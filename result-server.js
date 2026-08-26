const http = require("http");
const https = require("https");

const PORT = 3001;

function getRaceResult(placeCode, raceDate, raceNo) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            placeCode: Number(placeCode),
            raceDate,
            raceNo: Number(raceNo)
        });

        const options = {
            hostname: "autorace.jp",
            path: "/race_info/RaceResult",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(data),
                "User-Agent": "Mozilla/5.0"
            }
        };

        const req = https.request(options, res => {
            let body = "";

            res.on("data", chunk => {
                body += chunk;
            });

            res.on("end", () => {
                try {
                    const json = JSON.parse(body);
                    const raceResult = json?.body?.raceResult;

                    console.log("raceResult:", JSON.stringify(raceResult, null, 2));

                    if (!Array.isArray(raceResult)) {
                        reject(new Error("raceResultが取得できません"));
                        return;
                    }

                    const results = raceResult.map(r => ({
                        finish: r.order <= 8 ? r.order : null,
                        car: Number(r.carNo),
                        status:
                            r.accidentName ||
                            r.foulCode ||
                            ""
                    }));

                    resolve(results);

                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on("error", reject);
        req.write(data);
        req.end();
    });
}

const server = http.createServer(async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Content-Type",
        "application/json; charset=utf-8"
    );

    const url = new URL(
        req.url,
        `http://127.0.0.1:${PORT}`
    );

    if (url.pathname === "/race-result") {

        const placeCode =
            url.searchParams.get("placeCode");

        const raceDate =
            url.searchParams.get("raceDate");

        const raceNo =
            url.searchParams.get("raceNo");

        if (!placeCode || !raceDate || !raceNo) {
            res.writeHead(400);
            res.end(JSON.stringify({
                success: false,
                error: "placeCode / raceDate / raceNo が必要です"
            }));
            return;
        }

        console.log("");
        console.log("========== RESULT ==========");
        console.log(
            `placeCode=${placeCode}`,
            `raceDate=${raceDate}`,
            `raceNo=${raceNo}`
        );

        try {

            const results =
                await getRaceResult(
                    placeCode,
                    raceDate,
                    raceNo
                );

            console.log("公式結果取得:", results);

            res.writeHead(200);
            res.end(JSON.stringify({
                success: true,
                placeCode: Number(placeCode),
                raceDate,
                raceNo: Number(raceNo),
                results
            }));

        } catch (error) {

            console.error("結果取得エラー:", error);

            res.writeHead(500);
            res.end(JSON.stringify({
                success: false,
                error: error.message
            }));
        }

        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        error: "Not Found"
    }));
});

server.listen(PORT, () => {
    console.log("RESULT SERVER STARTED: http://127.0.0.1:3001");
});
