import ICreateSectionDTO from '@modules/sections/dtos/ICreateSectionDTO';
import { ISectionJS } from '@modules/sections/infra/mongoose/schemas/Section';
import ISectionsRepository from '../ISectionsRepository';

class FakeSectionsRepository implements ISectionsRepository {
  constructor(private database: ISectionJS[] = []) {}

  public async create({ name }: ICreateSectionDTO): Promise<ISectionJS> {
    const section: ISectionJS = {
      _id: Math.random().toString(36).substring(2, 7),
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.database.push(section);

    return section as ISectionJS;
  }

  public async findOne(sectionName: string): Promise<ISectionJS | undefined> {
    return this.database.find(section => section.name === sectionName);
  }
}

export default FakeSectionsRepository;
