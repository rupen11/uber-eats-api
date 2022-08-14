const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: "",
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Menuitems", MenuSchema);
