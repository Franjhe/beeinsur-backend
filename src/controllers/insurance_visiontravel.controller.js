const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const insurance_visiontravelService = require('./../services/insurance_visiontravel.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_visiontravelService.getAll()
        .then(insurance_visiontravels => res.json(insurance_visiontravels))
        .catch(next);
}

function getById(req, res, next) {
    insurance_visiontravelService.getById(req.params.id)
        .then(insurance_visiontravel => res.json(insurance_visiontravel))
        .catch(next);
}

function create(req, res, next) {
    insurance_visiontravelService.create(req.body)
        .then(() => res.json({ message: 'insurance_visiontravel created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_visiontravelService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_visiontravel updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_visiontravelService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_visiontravel deleted' }))
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
