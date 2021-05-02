import { SET_CAPTCHA_SUCCESS, SET_CAPTCHA_FAIL } from './constants';

export const setCaptcha = (data) => (dispatch) => {
	try {
		dispatch({
			type: SET_CAPTCHA_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SET_CAPTCHA_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
