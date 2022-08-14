const router = require("express").Router();
const { addmenuitem, getmenuitems } = require("../controller/MenuController");

router.route("/addmenuitem").post(addmenuitem);
router.route("/restaurant/menuitems/:restaurantId").get(getmenuitems);

module.exports = router;
