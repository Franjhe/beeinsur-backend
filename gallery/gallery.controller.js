const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const galleryService = require('./gallery.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    galleryService.getAll()
        .then(gallery => res.json(gallery))
        .catch(next);
}

function getById(req, res, next) {
    galleryService.getById(req.params.id)
        .then(gallery => res.json(gallery))
        .catch(next);
}

function create(req, res, next) {
    galleryService.create(req.body)
        .then(() => res.json({ message: 'Gallery created' }))
        .catch(next);
}

function update(req, res, next) {
    galleryService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Gallery updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    galleryService.delete(req.params.id)
        .then(() => res.json({ message: 'Gallery deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        image: Joi.string().valid(Joi.ref('image')).required(),
        category: Joi.string().valid(Joi.ref('category')).required(),
        author: Joi.string().valid(Joi.ref('author')).required(),

    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        image: Joi.string().empty(''),
        category: Joi.boolean().empty(''),
        author: Joi.boolean().empty(''),
    }).with();
    validateRequest(req, next, schema);
}
