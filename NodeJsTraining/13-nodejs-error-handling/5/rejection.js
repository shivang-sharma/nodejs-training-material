/**
 * Promise rejections in Node.js only cause warnings.
 * You want them to throw errors, so you can handle them properly.
 *
 * It is goog practice that we attach  listener to below event
 * because this let us throw an error properly.
 */

process.on("unhandledRejection", callback);

const user = User.getUserById(req.params.id).then((user) => user);
// missing a .catch() block

// if the Promise is rejected this will catch it
process.on("unhandledRejection", (error) => {
  throw error;
});

process.on("uncaughtException", (error) => {
  logError(error);

  if (!isOperationalError(error)) {
    process.exit(1);
  }
});
