const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: true,
			maxlength: 10,
			unique: true,
		},
		description: {
			type: String,
			required: true,
			maxlength: 1500,
		},
		genre: {
			type: String,
			required: true,
			maxlength: 10,
			trim: true,
		},
		author: {
			type: String,
			required: true,
		},
		image: {
			data: Buffer,
			contentType: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
