const mongoose = require("mongoose");
const VenueSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	capacity: {
		type: Number,
		required: true,
	}
});

module.exports = mongoose.model("venue", VenueSchema);
