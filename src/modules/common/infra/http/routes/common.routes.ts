import { Router } from 'express';
import HealthCheckController from '../controllers/HealthCheckController';

const commonRouter = Router();

const healthCheckController = new HealthCheckController();

commonRouter.get('/healthcheck', healthCheckController.index);

export default commonRouter;
