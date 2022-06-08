// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Rohan Vishwakarma from Node JS!");
// });

// const options = {
//     hostname: 'localhost',
//     port: 8080,
//     path: '/abc',
//     method: 'GET'
// };

// const req = http.request(options, (res) => {

//     console.log(`statusCode: ${res.statusCode}`);

//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });

// req.on('error', (err) => {

//     console.error(err);
// });
// req.end();

// //const port = process.env.PORT || 5000;
// const port = 5000;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
const express = require('express');
const app = express()
app.get("/asa", (req, res) => {
    res.send("OKKKay");
})
app.get("/", (req, res) => {
    res.send("aaa");
})
app.listen(process.env.PORT || 5000, () => {
    console.log("Running")
})