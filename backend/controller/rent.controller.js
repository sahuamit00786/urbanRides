import { Bike } from '../models/bike.model.js';
import { Rental } from '../models/Rent.model.js';
import { User } from '../models/user.model.js';

function rentController() {
  return {
    addRental: async (req, res) => {
      const { bikeId, userId } = req.params;
      const { totalHours, PickupLocation } = req.body;
      const { latitude, longitude } = PickupLocation;

      const user = await User.findById(userId);
      console.log('user', user);

      if (user.currentRentedBike) {
        return res.status(401).json({ msg: 'User already have a rented bike' });
      }
      // if (user.document.length < 2 || user.document.length != 2) {
      //   return res.status(401).json({ msg: 'Your documents are not uploaded' });
      // }

      if (!totalHours || !PickupLocation) {
        return res.status(404).json({ msg: 'No PickupLocation or Hours' });
      }

      try {
        const bikeDetail = await Bike.findById(bikeId);
        if (!bikeDetail) {
          return res.status(400).json({ msg: 'Bike not found' });
        }

        if (bikeDetail.isRented) {
          return res.status(400).json({ msg: 'Sorry bike is not available' });
        }

        const rentBike = await Rental.create({
          BikeId: bikeDetail._id,
          userId,
          pricePerHour: bikeDetail.bikePricePerHour,
          totalHours,
          rentDate: new Date(),
          amount: bikeDetail.bikePricePerHour * totalHours,
          PickupLocation: {
            lat: latitude,
            lng: longitude,
          },
          paymentStatus: 'pending',
        });

        if (rentBike) {
          bikeDetail.isRented = true;
          await bikeDetail.save();
          user.currentRentedBike = rentBike._id;
          await user.save();
        }

        console.log('rentBike: ', rentBike);

        const rentedBike = await Rental.findById(rentBike._id)
          .populate('BikeId')
          .populate('userId');

        return res
          .status(201)
          .json({ msg: 'Bike Rented Successfully', rentedBike });
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    },
    cancelRental: async (req, res) => {
      const { rentId } = req.params;
    },
  };
}

export default rentController;
