const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "take a picture",
      description:
        "AI를 이용한 마케팅 이미지 생성 서비스",
    },
    server: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./routers/*.js", "./swagger/*"],
};

const specs = swaggerJsdoc(options);
module.exports = {
  swaggerUi,
  specs,
};