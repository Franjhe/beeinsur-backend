const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const advisers_schedulesService = require('./../services/advisers_schedules.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    advisers_schedulesService.getAll()
        .then(advisers_scheduless => res.json(advisers_scheduless))
        .catch(next);
}

function getById(req, res, next) {
    advisers_schedulesService.getById(req.params.id)
        .then(advisers_schedules => res.json(advisers_schedules))
        .catch(next);
}

function create(req, res, next) {
    advisers_schedulesService.create(req.body)
        .then(() => res.json({ message: 'advisers_schedules created' }))
        .catch(next);
}

function update(req, res, next) {
    advisers_schedulesService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'advisers_schedules updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    advisers_schedulesService.delete(req.params.id)
        .then(() => res.json({ message: 'advisers_schedules deleted' }))
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
