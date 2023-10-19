const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const insurance_visiontravel_testService = require('./../services/insurance_visiontravel_test.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    insurance_visiontravel_testService.getAll()
        .then(insurance_visiontravel_tests => res.json(insurance_visiontravel_tests))
        .catch(next);
}

function getById(req, res, next) {
    insurance_visiontravel_testService.getById(req.params.id)
        .then(insurance_visiontravel_test => res.json(insurance_visiontravel_test))
        .catch(next);
}

function create(req, res, next) {
    insurance_visiontravel_testService.create(req.body)
        .then(() => res.json({ message: 'insurance_visiontravel_test created' }))
        .catch(next);
}

function update(req, res, next) {
    insurance_visiontravel_testService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'insurance_visiontravel_test updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    insurance_visiontravel_testService.delete(req.params.id)
        .then(() => res.json({ message: 'insurance_visiontravel_test deleted' }))
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
