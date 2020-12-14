import IHealthProvider from '../models/IHealthProvider';

export default class NodeJSHealthProvider implements IHealthProvider {
  public async getServerUptime(): Promise<number> {
    return process.uptime();
  }
}
