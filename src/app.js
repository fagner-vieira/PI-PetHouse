var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var userRoutes = require("./routes/users");
var app = express();
var session = require("express-session");

require("../config/database");
const bodyParser = require("body-parser");

//inicio banco de dados - processo de mvc - //

const produtosRoutes = require("./routes/produtosRoutes");
const pedidoRoutes = require("./routes/pedidoRoutes");
const enderecosRoutes = require("./routes/enderecosRoutes");
// fim banco de dados - processo de mvc - //

// view engine setup
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(session({ secret: "senha", resave: false, saveUninitialized: false }));

// inicio banco de dados - processo de mvc - //

app.use(produtosRoutes);
app.use(pedidoRoutes);
app.use(enderecosRoutes);

app.use("/", userRoutes);
console.log("servidor rodando");
app.listen(3000);
