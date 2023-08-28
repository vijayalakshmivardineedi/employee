const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
//const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
//const {}=require('express-validator')
const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin); /*validateSigninRequest, isRequestValidated,*/ 

/*router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user:'profile'})
});*/


module.exports = router;




/*const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest }=require('../validators/auth');
const router = express.Router();


router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);



module.exports = router;*/