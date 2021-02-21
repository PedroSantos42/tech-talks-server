import { Model } from 'mongoose';

import ICreateSectionDTO from '@modules/sections/dtos/ICreateSectionDTO';
import ISectionsRepository from '@modules/sections/repositories/ISectionsRepository';

import Section, { ISectionDocument, ISectionJS } from '../schemas/Section';

class SectionRepository implements ISectionsRepository {
  private odmRepository: Model<ISectionDocument>;

  constructor() {
    this.odmRepository = Section;
  }

  public async create({ name }: ICreateSectionDTO): Promise<ISectionJS> {
    const result = await this.odmRepository.create({
      name,
    });

    return result as ISectionJS;
  }

  public async findOne(sectionName: string): Promise<ISectionJS | undefined> {
    const section = await this.odmRepository.findOne({
      name: sectionName,
    });

    if (!section) {
      return undefined;
    }

    return section as ISectionJS;
  }
}

export default SectionRepository;
