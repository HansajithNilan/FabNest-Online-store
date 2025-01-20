import express from "express";
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";
import cors from "cors";
import RegisterModel from "./models/UserRegister.js";
import TeddyRoutes from "./Routes/TeddyRoute.js";
import SlippersRoutes from "./Routes/SlippersRoute.js";
import FlowerRoutes from "./Routes/FlowersRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import Teddy from "./Routes/Teddy.js";
import Flower from "./Routes/Flower.js";
import Slipper from "./Routes/Slipper.js";


const app = express();
app.use(express.json());
app.use(cors());

app.use("/flower", Flower);
app.use("/slipper", Slipper);
app.use("/teddies", Teddy);
app.use("/teddy", TeddyRoutes);
app.use("/slippers", SlippersRoutes);
app.use("/flowers", FlowerRoutes);
app.use("/user", UserRoute);



process.env.MONGO_URL

app.listen(5000, () => {
  connectDB();
  console.log("Server Started at http://localhost:5000");
});

//post method
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});



