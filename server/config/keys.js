module.exports = {
	app: {
		name: 'Strong Faculty',
		apiURL: `${process.env.BASE_API_URL}`,
		serverURL: process.env.BASE_SERVER_URL,
		clientURL: process.env.BASE_CLIENT_URL,
		productionServerURL: process.env.PRODUCTION_SERVER_URL,
		productionClientURL: process.env.PRODUCTION_CLIENT_URL
	},
	port: process.env.SERVER_PORT || 5000,
	database: {
		urlLocal: process.env.MONGO_URI_LOCAL,
		urlProduction: process.env.MONGO_URI_PRODUCTION
	},
	nodeEnv: process.env.NODE_ENV,
	jwt: {
		secret: process.env.JWT_SECRET,
		tokenLife: '7d'
	},
	mailchimp: {
		key: process.env.MAILCHIMP_KEY,
		listKey: process.env.MAILCHIMP_LIST_KEY
	},
	mailgun: {
		key: process.env.MAILGUN_KEY,
		domain: process.env.MAILGUN_DOMAIN,
		sender: process.env.MAILGUN_EMAIL_SENDER
	},
	google: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK_URL
	},
	facebook: {
		clientID: process.env.FACEBOOK_CLIENT_ID,
		clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		callbackURL: process.env.FACEBOOK_CALLBACK_URL
	},
	recaptcha: {
		recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
		recaptchaVerificationUrl: process.env.RECAPTCHA_VERIFICATION_URL
	}
};
