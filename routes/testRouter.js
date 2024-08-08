const { Router } = require("express");
const testRouter = Router();

testRouter.get("/new", (req, res) => {
    res.send("hi demo")
})

module.exports = testRouter;