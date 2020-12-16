import mongoose, { Schema, Document } from 'mongoose';

export interface ISectionJS {
  _id?: string;
  name: string;
}

export interface ISectionDocument extends Document {
  name: string;
}

const SectionSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<ISectionDocument>('Section', SectionSchema);
