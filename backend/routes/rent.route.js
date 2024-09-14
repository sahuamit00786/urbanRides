import express from 'express';
import rentController from '../controller/rent.controller.js';
const route = express.Router();

route.post('/initiateRent/:bikeId/:userId', rentController().addRental);

export default route;
