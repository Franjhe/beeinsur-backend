const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const blog_categorieService = require('./../services/blog_categories.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    blog_categorieService.getAll()
        .then(blog_categories => res.json(blog_categories))
        .catch(next);
}

function getById(req, res, next) {
    blog_categorieService.getById(req.params.id)
        .then(blog_categorie => res.json(blog_categorie))
        .catch(next);
}

function create(req, res, next) {
    blog_categorieService.create(req.body)
        .then(() => res.json({ message: 'blog_categorie created' }))
        .catch(next);
}

function update(req, res, next) {
    blog_categorieService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'blog_categorie updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    blog_categorieService.delete(req.params.id)
        .then(() => res.json({ message: 'blog_categorie deleted' }))
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
