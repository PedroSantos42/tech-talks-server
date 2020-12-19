import { container } from 'tsyringe';

import './providers';

import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';
import SectionsRepository from '@modules/sections/infra/mongoose/schemas/Section';

import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import PostsRepository from '@modules/posts/infra/mongoose/schemas/Post';

container.registerInstance<ISectionsRepository>(
  'SectionsRepository',
  SectionsRepository,
);

container.registerInstance<IPostsRepository>(
  'PostsRepository',
  PostsRepository,
);
