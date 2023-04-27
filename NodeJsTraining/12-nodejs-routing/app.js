const express = require('express');
const userRouter = require('./routes/user/index');
const app = express();

app.use(express.json());

app.use('/api/v1/user', userV1Router)
app.use('/api/v2/user', userV2Router)