import { Request, Response } from 'express';
import { container } from 'tsyringe';

import HealthCheckService from '@modules/common/services/HealthCheckService';

class HealthCheckController {
  public async index(request: Request, response: Response): Promise<Response> {
    const healthCheck = container.resolve(HealthCheckService);

    const result = await healthCheck.execute();

    return response.status(200).json({
      uptime: result,
    });
  }
}

export default HealthCheckController;
