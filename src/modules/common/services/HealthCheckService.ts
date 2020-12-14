import NodeJSHealthProvider from '../../../shared/container/providers/HealthProvider/implementations/NodeJSHealthProvider';

class HealthCheckService {
  public async execute(): Promise<number> {
    return new NodeJSHealthProvider().getServerUptime();
  }
}

export default HealthCheckService;
