const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const agencies_iboService = require('./../services/agencies_ibo.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    agencies_iboService.getAll()
        .then(agencies_ibos => res.json(agencies_ibos))
        .catch(next);
}

function getById(req, res, next) {
    agencies_iboService.getById(req.params.id)
        .then(agencies_ibo => res.json(agencies_ibo))
        .catch(next);
}

function create(req, res, next) {
    agencies_iboService.create(req.body)
        .then(() => res.json({ message: 'agencies_ibo created' }))
        .catch(next);
}

function update(req, res, next) {
    agencies_iboService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'agencies_ibo updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    agencies_iboService.delete(req.params.id)
        .then(() => res.json({ message: 'agencies_ibo deleted' }))
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
