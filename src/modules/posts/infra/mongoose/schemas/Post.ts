import mongoose, { Schema, Document } from 'mongoose';

export interface IPostJS {
  _id?: string;
  name: string;
  covers: Array<string>;
  content: string;
  publishedAt?: Date;
  tags: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPostDocument extends Document {
  covers: Array<string>;
  content: string;
  name: string;
  publishedAt: Date;
  tags: Array<string>;
}

const PostSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    covers: {
      type: [String],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: Date,
      required: true,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true },
);

export default mongoose.model<IPostDocument>('Post', PostSchema);
