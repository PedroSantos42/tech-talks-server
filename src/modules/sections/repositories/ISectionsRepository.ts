import ICreateSectionDTO from '../dtos/ICreateSectionDTO';
import { ISectionJS } from '../infra/mongoose/schemas/Section';

export default interface ISectionsRepository {
  create(sectionData: ICreateSectionDTO): Promise<ISectionJS>;
  findOne(sectionName: string): Promise<ISectionJS | undefined>;
}
