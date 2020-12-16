import { Model } from 'mongoose';

import ICreateSectionDTO from '@modules/sections/dtos/ICreateSectionDTO';
import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';

import Section, { ISection } from '../schemas/Section';

class SectionRepository implements ISectionsRepository {
  private odmRepository: Model<ISection>;

  constructor() {
    this.odmRepository = Section;
  }

  public async create(sectionData: ICreateSectionDTO): Promise<ISection> {
    const { name } = sectionData;

    const result = await this.odmRepository.create({
      name,
    });

    return result;
  }
}

export default SectionRepository;
