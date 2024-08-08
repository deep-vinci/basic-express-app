const express = require("express");
const birdRouter = express.Router();

const timeLog = (req, res, next) => {
    console.log("time", Date.now());

    next();
}
birdRouter.use(timeLog);
birdRouter.get("/", (req, res) => {
    res.send("birbb")
})

module.exports = birdRouter;