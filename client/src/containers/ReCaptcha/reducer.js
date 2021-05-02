/*
 *
 * Captcha reducer
 *
 */
import { SET_CAPTCHA_SUCCESS, SET_CAPTCHA_FAIL } from './constants';

const initialState = {};

const captchaReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CAPTCHA_SUCCESS:
			return { captcha: action.payload };
		case SET_CAPTCHA_FAIL:
			return { error: action.payload };
		default:
			return state;
	}
};

export default captchaReducer;
