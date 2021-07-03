const mongoose = require("mongoose");
const TeamSchema = mongoose.Schema({
	teamName: {
		type: String,
		required: true,
	},
	captain: {
		type: String,
		required: true,
	},
	played: {
		type: Number,
		required: true,
	},
	won: {
		type: Number,
		required: true,
	},
	lost: {
		type: Number,
		required: true,
	},
	iplWin: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model("team", TeamSchema);

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
