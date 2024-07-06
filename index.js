import http from "node:http";
import https from "node:https";
import fs from "node:fs";
import { hostname } from "node:os";

const server = http.createServer((req, res) => {
    let filename = null;
    switch(req.url) {
/*
        case "/": case "/about.html":
        case "/contact-me.html": case "/404.html": {
            filename = req.url;
        } break;
*/
        case "/index.html":  {
            filename = "./index.html";
        } break;

        case "/about.html": {
            filename = "./about.html";
        } break;

        case "/contact-me.html": {
            filename = "./contact-me.html";
        } break;

        case "/404.html": {
            filename = "./404.html";
        } break;

        default: {
            console.error(req.url + " does not exist!");
        } break;
    }

    if (filename) {
        console.log("reading " + filename);
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }
});

server.listen(8000);