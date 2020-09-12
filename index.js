const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const TodoRoutes = require("./routes/TodoRoutes.js");

app.use(express.json());

dotenv.config({ path: "./config.env" });

app.use("/api/v1/todo", TodoRoutes);

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("succes"));

app.listen(process.env.PORT, () => {
  console.log(`connected ${process.env.PORT}`);
});
