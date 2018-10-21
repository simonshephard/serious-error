// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// get IP address, preferred languages, and system info
app.get("/api/whoami", function (req, res) {
  
  // let date = new Date(req.params.date_string);
  // res.json({
  //   "unix": date.getTime(), "utc": date.toUTCString()
  // });
  
  //let ipAddress = req.ip;
  res.json({
    "ipaddress": req.ip,
    "language": req.get('Accept-Language'),
    // "language": req.acceptsLanguages(),
    "otherHeadersTest1": req.get('Access-Control-Request-Method'),
    "otherHeadersTest2": req.get('Authorization'),
    "otherHeadersTest3": req.get('Content-Type'),
    "otherHeadersTest4": req.get('Date'),
    "otherHeadersTest5": req.get('Forwarded'),
    "otherHeadersTest6": req.get('Origin'),
    "otherHeadersTest7": req.get('Referrer'),
    "otherHeadersTest8": req.get('Access-Control-Request-Headers'),
    "otherHeadersTest9": req.get('Accept-EncodingHeaders'),
    "otherHeadersHost": req.get('Host'),
    "software": req.get('User-Agent')
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
