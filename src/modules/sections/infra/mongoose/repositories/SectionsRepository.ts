import { Model } from 'mongoose';

import ICreateSectionDTO from '@modules/sections/dtos/ICreateSectionDTO';
import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';

import Section, { ISectionDocument, ISectionJS } from '../schemas/Section';

class SectionRepository implements ISectionsRepository {
  private odmRepository: Model<ISectionDocument>;

  constructor() {
    this.odmRepository = Section;
  }

  public async create(sectionData: ICreateSectionDTO): Promise<ISectionJS> {
    const { name } = sectionData;

    const result = await this.odmRepository.create({
      name,
    });

    return result as ISectionJS;
  }
}

export default SectionRepository;
