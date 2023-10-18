const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const incident_filesService = require('./../services/incident_files.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    incident_filesService.getAll()
        .then(incident_filess => res.json(incident_filess))
        .catch(next);
}

function getById(req, res, next) {
    incident_filesService.getById(req.params.id)
        .then(incident_files => res.json(incident_files))
        .catch(next);
}

function create(req, res, next) {
    incident_filesService.create(req.body)
        .then(() => res.json({ message: 'incident_files created' }))
        .catch(next);
}

function update(req, res, next) {
    incident_filesService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'incident_files updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    incident_filesService.delete(req.params.id)
        .then(() => res.json({ message: 'incident_files deleted' }))
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
