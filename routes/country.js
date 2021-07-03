const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Country = require("../models/Country");

// @route   GET api/countries
// @desc    Get all countries
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const country = await Country.find().sort({
			name: 1,
		});
		res.json(country);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/countries
// @desc    Get one country
// @access  Private
router.get("/:country", auth, async (req, res) => {
	try {
		const country = await Country.find({ name: req.params.country });
		res.json(country);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/countries
// @desc    Add new country
// @access  Private
router.post(
	"/",
	[auth, [check("name", "Name is Required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name } = req.body;

		try {
			const newCountry = new Country({
				name,
			});

			const country = await newCountry.save();
			res.json(country);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
