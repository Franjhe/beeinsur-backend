const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');
const adsService = require('./../services/ads.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    adsService.getAll()
        .then(adss => res.json(adss))
        .catch(next);
}

function getById(req, res, next) {
    adsService.getById(req.params.id)
        .then(ads => res.json(ads))
        .catch(next);
}

function create(req, res, next) {
    adsService.create(req.body)
        .then(() => res.json({ message: 'ads created' }))
        .catch(next);
}

function update(req, res, next) {
    adsService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'ads updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    adsService.delete(req.params.id)
        .then(() => res.json({ message: 'ads deleted' }))
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
