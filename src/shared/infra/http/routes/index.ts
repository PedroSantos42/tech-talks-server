import { Router } from 'express';
import commonRouter from '@modules/common/infra/http/routes/common.routes';
import sectionsRouter from '@modules/sections/infra/http/routes/sections.routes';

const routes = Router();

routes.use(commonRouter);
routes.use('/sections', sectionsRouter);

export default routes;
