const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true,
        default:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    reviews: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    servicetype: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);
