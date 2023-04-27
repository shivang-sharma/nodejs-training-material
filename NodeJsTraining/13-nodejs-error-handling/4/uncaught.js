const { logError, isOperationalError } = require("../2/errorHandler");

process.on("uncaughtException", (error) => {
  logError(error);

  if (!isOperationalError(error)) {
    process.exit(1);
  }
});
