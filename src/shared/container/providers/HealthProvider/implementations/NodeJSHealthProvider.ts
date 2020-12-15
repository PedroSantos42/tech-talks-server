import { IHealthCheckDTO } from '../dtos/IHealthCheckDTO';
import IHealthProvider from '../models/IHealthProvider';

export default class NodeJSHealthProvider implements IHealthProvider {
  public async getServerUptime(): Promise<IHealthCheckDTO> {
    return {
      uptime: process.uptime(),
    };
  }
}
