/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	// This loads the sign-up page --> new.ejs
	'new': function (req, res) {
		res.view();
	},

	// Create a User with the params sent from
	// the sign-up form --> new.ejs
	create: function (req, res, next)	{
		User.create( req.params.all(), function userCreated(err, user) {

			// If there's an error
			if (err) return next(err);

			// After successfully creating the user
			// redirect to the show action
			res.json(user);

		});
	}
		
};

