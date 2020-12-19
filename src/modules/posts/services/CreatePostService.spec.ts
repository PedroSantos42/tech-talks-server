import { IPostJS } from '../infra/mongoose/schemas/Post';
import FakePostsRepository from '../repositories/fakes/FakePostsRepository';

import CreatePostService from './CreatePostService';

describe('Posts', () => {
  it('should be able to create a new post', async () => {
    const post: IPostJS = {
      name: 'AWS vs Azure',
      content: 'Batalha de Cloud mais incrível do mundo!',
      covers: ['Capa 1', 'Capa 2', 'Capa 3'],
      tags: ['infra', 'cloud', 'aws', 'azure'],
    };

    const fakePostsRepository = new FakePostsRepository();

    const createSection = new CreatePostService(fakePostsRepository);

    const result = await createSection.execute(post);

    expect(result).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        name: expect.stringContaining(post.name),
        content: expect.stringContaining(post.content),
        covers: expect.arrayContaining(post.covers),
        publishedAt: expect.any(Date),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      }),
    );

    expect(result.name).toEqual(post.name);
  });
});
