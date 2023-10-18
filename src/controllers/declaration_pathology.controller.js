const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const declaration_pathologyService = require('./../services/declaration_pathology.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    declaration_pathologyService.getAll()
        .then(declaration_pathologys => res.json(declaration_pathologys))
        .catch(next);
}

function getById(req, res, next) {
    declaration_pathologyService.getById(req.params.id)
        .then(declaration_pathology => res.json(declaration_pathology))
        .catch(next);
}

function create(req, res, next) {
    declaration_pathologyService.create(req.body)
        .then(() => res.json({ message: 'declaration_pathology created' }))
        .catch(next);
}

function update(req, res, next) {
    declaration_pathologyService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'declaration_pathology updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    declaration_pathologyService.delete(req.params.id)
        .then(() => res.json({ message: 'declaration_pathology deleted' }))
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
