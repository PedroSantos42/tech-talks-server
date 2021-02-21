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
    const section = await this.sectionsRepository.findByName(name);

    if (section) {
      return section;
    }

    const createdSection = await this.sectionsRepository.create({
      name,
    });

    return createdSection;
  }
}

export default CreateSectionService;
