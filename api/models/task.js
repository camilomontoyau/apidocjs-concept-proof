// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var taskSchema = new mongoose.Schema({
	name: String,
	dueDate: Date,
	priority: { type: Number, min: 1, max:5 },

},
{
    timestamps: true
});


// Return model
module.exports = restful.model('tasks', taskSchema);