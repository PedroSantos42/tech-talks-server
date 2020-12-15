import { injectable, inject } from 'tsyringe';

import IHealthProvider from '@shared/container/providers/HealthProvider/models/IHealthProvider';

@injectable()
class HealthCheckService {
  constructor(
    @inject('HealthProvider')
    private healthProvider: IHealthProvider,
  ) {}

  public async execute(): Promise<number> {
    return this.healthProvider.getServerUptime();
  }
}

export default HealthCheckService;
