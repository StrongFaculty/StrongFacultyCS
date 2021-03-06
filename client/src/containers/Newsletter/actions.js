/*
 *
 * Newsletter actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import { NEWSLETTER_CHANGE, SET_NEWSLETTER_FORM_ERRORS, NEWSLETTER_RESET } from './constants';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { PRODUCTION_SERVER_URL, BASE_SERVER_URL, NODE_ENV } from '../../constants';

let serverUrl;

if (NODE_ENV === 'production') {
	serverUrl = PRODUCTION_SERVER_URL;
} else if (NODE_ENV === 'development') {
	serverUrl = BASE_SERVER_URL;
} else {
	serverUrl = BASE_SERVER_URL;
}

// this has made a change, server is getting recaptcha with request
axios.defaults.baseURL = serverUrl;

export const newsletterChange = (name, value) => {
	return {
		type: NEWSLETTER_CHANGE,
		payload: value
	};
};

export const subscribeToNewsletter = () => {
	return async (dispatch, getState) => {
		try {
			const rules = {
				email: 'required|email',
				recaptchaToken: 'required'
			};

			const user = {};
			user.email = getState().newsletter.email;
			user.recaptchaToken = getState().recaptcha.recaptchaToken;

			const { isValid, errors } = allFieldsValidation(user, rules, {
				'required.email': 'Email is required.',
				'email.email': 'Email format is invalid.',
				'required.recaptchaToken': 'Please take the recaptcha challenge before submitting!'
			});

			if (!isValid) {
				return dispatch({ type: SET_NEWSLETTER_FORM_ERRORS, payload: errors });
			}

			const response = await axios.post('/api/newsletter/subscribe', user);

			const successfulOptions = {
				title: `${response.data.message}`,
				position: 'tr',
				autoDismiss: 1
			};

			dispatch({ type: NEWSLETTER_RESET });
			dispatch(success(successfulOptions));
		} catch (error) {
			handleError(error, dispatch);
		}
	};
};
