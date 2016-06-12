let path = require('path')
let express = require('express')
let csvjson = require('csvjson')

let app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/../static/index.html'))
})

app.get('/api/people', function (req, res) {
  let people = csvjson.toObject(path.join(__dirname,'../docs/people.csv')).output
  res.json(people)
})

app.use(express.static(path.join(__dirname,'/../static')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
