const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const subscriber_listService = require('./../services/subscriber_lists.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    subscriber_listService.getAll()
        .then(subscriber_lists => res.json(subscriber_lists))
        .catch(next);
}

function getById(req, res, next) {
    subscriber_listService.getById(req.params.id)
        .then(subscriber_list => res.json(subscriber_list))
        .catch(next);
}

function create(req, res, next) {
    subscriber_listService.create(req.body)
        .then(() => res.json({ message: 'subscriber_list created' }))
        .catch(next);
}

function update(req, res, next) {
    subscriber_listService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'subscriber_list updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    subscriber_listService.delete(req.params.id)
        .then(() => res.json({ message: 'subscriber_list deleted' }))
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
