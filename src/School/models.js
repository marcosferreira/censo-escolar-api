import { Schema, model } from 'mongoose';

import { User } from '../User/models';

const SchoolSchema = new Schema(
  {
    schoolname: {
      type: String,
      required: true,
    },
    inep: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  },
);

export const School = model('School', SchoolSchema);
