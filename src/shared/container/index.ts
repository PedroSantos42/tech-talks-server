import { container } from 'tsyringe';

import './providers';

import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';
import SectionsRepository from '@modules/sections/infra/mongoose/schemas/Section';

container.registerInstance<ISectionsRepository>(
  'SectionsRepository',
  SectionsRepository,
);
