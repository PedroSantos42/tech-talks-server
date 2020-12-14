export default interface IHealthProvider {
  getServerUptime(): Promise<number>;
}
