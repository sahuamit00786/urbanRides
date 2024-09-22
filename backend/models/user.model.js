import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    currentRentedBike: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bike',
    },
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental',
      },
    ],
    profileImage: {
      type: String,
    },
    userType: {
      type: String,
      enum: ['User', 'Admin'],
      default: 'User',
    },
    address: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    alternatePhone: {
      type: String,
    },
    document: {
      aadhar: {
        name: {
          type: String,
        },
        photo: {
          type: String,
        },
      },
      drivingLicense: {
        name: {
          type: String,
        },
        photo: {
          type: String,
        },
        drivingLicenseNumber: {
          type: Number,
        },
      },
    },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);
