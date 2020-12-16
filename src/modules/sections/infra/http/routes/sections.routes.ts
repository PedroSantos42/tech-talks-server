import { Router } from 'express';

import SectionsController from '@modules/sections/infra/http/controllers/SectionsController';

const sectionsRouter = Router();
const sectionsController = new SectionsController();

sectionsRouter.post('/', sectionsController.create);

export default sectionsRouter;
