import { Router } from 'express';
import commonRouter from '../../../../modules/common/infra/http/routes/common.routes';

const routes = Router();

routes.use(commonRouter);

export default routes;
