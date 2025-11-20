import express, { Application } from "express";
import dotenv from "dotenv";
import Router from "./routes/index";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

import { connectMongo } from "./config/database";

dotenv.config();

const app: Application = express();
app.use(express.json());

// Routes
app.use("/api/v1", Router);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const startServer = async () => {
  await connectMongo(); // ✅ Connect MongoDB first
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📚 Swagger: http://localhost:${PORT}/api-docs`);
  });
};

startServer();
