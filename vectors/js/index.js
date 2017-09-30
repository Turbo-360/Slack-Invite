/* Define your vectors here. To run the samples, uncomment the functions
   below then from the root directory, run the devserver:
   $ turbo devserver

   then navigate to: 
   http://localhost:3000/vectors/sample

   Deploy the vectors by running from root directory:
   $ turbo vectors
*/

// import npm packages here:
// var turbo = require('turbo360')
var superagent = require('superagent')

module.exports = {
	slackInvite: (req, res) => {
		if (req.query.email == null){
			res.json({
				confirmation: 'fail',
				message: 'email parameter required'
			})

			return
		}

		if (req.query.slack == null){
			res.json({
				confirmation: 'fail',
				message: 'slack parameter required'
			})

			return
		}

		if (req.query.token == null){
			res.json({
				confirmation: 'fail',
				message: 'token parameter required (Slack access token)'
			})

			return
		}

		// const url = 'https://' + req.query.slack.trim() + '.slack.com/api/users.admin.invite?email=' + req.query.email.trim() + '&token=xoxp-89488687398-89437605251-243287901797-405e48067e6581402ffcaeabf93b6a99&set_active=true'
		const url = 'https://' + req.query.slack.trim() + '.slack.com/api/users.admin.invite?email=' + req.query.email.trim() + '&token=' + req.query.token + '&set_active=true'

		superagent
		.post(url)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if (err){
				res.json({
					confirmation: 'fail',
					message: err.message
				})
				return
			}

			const resp = response.body
			console.log('RESPONSE: ' + JSON.stringify(resp))
			res.json({
				confirmation: 'success',
				response: resp
			})
		})
	},

	// sampleTwo: (req, res) => {
	// 	var queryParams = req.query
	// 	res.status(200).json({
	// 		confirmation: 'success',
	// 		data: 'This is sample two!',
	// 		params: queryParams
	// 	})
	// }

}