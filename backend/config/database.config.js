import mongoose from "mongoose";
// @Mitsahu

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://sahuamit00786:%40Mitsahu@cluster0.k92c9.mongodb.net/bikerental?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(`error connecting to database ${err}`)
})
}

