const keys = require('./keys');
const { key, domain, sender } = keys.mailgun;

const mailgun = require('mailgun-js')({
	apiKey: key,
	domain: domain
});

exports.sendEmail = (recipient, message) => {
	return new Promise((resolve, reject) => {
		const data = {
			from: `Strong Faculty! <${sender}>`,
			to: recipient,
			subject: message.subject,
			text: message.text
		};
		console.log('data :', data);

		mailgun.messages().send(data, (error, body) => {
			if (error) {
				console.log('error :', error);
				reject(error);
			} else {
				console.log('body :', body);
				resolve(body);
			}
		});
	});
};
