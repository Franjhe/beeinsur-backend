const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const bannerService = require('./../services/banners.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    bannerService.getAll()
        .then(banners => res.json(banners))
        .catch(next);
}

function getById(req, res, next) {
    bannerService.getById(req.params.id)
        .then(banner => res.json(banner))
        .catch(next);
}

function create(req, res, next) {
    bannerService.create(req.body)
        .then(() => res.json({ message: 'banner created' }))
        .catch(next);
}

function update(req, res, next) {
    bannerService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'banner updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    bannerService.delete(req.params.id)
        .then(() => res.json({ message: 'banner deleted' }))
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
