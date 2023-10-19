const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const tagService = require('./../services/tags.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    tagService.getAll()
        .then(tags => res.json(tags))
        .catch(next);
}

function getById(req, res, next) {
    tagService.getById(req.params.id)
        .then(tag => res.json(tag))
        .catch(next);
}

function create(req, res, next) {
    tagService.create(req.body)
        .then(() => res.json({ message: 'tag created' }))
        .catch(next);
}

function update(req, res, next) {
    tagService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'tag updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    tagService.delete(req.params.id)
        .then(() => res.json({ message: 'tag deleted' }))
        .catch(next);
}

// schema functions

function updateSchema(req, res, next) {
    const schema = Joi.object({
        description: Joi.string().empty(''),
        description_large: Joi.string().empty(''),
        quantity: Joi.number().empty(''),
        ambit: Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}
