const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const categorieService = require('./../services/categories.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    categorieService.getAll()
        .then(categories => res.json(categories))
        .catch(next);
}

function getById(req, res, next) {
    categorieService.getById(req.params.id)
        .then(categorie => res.json(categorie))
        .catch(next);
}

function create(req, res, next) {
    categorieService.create(req.body)
        .then(() => res.json({ message: 'categorie created' }))
        .catch(next);
}

function update(req, res, next) {
    categorieService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'categorie updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    categorieService.delete(req.params.id)
        .then(() => res.json({ message: 'categorie deleted' }))
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
