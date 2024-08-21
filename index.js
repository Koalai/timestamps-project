// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

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

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api', (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  })
})

app.get('/api/:date', (req, res) => {
  const currentDate = req.params.date
  
  if(!isNaN(Number(currentDate))){
   return res.json({
     unix: Number(currentDate),
     utc: new Date(Number(currentDate)).toUTCString()
    })
  }
 
  if(new Date(currentDate).toUTCString() !== "Invalid Date"){
    return res.json({
      unix: new Date(currentDate).getTime(),
      utc: new Date(currentDate).toUTCString()
    })
  }

  res.json({
    error: "Invalid Date"
  })
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
