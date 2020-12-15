import { container } from 'tsyringe';

import IHealthProvider from './models/IHealthProvider';
import NodeJSHealthProvider from './implementations/NodeJSHealthProvider';

const providers = {
  nodejs: NodeJSHealthProvider,
};

container.registerSingleton<IHealthProvider>(
  'HealthProvider',
  providers.nodejs,
);
