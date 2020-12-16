import { inject, injectable } from 'tsyringe';

import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';
import { ISectionJS } from '@modules/sections/infra/mongoose/schemas/Section';

interface IRequest {
  name: string;
}

@injectable()
class CreateSectionService {
  constructor(
    @inject('SectionsRepository')
    private sectionsRepository: ISectionsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<ISectionJS> {
    const result = await this.sectionsRepository.create({
      name,
    });

    return result;
  }
}

export default CreateSectionService;
