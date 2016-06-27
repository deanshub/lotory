let path = require('path')
let fs = require('fs')
let express = require('express')
let csvjson = require('csvjson')
let bodyParser = require('body-parser')
let multer = require('multer')

let pastEvents = require('./pastEvents.json')
let app = express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'docs/')
  },
  filename: function (req, file, cb) {
    cb(null, "people.csv")
  }
})

let upload = multer({ storage: storage });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/../static/index.html'))
})

app.get('/api/people', function (req, res) {
  let people = csvjson.toObject(path.join(__dirname,'../docs/people.csv')).output
  res.json(people)
})

app.get('/api/events', function (req, res) {
  res.json(pastEvents)
})
app.post('/api/events', function (req, res) {
  if (req.body.event && req.body.event.date && req.body.event.people){
    pastEvents.push(req.body.event)
    fs.writeFile(path.join(__dirname,'pastEvents.json'), JSON.stringify(pastEvents))
  }
  res.json(pastEvents)
})

app.post('/api/csv/upload', upload.single('avatar'), function (req, res, next) {
    res.json(req.file.originalname);
})

app.use(express.static(path.join(__dirname,'/../static')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,'/../static/index.html'))
})

app.listen(8002, function () {
  console.log('Example app listening on port 8002!');
})
