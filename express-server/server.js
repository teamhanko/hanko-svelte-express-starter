const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const cors = require('cors');

const app = new express();
const port = process.env.PORT || 5000;

//Makes sure only the frontend can make requests
app.use(cors({
  origin: 'http://localhost:5173', // replace with your frontend's origin
  credentials: true
}));

//two middleware functions
app.use(cookieParser());
app.use(express.json());


app.use(function(req, res, next) {
    console.log('Page loaded')
    next('route')
});

app.get("/", function (req, res) {
    res.status(200).send("<h1>Hello World!</h1>");
});

app.use("/api", require("./routes/api"));
app.use("/validate", require("./routes/validate"));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  