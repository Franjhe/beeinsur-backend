const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const age_groupService = require('./../services/age_groups.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    age_groupService.getAll()
        .then(age_groups => res.json(age_groups))
        .catch(next);
}

function getById(req, res, next) {
    age_groupService.getById(req.params.id)
        .then(age_groups => res.json(age_groups))
        .catch(next);
}

function create(req, res, next) {
    age_groupService.create(req.body)
        .then(() => res.json({ message: 'age_groups created' }))
        .catch(next);
}

function update(req, res, next) {
    age_groupService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'age_groups updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    age_groupService.delete(req.params.id)
        .then(() => res.json({ message: 'age_groups deleted' }))
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
