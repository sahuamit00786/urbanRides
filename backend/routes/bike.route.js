import express from 'express';
import bikeController from '../controller/bike.controller.js';
import { upload } from '../config/multer.config.js';
const route = express.Router();

route.post('/addBike', upload, bikeController().addBike); //jab tak hum images nhi upload krenge tab tak is bike ko use nhi krna
route.post('/updateBike', upload, bikeController().updateBike);
route.post(
  '/statusUpdateForBike',
  upload,
  bikeController().statusUpdateForBike,
);
route.get('/Allbikes', bikeController().Allbikes);
route.get('/bikeById', bikeController().bikeById);
route.post(
  '/uploadBikedocuments',
  upload,
  bikeController().uploadBikedocuments,
);

export default route;
