const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const statuService = require('./../services/status.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    statuService.getAll()
        .then(status => res.json(status))
        .catch(next);
}

function getById(req, res, next) {
    statuService.getById(req.params.id)
        .then(statu => res.json(statu))
        .catch(next);
}

function create(req, res, next) {
    statuService.create(req.body)
        .then(() => res.json({ message: 'statu created' }))
        .catch(next);
}

function update(req, res, next) {
    statuService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'statu updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    statuService.delete(req.params.id)
        .then(() => res.json({ message: 'statu deleted' }))
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
