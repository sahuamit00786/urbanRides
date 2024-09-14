import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  currentRentedBike: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Bike'
  },
  history: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Rental'  
  }],
  profileImage: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["User", "Admin"],
    default: "User"
  },
  address: {
    type: String,
  },
  name: {
    type: String,
    required:true
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required:true
  },
  alternatePhone: {
    type: String,
    unique:false
  },
  document: {
    aadhar: {
      name: {
        type: String,
      },
      photo: {
        type:String
      },
      aadharNumber: {
        type: Number,
        unique:true
      }
    },
    drivingLicense: {
      name: {
        type: String,
      },
      photo: {
        type: String
      },
      drivingLicenseNumber: {
        type: Number,
        unique: true
      }
    }
  }

},{timestamps:true})

export const User = mongoose.model("User",userSchema)
