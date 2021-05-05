const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
const recaptcha = require('../../services/recaptcha');

router.post('/subscribe', async (req, res) => {
	const { email, recaptchaToken } = req.body;
	console.log('server-recaptcha-token', recaptchaToken);
	if (!email) {
		return res.status(400).json({ error: 'You must enter an email address.' });
	}
	if (recaptcha) {
		const recaptchaValidationResponse = await recaptcha.verifyRecaptcha(recaptchaToken);
		if (recaptchaValidationResponse.data.success) {
			console.log('recaptchaValidationResponse', recaptchaValidationResponse);
			// this is not working
			const result = await mailchimp.subscribeToNewsletter(email);
			console.log('result :', result);

			if (result.status === 400) {
				return res.status(400).json({ error: result.title });
			}

			await mailgun.sendEmail(email, 'newsletter-subscription');

			res.status(200).json({
				success: true,
				message: 'You have successfully subscribed to the newsletter'
			});
		} else {
			// this is calling errors on client,resulting in popup with diffferen
			// but the response after sending just email is good but in not rendered properly

			return res.status(401).json({ success: false, message: 'reCaptcha validation failed' });
		}
	} else {
		return res.status(400).json({ error: 'You must provide recaptcha value.' });
	}

	// try {
	// 	if (recaptcha) {
	// 		const recaptchaValidationResponse = await ReCaptcha.verifyRecaptcha(recaptcha);
	// 		if (recaptchaValidationResponse.data.success) {
	// 			const result = await mailchimp.subscribeToNewsletter(email);

	// 			if (result.status === 400) {
	// 				return res.status(400).json({ error: result.title });
	// 			}

	// 			await mailgun.sendEmail(email, 'newsletter-subscription');

	// 			res.status(200).json({
	// 				success: true,
	// 				message: 'You have successfully subscribed to the newsletter'
	// 			});
	// 		} else {
	// 			return res.status(401).json({ success: false, message: 'reCaptcha validation failed' });
	// 		}
	// 	} else {
	// 		return res.status(400).json({ error: 'You must provide recaptcha value.' });
	// 	}
	// } catch (err) {
	// 	res.status(500).json({ success: false, message: 'Server error' });
	// }
});

module.exports = router;
