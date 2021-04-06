const db = require('../models');

module.exports = {
	findAll: function (req, res) {
		db.Special.find({})
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		db.Special.create(req.body)
			.then(res.sendStatus(200))
			.catch((err) => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Special.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Special.findById({ _id: req.params.id }, req.body)
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};
