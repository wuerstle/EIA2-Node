//Aufgabe: Nr. 10 ClientServer
//Name: Lisa Würstle
//Matrikel: 254072
//Datum: 25.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


console.log("Server starting");

import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    console.log(_request.url);
    let query: AssocStringString = Url.parse(_request.url, true).query;
    console.log(query);
    let key: string;
    for (key in query) {
        console.log(key + ":" + query[key]);
    }

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.write("YOUR ICECREAM <hr>");
//        _response.write("Chocolate:" + query["Chocolate"] + "<br>");
//        _response.write("Vanilla:" + query["Vanilla"] + "<br>");
//        _response.write("Strawberry:" + query["Strawberry"] + "<br>");
//        _response.write("Raspberry:" + query["Raspberry"] + "<br>");
//        _response.write("Bubblegum:" + query["Bubblegum"] + "<br>");
//        _response.write("Dark Chocolate:" + query["Dark Chocolate"] + "<br>");
//        _response.write("White Chocolate:" + query["White Chocolate"] + "<br>");
//        _response.write("Yogurt:" + query["Yogurt"] + "<br>");
//        _response.write("Kiddy Chocolate:" + query["Kiddy Chocolate"] + "<br>");
//        _response.write("Banana:" + query["Banana"] + "<br>");
//        _response.write("Blueberry:" + query["Blueberry"] + "<br>");
        _response.write("Your Flavours:" +query["NumberFlavours"] + "<br>");
        _response.write("Your Toppings:" + query["Toppings"] + "<br>");
        _response.write("Your Box:" + query["RadioBoxes"] + "<br>");
        _response.write("Delivery Option:" + query["RadioBoxes2"]);
        _response.end();
    }