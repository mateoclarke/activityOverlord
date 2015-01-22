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
			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				}

				// redirect back to sign-up page
				return res.redirect('/user/new');
			} 

			// After successfully creating the user
			// redirect to the show action
			// From ep1-6: //res.json(user);
			
			res.redirect('/user/show/'+user.id);

		});
	},

	// render the profile view (e.g. /views/show.ejs)
	show: function (req, res, next) {
		User.findOne({id: req.params['id']}) 
		.exec(function foundUser (err, user) {
			if (err) return next(err);
			if (!user) return next();
			res.view({
				user: user
			});
		});
	}

};

