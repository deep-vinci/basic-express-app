const express = require("express");
const authorRouter = require("./routes/authorRouter");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use("/authors", authorRouter);

// app.all("/", (req, res) => {
//     console.log(req)
//     res.send("Hello World")
// })

// app.all("/messages", (req, res) => {
//     res.send("This is where you can see messages")
// })

// app.get("/test/:user", (req, res) => {
//     res.send(req.params.user);
// })

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})