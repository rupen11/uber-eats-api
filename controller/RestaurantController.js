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
        let restaurants;

        if (req.query.city) {
            restaurants = await Restaurants.find({
                city: req.query.city,
            });

            if (restaurants.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No Restaurant are available for this city",
                });
            }
        } else {
            restaurants = await Restaurants.find();
        }

        return res.status(200).json({
            success: true,
            restaurants,
        });
    } catch (error) {
        return res.status(404).json(error);
    }
};
