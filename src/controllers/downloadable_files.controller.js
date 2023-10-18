const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const downloadable_fileService = require('./../services/downloadable_files.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    downloadable_fileService.getAll()
        .then(downloadable_files => res.json(downloadable_files))
        .catch(next);
}

function getById(req, res, next) {
    downloadable_fileService.getById(req.params.id)
        .then(downloadable_file => res.json(downloadable_file))
        .catch(next);
}

function create(req, res, next) {
    downloadable_fileService.create(req.body)
        .then(() => res.json({ message: 'downloadable_file created' }))
        .catch(next);
}

function update(req, res, next) {
    downloadable_fileService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'downloadable_file updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    downloadable_fileService.delete(req.params.id)
        .then(() => res.json({ message: 'downloadable_file deleted' }))
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
