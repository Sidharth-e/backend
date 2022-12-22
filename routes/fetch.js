const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		res.status(200).send({ data: user.firstName, message: "Username" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
module.exports = router;
