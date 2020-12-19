export default interface ICreatePostDTO {
  name: string;
  covers: Array<string>;
  content: string;
  publishedAt: Date;
  tags: Array<string>;
}
