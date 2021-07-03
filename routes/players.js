const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Player = require("../models/Players");

// @route   GET api/players
// @desc    Get all players
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const player = await Player.find().sort({
			fullname: 1,
		});

		let data = '';
		player.forEach(p => {
			data += p.fullName + ' \n'
		})

		res.send(data);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/players/profile
// @desc    Get all players profile
// @access  Private
router.get("/profile", auth, async (req, res) => {
	try {
		const player = await Player.find().sort({
			fullname: 1,
		});
		res.json(player);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/players
// @desc    Get one player
// @access  Private
router.get("/profile/:player", auth, async (req, res) => {
	try {
		const player = await Player.find({ fullName: req.params.player });
		res.json(player);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
	"/",
	[auth, [check("fullName", "Name is Required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			fullName,
			firstName,
			lastName,
			imageURL,
			battingStyle,
			bowlingStyle,
			playerType,
			dob,
			testDebutDate,
			odiDebutDate,
			t20DebutDate,
		} = req.body;

		try {
			const newPlayer = new Player({
				fullName,
				firstName,
				lastName,
				imageURL,
				battingStyle,
				bowlingStyle,
				playerType,
				dob,
				testDebutDate,
				odiDebutDate,
				t20DebutDate,
			});

			const player = await newPlayer.save();
			res.json(player);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
