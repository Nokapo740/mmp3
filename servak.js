const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Ayau.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Ayauzhan.svg')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ibra_lezhit.jpg')
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/igraem.jpg')
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/lavashfood.jpg')
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Den_studenta.jpg')
  })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mus.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
