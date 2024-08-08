const express = require("express");
const authorRouter = require("./routes/authorRouter");
const testRouter = require("./routes/testRouter");
const birdRouter = require("./routes/birds.js")
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use("/demo+", authorRouter);
app.use("/test", testRouter);
app.use("/bird", birdRouter);

app.all("/", (req, res) => {
    // console.log(req)
    res.status(404).send("HIII");
})

// app.all("/messages", (req, res) => {
//     res.send("This is where you can see messages")
// })

// app.get("/test/:user", (req, res) => {
//     res.send(req.params.user);
// })

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})