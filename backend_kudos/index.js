const express = require("express"),
      bodyParser = require("body-parser"),
      app = express(),
      cors = require("cors");

const port = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(port, function(){
  console.log("Server listening on port: " + port);
});
