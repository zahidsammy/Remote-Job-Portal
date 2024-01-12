let express = require("express");
let router = express.Router();
let userController = require("../Controller/userController");



// Sign-up route
router.post('/sign-up', (req, res) => {
    userController.signup(req, res);
});





module.exports = router;