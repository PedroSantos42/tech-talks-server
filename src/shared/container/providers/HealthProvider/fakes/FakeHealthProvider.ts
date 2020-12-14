import IHealthProvider from '../models/IHealthProvider';

export default class FakeHealthProvider implements IHealthProvider {
  public async getServerUptime(): Promise<number> {
    return new Date().getMilliseconds();
  }
}
