var express = require('express');
var app = express();

app.get("/", function (req, res) {
  var headers = req.headers;
  res.send({ ipaddress: headers["x-forwarded-for"].split(",")[0], 
            language: headers["accept-language"].split(/\,|\;/g)[0], 
            software: headers["user-agent"].split(/\(|\)/g)[1] });
});

app.listen(8080, function () {
  console.log("Server start at port: 8080");
});
