const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const listService = require('./../services/lists.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    listService.getAll()
        .then(lists => res.json(lists))
        .catch(next);
}

function getById(req, res, next) {
    listService.getById(req.params.id)
        .then(list => res.json(list))
        .catch(next);
}

function create(req, res, next) {
    listService.create(req.body)
        .then(() => res.json({ message: 'list created' }))
        .catch(next);
}

function update(req, res, next) {
    listService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'list updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    listService.delete(req.params.id)
        .then(() => res.json({ message: 'list deleted' }))
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
