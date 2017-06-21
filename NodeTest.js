"use strict";
console.log("Server starting");
var Http = require("http");
var Url = require("url");
var port = process.env.PORT;
if (port == undefined)
    port = 8100;
var server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    var query = Url.parse(_request.url, true).query;
    console.log(query);
    var key;
    for (key in query)
        console.log(key + ":" + query[key]);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write("Your IceCream: <br>");
    _response.write("Chocolate:" + query["Chocolate"] + "<br>");
    _response.write("Vanilla:" + query["Vanilla"] + "<br>");
    _response.write("Strawberry:" + query["Strawberry"] + "<br>");
    _response.write("Raspberry:" + query["Raspberry"] + "<br>");
    _response.write("Bubblegum:" + query["Bubblegum"] + "<br>");
    _response.write("Dark Chocolate:" + query["Dark Chocolate"] + "<br>");
    _response.write("White Chocolate:" + query["White Chocolate"] + "<br>");
    _response.write("Yogurt:" + query["Yogurt"] + "<br>");
    _response.write("Kiddy Chocolate:" + query["Kiddy Chocolate"] + "<br>");
    _response.write("Banana:" + query["Banana"] + "<br>");
    _response.write("Blueberry:" + query["Blueberry"] + "<br>");
    _response.write("Your Toppings:" + query["Toppings"]);
    _response.write("Your Box:" + query["RadioBoxes"]);
    _response.write("Delivery Option:" + query["RadioBoxes2"]);
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map