import { Router } from 'express';

import PostsController from '@modules/posts/infra/http/controllers/PostsController';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.post('/', postsController.create);

export default postsRouter;
