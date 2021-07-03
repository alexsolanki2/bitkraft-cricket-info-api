const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require('express-validator');

const Team = require("../models/Teams");

// @route   GET api/teams
// @desc    Get all team names
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const team = await Team.find().sort({
			teamName: 1,
		});
		let data = '';
		team.forEach(t => {
			data += t.teamName + ' \n'
		});
		res.send(data);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/teams/profile
// @desc    Get all teams details
// @access  Private
router.get("/profile", auth, async (req, res) => {
	try {
		const team = await Team.find().sort({
			teamName: 1,
		});
		res.json(team);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/teams/profile
// @desc    Get one team
// @access  Private
router.get("/profile/:team", auth, async (req, res) => {
	try {
		const team = await Team.find({ teamName: req.params.team });
		res.json(team);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
	"/profile/",
	[auth, [check("teamName", "Name is Required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			teamName,
      captain,
      played,
      won,
      lost,
      iplWin
		} = req.body;

		try {
			const newTeam = new Team({
				teamName,
        captain,
        played,
        won,
        lost,
        iplWin
			});

			const team = await newTeam.save();
			res.json(team);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
