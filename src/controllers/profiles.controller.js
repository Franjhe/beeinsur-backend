const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const profileService = require('./../services/profiles.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    profileService.getAll()
        .then(profiles => res.json(profiles))
        .catch(next);
}

function getById(req, res, next) {
    profileService.getById(req.params.id)
        .then(profile => res.json(profile))
        .catch(next);
}

function create(req, res, next) {
    profileService.create(req.body)
        .then(() => res.json({ message: 'profile created' }))
        .catch(next);
}

function update(req, res, next) {
    profileService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'profile updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    profileService.delete(req.params.id)
        .then(() => res.json({ message: 'profile deleted' }))
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
