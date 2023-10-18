const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const blog_tagService = require('./../services/blog_tags.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    blog_tagService.getAll()
        .then(blog_tags => res.json(blog_tags))
        .catch(next);
}

function getById(req, res, next) {
    blog_tagService.getById(req.params.id)
        .then(blog_tag => res.json(blog_tag))
        .catch(next);
}

function create(req, res, next) {
    blog_tagService.create(req.body)
        .then(() => res.json({ message: 'blog_tag created' }))
        .catch(next);
}

function update(req, res, next) {
    blog_tagService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'blog_tag updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    blog_tagService.delete(req.params.id)
        .then(() => res.json({ message: 'blog_tag deleted' }))
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
