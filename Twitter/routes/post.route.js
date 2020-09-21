var express = require('express');
var router = express.Router();
const postController = require ('../controllers/post.controller');


/* POST new post listing. */
router.post('/', postController.crearPost);

/**
 * GET Route to list all posts
 */
router.get('/', postController.retonarPosts);
/**
 * GET Route to find post by id
 */
router.get('/:idPost', postController.retonarPost);
/**
 * PUT Route to update an post by id
 */
router.put ('/:idPost',postController.actualizarPost);
/**
 * DELETE Route to delete an post by id
 */
router.delete ('/:idPost',postController.eliminarPost);
/**
 * DELETE Route to delete all posts
 */
router.delete ('/',postController.eliminarPosts);
/**
 * GET list all post by Published Date
 */
router.get ('/PublishedDate/:publishedDate',postController.retonarPostFecha);


module.exports = router;
