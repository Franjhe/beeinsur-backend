const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const products_filesService = require('./../services/products_files.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    products_filesService.getAll()
        .then(products_filess => res.json(products_filess))
        .catch(next);
}

function getById(req, res, next) {
    products_filesService.getById(req.params.id)
        .then(products_files => res.json(products_files))
        .catch(next);
}

function create(req, res, next) {
    products_filesService.create(req.body)
        .then(() => res.json({ message: 'products_files created' }))
        .catch(next);
}

function update(req, res, next) {
    products_filesService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'products_files updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    products_filesService.delete(req.params.id)
        .then(() => res.json({ message: 'products_files deleted' }))
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
