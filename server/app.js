let path = require('path')
let fs = require('fs')
let express = require('express')
let csvjson = require('csvjson')

let pastEvents = require('./pastEvents.json')
let app = express()

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

app.use(express.static(path.join(__dirname,'/../static')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,'/../static/index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
