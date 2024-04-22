const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ErrorHandler
app.use(errorHandler);

//Routes
app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/messages/", require("./routes/messageRoutes"));

//Server Listener
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
