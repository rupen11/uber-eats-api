const router = require("express").Router();
const {
    addrestaurant,
    restaurant,
} = require("../controller/RestaurantController");

router.route("/addrestaurant").post(addrestaurant);
router.route("/restaurants").get(restaurant);

module.exports = router;
