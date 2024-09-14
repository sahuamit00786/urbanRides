import mongoose from 'mongoose';

const rentSchema = mongoose.Schema(
  {
    BikeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bike',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rentDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive',
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    totalHours: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'Completed'],
      default: 'pending',
    },
    increasedHour: {
      type: Number,
      default: 0,
    },
    delaycharges: {
      type: Number,
      default: 0,
    },
    PickupLocation: {
      lat: {
        type: Number, // Latitude as a Number
        required: true,
      },
      lng: {
        type: Number, // Longitude as a Number
        required: true,
      },
    },
    dropLocation: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
    userconfirmationOTP: {
      // starting me ek otp user ko bhej denge fir wahi otp user owner ko btayega fir we simply match.
      type: Number,
    },
    ownerConfirmationOTP: {
      // and jab bike uth jayegi rent pr to unavailable dikha denge
      type: Number,
    },
    rideCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true },
);

export const Rental = mongoose.model('Rental', rentSchema);
