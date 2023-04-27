/**
 * app.js
 */
 const app = express();

 app.use(bodyParser.json());
 app.use("/api/events", events.API);
 app.use("/api/forms", forms);