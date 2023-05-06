const express = require("express");
const app = express();
const port = 8000;

require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({}));

const AllMyRoutes = require("./routes/joke.routes");
AllMyRoutes(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));