import { inject, injectable } from 'tsyringe';

import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';
import { ISection } from '@modules/sections/infra/mongoose/schemas/Section';

interface IRequest {
  name: string;
}

@injectable()
class CreateSectionService {
  constructor(
    @inject('SectionsRepository')
    private sectionsRepository: ISectionsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<ISection> {
    const result = await this.sectionsRepository.create({
      name,
    });

    return result;
  }
}

export default CreateSectionService;
