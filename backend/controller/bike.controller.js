import { Bike } from '../models/bike.model.js';
import fs from 'fs';

function bikeController() {
  return {
    addBike: async (req, res) => {
      try {
        const {
          bikeName,
          bikeDescription,
          bikeType,
          bikePricePerHour,
          address,
        } = req.body;
        console.log('files', req.files);

        if (
          !bikeName ||
          !bikeDescription ||
          !bikePricePerHour ||
          !bikeType ||
          !address
        ) {
          return res.status(400).json({ msg: 'Missing Fields' });
        }

        if (!req.files || req.files.length == 0) {
          return res.status(404).json({ msg: 'no file Uploaded' });
        }

        const imageData = req.files.map((image) => image.path);
        console.log('imageData', req.files);

        const newBike = await Bike.create({
          bikeName,
          bikeDescription,
          bikeType,
          bikePricePerHour,
          address,
          bikeImage: imageData,
        });

        if (!newBike) {
          return res.status(500).json({ msg: 'Bike Addition Failed' });
        }

        return res.status(201).json({ msg: 'Bike successfully added' });
      } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error' });
      }
    },

    updateBike: async (req, res) => {
      const { bikeName, bikeDescription, bikeType, bikePricePerHour, address } =
        req.body;

      try {
        // Find the bike by the document's _id
        const bike = await Bike.findOne({ bikeId: req.query.bikeId }); // Use findById instead of findOne({ bikeId })

        if (!bike) {
          return res.status(404).json({ msg: 'Bike not found' });
        }

        if (bikeName) bike.bikeName = bikeName;
        if (bikeDescription) bike.bikeDescription = bikeDescription;
        if (bikeType) bike.bikeType = bikeType;
        if (bikePricePerHour) bike.bikePricePerHour = bikePricePerHour;
        if (address) bike.address = address;

        if (req.files && req.files.length > 0) {
          // Delete old images
          bike.bikeImage.forEach((imagePath) => {
            fs.unlink(imagePath, (err) => {
              if (err) {
                console.error(`Error deleting file: ${fullImagePath}`, err);
              }
            });
          });

          // Update with new images
          const imageData = req.files.map((image) => image.path);
          bike.bikeImage = imageData;
        }

        const updatedBike = await bike.save();

        return res.status(200).json({
          msg: 'Bike details updated successfully',
          bike: updatedBike,
        });
      } catch (error) {
        console.error('Error updating bike:', error); // Log the error for debugging
        return res.status(500).json({ msg: 'Internal server error', error });
      }
    },

    statusUpdateForBike: async (req, res) => {
      const { bikeId } = req.body;
      try {
        const bike = await Bike.find({ bikeId });
        if (!bike) {
          return res.status(404).json({ msg: 'Bike not found' });
        }
        if (bike.status === 'available') {
          bike.status = 'unavailable';
        } else {
          bike.status = 'available';
        }

        await bike.save();
      } catch (error) {
        return res.status(500).json({ msg: 'Internal server error', error });
      }
    },

    Allbikes: async (req, res) => {
      try {
        const bikes = await Bike.find({});
        if (!bikes) {
          return res.status(404).json({ msg: 'Bike fetching failed' });
        }
        return res
          .status(201)
          .json({ msg: 'bikes fetched successfully', bikes });
      } catch (error) {
        return res.status(404).json({ msg: 'Internal server error' });
      }
    },

    bikeById: async (req, res) => {
      const { bikeId } = req.query;
      try {
        if (!bikeId) {
          return res.status(500).json({ msg: 'No bike id provided' });
        }
        const bike = await Bike.find({ bikeId });
        if (!bike) {
          return res.status(404).json({ msg: 'No bike found' });
        }
        return res.status(201).json({ msg: 'bike found', bike });
      } catch (error) {
        return res.status(500).json({ msg: 'internal server error', bike });
      }
    },

    uploadBikedocuments: async (req, res) => {
      const { bikeId } = req.query;
      try {
        if (!req.files || req.files.length === 0) {
          return res.status(404).json({ msg: 'No file Uploaded' });
        }
        const pollution = req.files['pollution']
          ? req.files['pollution']
          : null;
        const insurance = req.files['insurance']
          ? req.files['insurance']
          : null;

        if (!bikeId) {
          return res.status(404).json({ msg: 'Bike Id not provided' });
        }

        const bike = await Bike.findOne({ bikeId });
        if (!bike) {
          return res.status(404).json({ msg: 'No bike found' });
        }

        if (pollution) {
          bike.bikeDocuments.pollution = pollution[0].path;
        }

        console.log('bike', pollution[0].path);

        if (insurance) {
          bike.bikeDocuments.insurance = insurance[0].path;
        }

        const updated = await bike.save();
        if (!updated) {
          return res.status(400).json({ msg: 'cannot update the image' });
        }
        return res.status(201).json({ msg: 'image updated', updated });
      } catch (error) {
        return res.status(404).json({ msg: 'internal server error', error });
      }
    },
  };
}

export default bikeController;
