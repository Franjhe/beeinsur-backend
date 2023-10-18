const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const subscribers_testService = require('./../services/subscribers_test.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    subscribers_testService.getAll()
        .then(subscribers_tests => res.json(subscribers_tests))
        .catch(next);
}

function getById(req, res, next) {
    subscribers_testService.getById(req.params.id)
        .then(subscribers_test => res.json(subscribers_test))
        .catch(next);
}

function create(req, res, next) {
    subscribers_testService.create(req.body)
        .then(() => res.json({ message: 'subscribers_test created' }))
        .catch(next);
}

function update(req, res, next) {
    subscribers_testService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'subscribers_test updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    subscribers_testService.delete(req.params.id)
        .then(() => res.json({ message: 'subscribers_test deleted' }))
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
