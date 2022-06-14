const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

// INDEX
breads.get('/', (req,res) => {
    res.render ('index',
    {
        breads: Bread,
        title: 'Index Page'
    })
    // res.send(Bread)
})

module.exports = breads 