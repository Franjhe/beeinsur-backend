const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const session_dataService = require('./../services/session_data.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    session_dataService.getAll()
        .then(session_datas => res.json(session_datas))
        .catch(next);
}

function getById(req, res, next) {
    session_dataService.getById(req.params.id)
        .then(session_data => res.json(session_data))
        .catch(next);
}

function create(req, res, next) {
    session_dataService.create(req.body)
        .then(() => res.json({ message: 'session_data created' }))
        .catch(next);
}

function update(req, res, next) {
    session_dataService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'session_data updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    session_dataService.delete(req.params.id)
        .then(() => res.json({ message: 'session_data deleted' }))
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
