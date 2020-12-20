import { Router } from 'express';

import commonRouter from '@modules/common/infra/http/routes/common.routes';
import sectionsRouter from '@modules/sections/infra/http/routes/sections.routes';
import postsRouter from '@modules/posts/infra/http/routes/posts.routes';

const routes = Router();

routes.use(commonRouter);
routes.use('/sections', sectionsRouter);
routes.use('/posts', postsRouter);

export default routes;
