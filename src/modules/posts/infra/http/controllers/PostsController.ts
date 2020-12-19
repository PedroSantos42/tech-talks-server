import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';

class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, content, covers, tags, publishedAt } = request.body;

    const createPost = container.resolve(CreatePostService);

    const post = await createPost.execute({
      name,
      content,
      covers,
      tags,
      publishedAt,
    });

    return response.status(201).json(post);
  }
}

export default PostsController;
