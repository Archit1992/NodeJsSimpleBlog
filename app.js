const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

console.log("The port number is : "+process.env.PORT);

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(methodOverride());

app.set("views", __dirname+'/public/views');
app.set("view engine", 'jade');
app.set('view engine', {layout: true});

app.listen(app.get("posrt"),function () {
    console.log("Express server is listening!");
})


module.exports = app;
