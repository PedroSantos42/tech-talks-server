import ICreateSectionDTO from '@modules/sections/dtos/ICreateSectionDTO';
import { ISectionJS } from '@modules/sections/infra/mongoose/schemas/Section';
import ISectionsRepository from '../ISectionsRepository';

class FakeSectionsRepository implements ISectionsRepository {
  constructor(private database: ISectionJS[] = []) {}

  public async create(sectionData: ICreateSectionDTO): Promise<ISectionJS> {
    const { name } = sectionData;

    const section = {
      _id: Math.random().toString(36).substring(2, 7),
      name,
    };

    this.database.push(section);

    return section as ISectionJS;
  }
}

export default FakeSectionsRepository;
