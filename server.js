let http = require("http");
let server = http.createServer((req, res) => {
    console.log("Someone connected...")
    while(1);
    res.end("hello");
})
server.listen(1113, () => {
    console.log("Listening...")})