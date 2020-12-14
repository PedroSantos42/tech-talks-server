import { Request, Response } from 'express';

import HealthCheckService from '../../../services/HealthCheckService';

export default class HealthCheckController {
  public async index(request: Request, response: Response): Promise<Response> {
    const healthCheck = new HealthCheckService();

    const result = await healthCheck.execute();

    return response.status(200).json({
      uptime: result,
    });
  }
}
