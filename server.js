const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget_tracker";

const app = express();

// app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

// is 27017 for Mongoose?
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/budget_tracker', {
  useNewUrlParser: true,
  // useFindAndModify: false,
  // useUnifiedTopology: true
});

// routes
// app.use(require("./Develop/routes/api"));
app.use('/api', require('./Develop/routes/api.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});