import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import { IPostJS } from '@modules/posts/infra/mongoose/schemas/Post';
import IPostsRepository from '../IPostsRepository';

class FakePostsRepository implements IPostsRepository {
  constructor(private database: IPostJS[] = []) {}

  public async create(PostData: ICreatePostDTO): Promise<IPostJS> {
    const { name, content, covers, publishedAt, tags } = PostData;

    const post: IPostJS = {
      _id: Math.random().toString(36).substring(2, 7),
      name,
      content,
      covers,
      publishedAt: publishedAt || new Date(Date.now() + 7),
      createdAt: new Date(),
      updatedAt: new Date(),
      tags,
    };

    this.database.push(post);

    return post;
  }
}

export default FakePostsRepository;
