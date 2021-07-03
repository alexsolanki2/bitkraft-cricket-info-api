const mongoose = require("mongoose");
const ResultSchema = mongoose.Schema({
		id: {
			type: Number,
			required: true
		},
    season: {
			type: Number,
			required: true
		},
    city: {
			type: String,
		},
    date: {
			type: Date,
			required: true
		},
    team1:{
			type: String,
			required: true
		},
    team2:{
			type: String,
			required: true
		},
    toss_winner:{
			type: String,
		},
    toss_decision: {
			type: String,
		},
    result:{
			type: String,
		},
    dl_applied: {
			type: Number,
			required: true
		},
    winner:{
			type: String,
			required: true
		},
    win_by_runs: {
			type: Number,
			required: true
		},
    win_by_wickets: {
			type: Number,
			required: true
		},
    player_of_match: {
			type: String,
		},
    venue:{
			type: String,
		},
    umpire1:{
			type: String,
		},
    umpire2:{
			type: String,
		},
    umpire3: {
			type: String,
		},
});

module.exports = mongoose.model("result", ResultSchema);
