import mongoose from 'mongoose';

import { User } from '../User/models.js';

const SchoolSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  },
);

export const School = mongoose.model('School', SchoolSchema);
