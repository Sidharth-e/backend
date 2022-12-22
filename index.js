require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const fetchRoutes = require("./routes/fetch");
const adminRoutes = require("./routes/admin");
const removeRoutes = require("./routes/remove");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/fetch", fetchRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/remove", removeRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
