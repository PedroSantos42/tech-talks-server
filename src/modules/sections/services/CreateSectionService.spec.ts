import { ISectionJS } from '../infra/mongoose/schemas/Section';
import FakeSectionsRepository from '../repositories/fakes/FakeSectionsRepository';

import CreateSectionService from './CreateSectionService';

describe('SendHealthStatus', () => {
  it('should be able to create a new section', async () => {
    const section: ISectionJS = {
      name: 'Cloud Computing',
    };

    const fakeSectionsRepository = new FakeSectionsRepository();

    const createSection = new CreateSectionService(fakeSectionsRepository);

    const result = await createSection.execute(section);

    expect(result).toEqual(
      expect.objectContaining({
        _id: expect.any(String),
        name: expect.stringContaining(section.name),
      }),
    );

    expect(result.name).toEqual(section.name);
  });
});
