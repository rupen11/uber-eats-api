const Menuitems = require("../model/Menuitems");

module.exports.addmenuitem = async (req, res) => {
    try {
        const createMenuItem = new Menuitems(req.body);

        await createMenuItem.save();

        res.status(200).json({
            success: true,
            message: "Menu item created successfully",
        });
    } catch (error) {
        return res.status(404).json({ success: false, messsage: error });
    }
};

module.exports.getmenuitems = async (req, res) => {
    try {
        const menuitems = await Menuitems.find({
            restaurantId: req.params.restaurantId,
        });

        if (menuitems.length === 0)
            return res
                .status(404)
                .json({ success: false, message: "No Menuitems found" });

        return res.status(200).json({ success: true, message: menuitems });
    } catch (error) {
        return res.status(404).json({ success: false, messsage: error });
    }
};
