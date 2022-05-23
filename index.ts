require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.router";
import cors from "cors";
import { env } from "./utils/myVariables";
import customerRouter from "./routes/customer.router";

const app = express();

app.use(cors());

app.use(express.json());

const MONGODB = env.MONGODB;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB);
  } catch (error) {
    throw Error("Ket noi Database that bai !!!");
  }
};
connectDB().then(() => {
  console.log("Ket noi Database thanh cong !!!");
});

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", customerRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
