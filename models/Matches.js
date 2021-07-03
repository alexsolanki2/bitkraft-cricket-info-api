const mongoose = require("mongoose");
const MatchSchema = mongoose.Schema({
	matchList: {
		type: Object,
		id: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},

	summary: {
		teamDetails: {
			type: Array,
			id: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			wicket: {
				type: String,
				required: true,
			},
			run: {
				type: String,
				required: true,
			},
			over: {
				type: String,
				required: true,
			},
			extra: {
				type: String,
			},
			bye: {
				type: String,
			},
			legBye: {
				type: String,
			},
			wide: {
				type: String,
			},
			noBall: {
				type: String,
			},
			runRate: {
				type: String,
			},
			requiredRunRate: {
				type: String,
			},
		},
		winner: {
			type: String,
			required: true,
		},
		looser: {
			type: String,
			required: true,
		},
		manOfTheMatch: {
			type: Object,
			required: true,
			id: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			runs: {
				type: String,
			},
			balls: {
				type: String,
			},
			strikeRate: {
				type: String,
			},
			fowOrder: {
				type: String,
			},
		},
		bowlerOfTheMatch: {
			type: Object,
			required: true,
			id: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			runsConceded: {
				type: String,
			},
			wickets: {
				type: String,
			},
			overs: {
				type: String,
			},
			economy: {
				type: String,
			},
		},
		bestFielder: {
			type: String,
			required: true,
		},
	},
});

module.exports = mongoose.model("match", MatchSchema);

// @JSON DATA

// 	"matchList": {
// 			"id": "1445",
// 			"name": "England v New Zealand ODI Series 2015"
// 	},
// 	"summary": {
// 		"teamDetails": [{
// 			"id": 2, 
// 			"name":"1st Inn New Zealand ", 
// 			"wicket":"7", 
// 			"run":"306",
// 			"over":"49.0",
// 			"extra":"18",
// 			"bye":"0",
// 			"legBye":"6",
// 			"wide":"12",
// 			"noBall":"0",
// 			"runRate":"6.240",
// 			"requiredRunRate":"-3.00"
// 		},
// 		{
// 			"id":1,
// 			"name":"1st Inn England ",
// 			"wicket":"10",
// 			"run":"302",
// 			"over":"45.2",
// 			"extra":"19",
// 			"bye":"0",
// 			"legBye":"5",
// 			"wide":"14",
// 			"noBall":"0",
// 			"runRate":"6.680",
// 			"requiredRunRate":""
// 		}],
// 		"winner": "New Zealand",
// 		"looser": "England",
// 		"manOfTheMatch": {
// 			"id":4637,
// 			"name":"K.S. Williamson",
// 			"runs":"118",
// 			"balls":"113",
// 			"strikeRate":"104.42",
// 			"fowOrder":0
// 		},
// 		"bowlerOfTheMatch": {
// 			"id":3652,
// 			"name":"T.G. Southee",
// 			"runsConceded":"44",
// 			"wickets":"3",
// 			"overs":"8.2",
// 			"economy":"5.37"
// 		},
// 		"bestFielder": "M.S Dhoni"
// 	}