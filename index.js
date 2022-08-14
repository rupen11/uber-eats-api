const express = require("express");
const cors = require("cors");
const RestaurantRouter = require("./router/RestaurantRouter");
const MenuitemsRouter = require("./router/MenuitemsRouter");

const app = express();
const port = process.env.PORT || 8000;

require("./db/db");
app.use(cors());
app.use(express.json());
app.use("/api/menuitems", MenuitemsRouter);
app.use("/api/restaurants", RestaurantRouter);

app.get("/", (req, res) => {
    return res.status(200).json("Hello from uber-eats-api");
});

app.listen(port, () => {
    console.log("App listening on port " + port);
});
