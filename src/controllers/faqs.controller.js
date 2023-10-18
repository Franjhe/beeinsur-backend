const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const faqService = require('./../services/faqs.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    faqService.getAll()
        .then(faqs => res.json(faqs))
        .catch(next);
}

function getById(req, res, next) {
    faqService.getById(req.params.id)
        .then(faq => res.json(faq))
        .catch(next);
}

function create(req, res, next) {
    faqService.create(req.body)
        .then(() => res.json({ message: 'faq created' }))
        .catch(next);
}

function update(req, res, next) {
    faqService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'faq updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    faqService.delete(req.params.id)
        .then(() => res.json({ message: 'faq deleted' }))
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
