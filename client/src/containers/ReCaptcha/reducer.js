/*
 *
 * ReCaptcha reducer
 *
 */
import { SET_RECAPTCHA_SUCCESS, SET_RECAPTCHA_FAIL } from './constants';

const initialState = {};

const recaptchaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_RECAPTCHA_SUCCESS:
			return { recaptchaToken: action.payload };
		case SET_RECAPTCHA_FAIL:
			return { error: action.payload };
		default:
			return state;
	}
};

export default recaptchaReducer;
