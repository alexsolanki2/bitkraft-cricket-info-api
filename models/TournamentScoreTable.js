const mongoose = require("mongoose");
const ScoreTableSchema = mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	shortName: {
		type: String,
		required: true,
	},
	groupName: {
		type: String,
	},
	logoUrl: {
		type: String,
	},
	position: {
		type: String,
		required: true,
	},
	played: {
		type: Number,
	},
	won: {
		type: Number,
		required: true,
	},
	tied: {
		type: Number,
	},
	lost: {
		type: Number,
		required: true,
	},
	points: {
		type: Number,
		required: true,
	},
	netRunRate: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("scoreTable", ScoreTableSchema);
