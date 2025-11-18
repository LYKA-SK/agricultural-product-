import dotenv from "dotenv";

dotenv.config();

export const environment = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://binlyka83_db_user:IqquxbC3TBFdN8O6@cluster0.sadgtrj.mongodb.net/AgriConnect",
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
  NODE_ENV: process.env.NODE_ENV || "development",
};
