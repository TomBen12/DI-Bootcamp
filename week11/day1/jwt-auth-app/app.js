require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);



// Example of a protected route
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, you are authenticated!` });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
