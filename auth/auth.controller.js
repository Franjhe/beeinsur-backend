const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes

router.post('/', SignUp);
router.post('/', SignIn);

module.exports = router;


function SignUp(req, res, next) {
    userService.getById(req.params)
        .then(user => res.json(user))
        .catch(next);
}

function SignIn(req, res, next) {
    userService.getById(req.params)
        .then(user => res.json(user))
        .catch(next);
}




