import { Router } from 'express';
import validate from '../middlewares/request-validator.js';
import schemas from '../utils/validation-schemas.js';
import blogControllers from '../controllers/blog-controllers.js';
const router = Router();
router.post(
    '/post-blog',
    validate(schemas.signup, 'body'),
    blogControllers.createBlog
);
router.get('/get-blogs', blogControllers.getBlogs);
router.get('/get-blog/:id', blogControllers.getBlog);
router.put('/update-blog/:id', blogControllers.updateBlog);
router.delete('/delete-blog/:id', blogControllers.deleteBlog);

export default router;
