const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Result = require("../models/Results");

// @route   GET api/countries
// @desc    Get all countries
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const results = await Result.find().sort({
			id: 1,
		});
		res.json(results);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   GET api/results
// @desc    Get one Result
// @access  Private
router.get("/:date", auth, async (req, res) => {
	try {
		const results = await Result.find({ date: req.params.date });
		res.json(results);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route   POST api/results
// @desc    Add new Result
// @access  Private
router.post(
	"/",
	[auth, [check("winner", "Winner is Required").not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			id,
			season,
			city,
			date,
			team1,
			team2,
			toss_winner,
			toss_decision,
			result,
			dl_applied,
			winner,
			win_by_runs,
			win_by_wickets,
			player_of_match,
			venue,
			umpire1,
			umpire2,
			umpire3,
		} = req.body;

		try {
			const newResult = new Result({
				id,
				season,
				city,
				date,
				team1,
				team2,
				toss_winner,
				toss_decision,
				result,
				dl_applied,
				winner,
				win_by_runs,
				win_by_wickets,
				player_of_match,
				venue,
				umpire1,
				umpire2,
				umpire3,
			});

			const results = await newResult.save();
			res.json(results);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
