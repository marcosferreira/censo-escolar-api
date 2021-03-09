import { Schema, model } from 'mongoose';

import { User } from '../User/models';

const SurveySchema = new Schema(
  {
    district: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    home_num: {
      type: String,
      required: true,
    },
    electrical_power_unit: {
      type: String,
      required: true,
    },
    number_of_residents: {
      type: Number,
      required: true,
    },
    residents: [
      {
        fullname: {
          type: String,
          required: true,
        },
        survey: [
          {
            label: {
              type: String,
            },
            value: {
              type: [String],
            },
          },
        ],
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  },
);

export const Survey = model('Survey', SurveySchema);
