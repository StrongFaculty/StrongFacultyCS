const keys = require('../config/keys');
const fetch = require('node-fetch');

exports.verifyRecaptcha = (recaptchaToken) => {
	const { recaptchaVerificationUrl, recaptchaSecretKey } = keys.recaptcha;

	return post(`${recaptchaVerificationUrl}?secret=${recaptchaSecretKey}&response=${recaptchaToken}`);
};

const post = async (url, data) => {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then((response) => response.json().then((data) => ({ status: response.status, data })))
		.catch((error) => ({ success: false, message: error.message }));
};
