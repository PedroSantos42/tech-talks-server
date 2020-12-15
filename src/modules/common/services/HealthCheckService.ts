import { injectable, inject } from 'tsyringe';

import IHealthProvider from '@shared/container/providers/HealthProvider/models/IHealthProvider';
import { IHealthCheckDTO } from '@shared/container/providers/HealthProvider/dtos/IHealthCheckDTO';

@injectable()
class HealthCheckService {
  constructor(
    @inject('HealthProvider')
    private healthProvider: IHealthProvider,
  ) {}

  public async execute(): Promise<IHealthCheckDTO> {
    return this.healthProvider.getServerUptime();
  }
}

export default HealthCheckService;
