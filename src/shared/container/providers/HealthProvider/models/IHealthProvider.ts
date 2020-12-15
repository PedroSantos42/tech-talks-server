import { IHealthCheckDTO } from '../dtos/IHealthCheckDTO';

export default interface IHealthProvider {
  getServerUptime(): Promise<IHealthCheckDTO>;
}
