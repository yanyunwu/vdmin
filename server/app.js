const express = require("express");
const morgan = require("morgan");
const { resolve } = require("path");

const app = express();
app.use(morgan("dev"));
app.use(express.static(resolve(__dirname, "../dist/template-1.0.0")));

app.listen(3000, () => console.log("服务器启动"));
