const express = require('express');
const router = express.Router();

const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
const recaptcha = require('../../services/recaptcha');

router.post('/subscribe', async (req, res) => {
	const { email, captchaValue } = req.body;

	if (!email) {
		return res.status(400).json({ error: 'You must enter an email address.' });
	}

	try {
		if (captchaValue) {
			const captchaValidationResponse = await recaptcha.verifyRecaptcha(captchaValue);
			if (captchaValidationResponse.data.success) {
				const result = await mailchimp.subscribeToNewsletter(email);

				if (result.status === 400) {
					return res.status(400).json({ error: result.title });
				}

				await mailgun.sendEmail(email, 'newsletter-subscription');

				res.status(200).json({
					success: true,
					message: 'You have successfully subscribed to the newsletter'
				});
			} else {
				return res.status(401).json({ success: false, message: 'reCaptcha validation failed' });
			}
		} else {
			return res.status(400).json({ error: 'You must provide recaptcha value.' });
		}
	} catch (err) {
		res.status(500).json({ success: false, message: 'Server error' });
	}
});

module.exports = router;
