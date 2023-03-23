const router = require('express').Router()
let places = require('../models/places')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    }
    res.render('places/edit', { place: places[id], id })
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    }
    res.render('places/show', { place: places[id], id })
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    }
    places.splice(id, 1)
    res.redirect('/places')
})

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    }

    req.body.pic = req.body.pic || '/images/default_food.jpg'
    req.body.city = req.body.city || 'Anytown'
    req.body.state = req.body.state || 'USA'
    places[id] = req.body
    res.redirect(`/places/${id}`)
})

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    req.body.pic = req.body.pic || '/images/default_food.jpg'
    req.body.city = req.body.city || 'Anytown'
    req.body.state = req.body.state || 'USA'

    places.push(req.body)
    res.redirect('/places')
})

module.exports = router