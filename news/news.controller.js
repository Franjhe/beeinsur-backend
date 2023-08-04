const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const newsService = require('./news.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    newsService.getAll()
        .then(news => res.json(news))
        .catch(next);
}

function getById(req, res, next) {
    newsService.getById(req.params.id)
        .then(news => res.json(news))
        .catch(next);
}

function create(req, res, next) {
    newsService.create(req.body)
        .then(() => res.json({ message: 'News created' }))
        .catch(next);
}

function update(req, res, next) {
    newsService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'News updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    newsService.delete(req.params.id)
        .then(() => res.json({ message: 'News deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        content: Joi.string().valid(Joi.ref('content')).required(),
        date: Joi.string().valid(Joi.ref('date')).required(),
        image: Joi.string().valid(Joi.ref('image')).required(),
        author: Joi.string().valid(Joi.ref('author')).required(),        
        title: Joi.string().valid(Joi.ref('title')).required()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        content: Joi.string().empty(''),
        image: Joi.string().empty(''),
        title: Joi.string().empty(''),
    }).with();
    validateRequest(req, next, schema);
}
