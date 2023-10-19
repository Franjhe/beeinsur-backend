const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

const incident_serviceService = require('./../services/incident_service.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    incident_serviceService.getAll()
        .then(incident_services => res.json(incident_services))
        .catch(next);
}

function getById(req, res, next) {
    incident_serviceService.getById(req.params.id)
        .then(incident_service => res.json(incident_service))
        .catch(next);
}

function create(req, res, next) {
    incident_serviceService.create(req.body)
        .then(() => res.json({ message: 'incident_service created' }))
        .catch(next);
}

function update(req, res, next) {
    incident_serviceService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'incident_service updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    incident_serviceService.delete(req.params.id)
        .then(() => res.json({ message: 'incident_service deleted' }))
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
