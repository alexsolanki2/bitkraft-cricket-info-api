const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require('express-validator');

const Tournament = require("../models/TournamentScoreTable");

// @route   GET api/tournament
// @desc    Get all Tournament Scores
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const tournament = await Tournament.find().sort({
			position: 1,
		});
		res.json(tournament);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/tournament
// @desc    Get one team score in the tournament 
// @access  Private
router.get("/:team", auth, async (req, res) => {
	try {
		const tournament = await Tournament.find({ name: req.params.team });
		res.json(tournament);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/tournament
// @desc    Add new team score in the tournament
// @access  Private
router.post(
	"/",
	[auth, [check("name", "Name is Required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			id,
      name,
      shortName,
      groupName,
      logoUrl,
      position,
      played,
      won,
      tied,
      lost,
      points,
      netRunRate
		} = req.body;

		try {
			const newTournament = new Tournament({
				id,
        name,
        shortName,
        groupName,
        logoUrl,
        position,
        played,
        won,
        tied,
        lost,
        points,
        netRunRate
			});

			const tournament = await newTournament.save();
			res.json(tournament);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
