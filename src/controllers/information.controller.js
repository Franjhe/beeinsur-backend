const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const informationService = require('./../services/information.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    informationService.getAll()
        .then(informations => res.json(informations))
        .catch(next);
}

function getById(req, res, next) {
    informationService.getById(req.params.id)
        .then(information => res.json(information))
        .catch(next);
}

function create(req, res, next) {
    informationService.create(req.body)
        .then(() => res.json({ message: 'information created' }))
        .catch(next);
}

function update(req, res, next) {
    informationService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'information updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    informationService.delete(req.params.id)
        .then(() => res.json({ message: 'information deleted' }))
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
