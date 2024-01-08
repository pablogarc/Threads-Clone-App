import moongose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  moongose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("DB URL not found");
  if (isConnected) return console.log("Already connected to DB");

  try {
    await moongose.connect(process.env.MONGODB_URL);
    isConnected = true;
    
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
