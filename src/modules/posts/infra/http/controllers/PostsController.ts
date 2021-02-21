import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';

import CreateSectionService from '@modules/sections/services/CreateSectionService';

class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, content, covers, tags, publishedAt } = request.body;

    const sectionTitle = request.body.section.name;

    const createPost = container.resolve(CreatePostService);

    const createSection = container.resolve(CreateSectionService);

    const post = await createPost.execute({
      name,
      content,
      covers,
      tags,
      publishedAt,
    });

    await createSection.execute({
      name: sectionTitle,
    });

    return response.status(201).json(post);
  }
}

export default PostsController;
