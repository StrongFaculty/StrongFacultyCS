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

// this has made a change, server is getting recaptcha with request
axios.defaults.baseURL = 'http://localhost:5000/';

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
			user.recaptchaToken = getState().recaptcha.recaptcha;

			const { isValid, errors } = allFieldsValidation(user, rules, {
				'required.email': 'Email is required.',
				'email.email': 'Email format is invalid.',
				'required.recaptchaToken': 'Recaptcha challenge must be valid!'
			});

			console.log('user.recaptchaToken', user.recaptchaToken);

			if (!isValid) {
				// this is working
				return dispatch({ type: SET_NEWSLETTER_FORM_ERRORS, payload: errors });
			}

			// here is problem
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
