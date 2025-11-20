import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AgriConnect API",
      version: "1.0.0",
      description: "API documentation for AgriConnect",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // path to your route files with swagger comments
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
