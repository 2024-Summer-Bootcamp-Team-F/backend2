const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//swagger 모듈 참조하기
const { swaggerUi, specs } = require("./swagger/swagger");

//swagger 모듈 호출하기
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//사용자 라우터 연결
const usersRouter = require("./routes/users");
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
