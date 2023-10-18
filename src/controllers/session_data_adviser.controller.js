const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const session_data_adviserService = require('./../services/session_data_adviser.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    session_data_adviserService.getAll()
        .then(session_data_advisers => res.json(session_data_advisers))
        .catch(next);
}

function getById(req, res, next) {
    session_data_adviserService.getById(req.params.id)
        .then(session_data_adviser => res.json(session_data_adviser))
        .catch(next);
}

function create(req, res, next) {
    session_data_adviserService.create(req.body)
        .then(() => res.json({ message: 'session_data_adviser created' }))
        .catch(next);
}

function update(req, res, next) {
    session_data_adviserService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'session_data_adviser updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    session_data_adviserService.delete(req.params.id)
        .then(() => res.json({ message: 'session_data_adviser deleted' }))
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
