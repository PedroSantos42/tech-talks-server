import { Model } from 'mongoose';

import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';

import Post, { IPostDocument, IPostJS } from '../schemas/Post';

class PostRepository implements IPostsRepository {
  private odmRepository: Model<IPostDocument>;

  constructor() {
    this.odmRepository = Post;
  }

  public async create(postData: ICreatePostDTO): Promise<IPostJS> {
    const { name, content, covers, publishedAt, tags } = postData;

    const result = await this.odmRepository.create({
      name,
      content,
      covers,
      publishedAt,
      tags,
    });

    return result as IPostJS;
  }
}

export default PostRepository;
