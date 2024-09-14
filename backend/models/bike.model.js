import mongoose from 'mongoose';

const bikeSchema = mongoose.Schema(
  {
    bikeId: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    bikeName: {
      type: String,
      required: true,
    },
    bikeDescription: {
      type: String,
      required: true,
    },
    bikeType: {
      type: String,
      enum: ['electric', 'petrol'],
      required: true,
    },
    bikeStatus: {
      type: String,
      enum: ['available', 'unavailable'],
      default: 'available',
    },
    bikeImage: [
      {
        type: String,
        required: true,
      },
    ],
    bikePricePerHour: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bikeRating: {
      type: Number,
      default: 0,
    },
    bikeDocuments: {
      pollution: {
        type: String,
      },
      insurance: {
        type: String,
      },
    },
    isRented: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true },
);

export const Bike = mongoose.model('Bike', bikeSchema);
