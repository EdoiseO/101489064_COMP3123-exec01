const http = require("http");
const employees = require("./Employee");

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8081;

function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

function sendHtml(res, statusCode, html) {
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(html);
}

const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        sendJson(res, 405, { error: http.STATUS_CODES[405] });
        return;
    }

    if (req.url === "/") {
        sendHtml(res, 200, "<h1>Welcome to Lab Exercise 03</h1>");
        return;
    }

    if (req.url === "/employee") {
        sendJson(res, 200, employees);
        return;
    }

    if (req.url === "/employee/names") {
        const names = employees
            .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
            .sort((first, second) => first.localeCompare(second));
        sendJson(res, 200, names);
        return;
    }

    if (req.url === "/employee/totalsalary") {
        const totalSalary = employees.reduce((total, employee) => total + employee.Salary, 0);
        sendJson(res, 200, { total_salary: totalSalary });
        return;
    }

    sendJson(res, 404, { error: http.STATUS_CODES[404] });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
