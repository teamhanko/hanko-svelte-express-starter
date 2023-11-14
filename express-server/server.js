const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const cors = require('cors');

const app = new express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // replace with your frontend's origin
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("<h1>Hello world</h1>");
});


app.use("/api/hello", require("./routes/helloRoute"));
app.use("/api/protected", require("./routes/protectedRoute"));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

