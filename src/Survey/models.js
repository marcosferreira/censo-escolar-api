import mongoose from 'mongoose';

import { User } from '../User/models.js';

const SurveySchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    schoolname: {
      type: String,
      required: true,
    },
    number_of_residents: {
      type: String,
      required: true,
    },
    number_not_student: {
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

export const Survey = mongoose.model('Survey', SurveySchema);
