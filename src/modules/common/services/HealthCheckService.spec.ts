import FakeHealthProvider from '@shared/container/providers/HealthProvider/fakes/FakeHealthProvider';
import HealthCheckService from '@modules/common/services/HealthCheckService';

describe('HealthStatus', () => {
  it('should return server uptime in milliseconds', async () => {
    const fakeHealthProvider = new FakeHealthProvider();

    const healthCheck = new HealthCheckService(fakeHealthProvider);

    const result = await healthCheck.execute();

    expect(result).toEqual(
      expect.objectContaining({
        uptime: expect.any(Number),
      }),
    );
  });
});
