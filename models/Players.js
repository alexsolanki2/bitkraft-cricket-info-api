const mongoose = require("mongoose");
const PlayerSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	imageURL: {
		type: String,
		required: true,
	},
	battingStyle: {
		type: String,
		required: true,
	},
	bowlingStyle: {
		type: String,
		required: true,
	},
	playerType: {
		type: String,
		required: true,
	},
	dob: {
		type: Date,
		required: true,
	},
	testDebutDate: {
		type: Date,
		required: true,
	},
	odiDebutDate: {
		type: Date,
		required: true,
	},
	t20DebutDate: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model("player", PlayerSchema);

// "playerId":5648
// "fullName":"Quinton de Kock (wk)"
// "firstName":"Quinton"
// "lastName":"de Kock"
// "imageURL":"https://www.cricket.com.au/-/media/Players/Men/International/South%20Africa/Quinton-de-Kock-CWC19.ashx"
// "battingStyle":"Left Hand"
// "bowlingStyle":"Does Not Bowl"
// "playerType":"Wicketkeeper"
// "dob":"1992-12-17T00:00:00Z"
// "testDebutDate":"2014-02-20T00:00:00Z"
// "odiDebutDate":"2013-01-19T00:00:00Z"
// "t20DebutDate":"2012-12-21T00:00:00Z"
