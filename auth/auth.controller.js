const express = require('express');
const router = express.Router();
const userService = require('./auth.service');

// routes

router.post('/SignUp', SignUp);
router.post('/SignIn', SignIn);

module.exports = router;


function SignUp(req, res, next) {
    console.log(req.body)
    userService.SignUp(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function SignIn(req, res, next) {
    userService.SignIn(req.body)
    console.log(req.body)
        .then(user => res.json(user))
        .catch(next);
}




