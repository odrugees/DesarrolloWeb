var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user.controller');

/**
 * GET Route to list all users
 */
router.get('/', userController.findAllUsers);


/* POST new users listing. */
router.post('/', userController.createUser);

/**
 * GET Route to find user by id
 */
router.get('/:idUser', userController.findOneUser);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',userController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:username',userController.deleteUserByUsername);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',userController.deleteAllUsers);
/**
 * GET list all users by Created Date
 */
router.get ('/createdate/:creation_date',userController.findAllUsersByCreatedDate);

module.exports = router;
