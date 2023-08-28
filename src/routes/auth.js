const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
//const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const {}=require('express-validator')
const router = express.Router();


router.post('/signup', signup);

/*[
    check('firstName')
    .isEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .isEmpty()
    .withMessage('lastName is required'),
    check('lastName'),
    check('email')
    .isEmpty()
    .withMessage('valid email is required'),
    check('password')
    .isLength ({ min: 6 })
    .withMessage('password must be atleast 6 characters'),
   ]*//*validateSignupRequest, isRequestValidated,*/




router.post('/signin', signin); /*validateSigninRequest, isRequestValidated,*/ 

/*router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user:'profile'})
});*/


module.exports = router;