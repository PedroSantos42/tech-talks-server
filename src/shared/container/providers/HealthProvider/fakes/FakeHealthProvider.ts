import { IHealthCheckDTO } from '../dtos/IHealthCheckDTO';
import IHealthProvider from '../models/IHealthProvider';

export default class FakeHealthProvider implements IHealthProvider {
  public async getServerUptime(): Promise<IHealthCheckDTO> {
    return {
      uptime: new Date().getMilliseconds(),
    };
  }
}
