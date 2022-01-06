"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.npm_package_config_port || 5000;
let runningMessage = `Server is running on port ${PORT}`;
app.get('/', (req, res) => {
    console.log(`API request from ${req.ip}`);
    res.send(runningMessage + " yoooooooo!");
});
const server = app.listen(PORT, () => {
    console.log(runningMessage);
});
module.exports = server;
