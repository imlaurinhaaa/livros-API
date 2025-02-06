const express = require("express");
const cors = require("cors");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", bookRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando ✌ ${PORT}`);
});