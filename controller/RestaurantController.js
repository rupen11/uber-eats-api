const Restaurants = require("../model/Restaurants");

module.exports.addrestaurant = async (req, res) => {
    try {
        const CreateRestaurants = new Restaurants(req.body);

        await CreateRestaurants.save();

        return res.status(200).json({
            success: true,
            message: "Restaurants created successfully.",
        });
    } catch (error) {
        return res.status(404).json(error);
    }
};

module.exports.restaurant = async (req, res) => {
    try {
        console.log("call");
        const restaurants = await Restaurants.find();

        return res.status(200).json({
            success: true,
            restaurants,
        });
    } catch (error) {
        return res.status(404).json(error);
    }
};
