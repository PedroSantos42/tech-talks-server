import ICreateSectionDTO from '../dtos/ICreateSectionDTO';
import { ISection } from '../infra/mongoose/schemas/Section';

export default interface ISectionsRepository {
  create(sectionData: ICreateSectionDTO): Promise<ISection>;
}
