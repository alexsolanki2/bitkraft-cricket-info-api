const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const { check, validationResult } = require("express-validator");

const Match = require("../models/Matches");

// @route   GET api/Matches
// @desc    Get all Matches
// @access  Private
router.get("/list", auth, async (req, res) => {
	try {
		const match = await Match.find();

		let data = "";
		match.forEach((p) => {
			data += p.matchList.name + " \n";
		});

		res.send(data);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/players/profile
// @desc    Get all players profile
// @access  Private
router.get("/summary", auth, async (req, res) => {
	try {
		const match = await Match.find();
		res.json(match);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
