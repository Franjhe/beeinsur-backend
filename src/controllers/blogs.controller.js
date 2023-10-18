const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const blogService = require('./../services/blogs.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    blogService.getAll()
        .then(blogs => res.json(blogs))
        .catch(next);
}

function getById(req, res, next) {
    blogService.getById(req.params.id)
        .then(blog => res.json(blog))
        .catch(next);
}

function create(req, res, next) {
    blogService.create(req.body)
        .then(() => res.json({ message: 'blog created' }))
        .catch(next);
}

function update(req, res, next) {
    blogService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'blog updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    blogService.delete(req.params.id)
        .then(() => res.json({ message: 'blog deleted' }))
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
