var http = require("http");
var fs = require("fs");

function renderPage(path, res) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write("Internal Server Error");
            res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        }
    });
}

http.createServer((req, res) => {
    if (req.url === "/") {
        renderPage("./index.html", res);
    } else if (req.url === "/home") {
        renderPage("./index.html", res);
    } else if (req.url === "/about") {
        renderPage("./about.html", res);
    } else if (req.url === "/contact") {
        renderPage("./contact-me.html", res);
    } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.write("Path does not exist");
        res.end();
    }
}).listen(3000, () => {
    console.log("Listening on port 3000");
});
