const { logErrorMiddleware, returnError } = require('./errorHandler')

app.post("/user", async (req, res, next) => {
  try {
    const newUser = User.create(req.body);
  } catch (error) {
    next(error);
  }
});


app.use(logErrorMiddleware)
app.use(returnError)