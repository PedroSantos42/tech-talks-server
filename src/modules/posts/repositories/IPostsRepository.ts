import ICreatePostDTO from '../dtos/ICreatePostDTO';
import { IPostJS } from '../infra/mongoose/schemas/Post';

export default interface IPostRepository {
  create(postData: ICreatePostDTO): Promise<IPostJS>;
}
