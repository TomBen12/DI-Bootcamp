const express = require("express");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(express.json());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
