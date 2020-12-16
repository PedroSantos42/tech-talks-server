import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSectionService from '@modules/sections/services/CreateSectionService';

class SectionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSection = container.resolve(CreateSectionService);

    const section = await createSection.execute({
      name,
    });

    return response.status(201).json(section);
  }
}

export default SectionsController;
