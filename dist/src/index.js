"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/hello', (req, res) => {
    res.json({ msg: "Hello world!" });
});
router.get('/echo/:id', (req, res) => {
    res.json(req.params);
});
let myUser = [];
let totalUserCount = 0;
router.post('/users', (req, res) => {
    let userCount = 0;
    userCount = myUser.push(req.body);
    res.json({ message: "User successfully added" });
});
router.get('/users', (req, res) => {
    res.json({ status: 201, users: myUser });
});
router.post('/sum', (req, res) => {
    let numbersArr = req.body.numbers;
    let sum = 0;
    numbersArr.forEach((element) => sum = sum + element);
    res.json({ 'sum': sum });
});
exports.default = router;
