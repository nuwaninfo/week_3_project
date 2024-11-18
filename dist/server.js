"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
app.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get('/echo/:id', (req, res) => {
    res.json(req.params);
});
app.post('/sum', (req, res) => {
    let numbersArr = req.body.numbers;
    let sum = 0;
    numbersArr.forEach((element) => sum = sum + element);
    res.json({ 'sum': sum });
});
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
