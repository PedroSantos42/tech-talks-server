import { inject, injectable } from 'tsyringe';

import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import { IPostJS } from '@modules/posts/infra/mongoose/schemas/Post';

interface IRequest {
  name: string;
  covers: Array<string>;
  content: string;
  publishedAt?: Date;
  tags: Array<string>;
}

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute({
    name,
    content,
    covers,
    tags,
    publishedAt = new Date(Date.now() + 2),
  }: IRequest): Promise<IPostJS> {
    const result = await this.postsRepository.create({
      name,
      content,
      covers,
      publishedAt,
      tags,
    });

    return result;
  }
}

export default CreatePostService;
