import mongoose from 'mongoose';

const bikeSchema = new mongoose.Schema(
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
    transmission: {
      type: String,
      enum: ['manual', 'automatic', 'semi-automatic'],
      required: true,
    },
    seatCapacity: {
      type: Number,
      default: 2,
    },
    dayPackage: {
      type: Number,
      default: 2500,
    },
    weeklyPackage: {
      type: Number,
      default: 1000,
    },
    securityMoney: {
      type: Number,
      default: 2500,
    },
    fuelEfficiency: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    engineCapacity: {
      type: String,
      required: true,
    },
    features: {
      hasABS: {
        type: Boolean,
        default: false,
      },
      hasGPS: {
        type: Boolean,
        default: false,
      },
      hasBluetooth: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true },
);

export const Bike = mongoose.model('Bike', bikeSchema);
