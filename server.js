const express = require("express");

const connectDB = require("./config/db");
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//db connection
connectDB();

// Inti Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Define Routes
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Running on " + PORT));
