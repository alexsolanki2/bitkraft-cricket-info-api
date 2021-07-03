const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Venue = require("../models/Venue");

// @route   GET api/venue
// @desc    Get all venues
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const venue = await Venue.find().sort({
			name: 1,
		});
		res.json(venue);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/venue
// @desc    Get one venue
// @access  Private
router.get("/:venue", auth, async (req, res) => {
	try {
		const venue = await Venue.find({ name: req.params.venue });
		res.json(venue);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/venue
// @desc    Add new Venue
// @access  Private
router.post(
	"/",
	[auth, [check("name", "Name is Required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, city, state, capacity } = req.body;

		try {
			const newVenue = new Venue({
				name,
				city,
				state,
				capacity,
			});

			const venue = await newVenue.save();
			res.json(venue);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
