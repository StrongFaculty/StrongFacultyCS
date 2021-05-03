import { SET_RECAPTCHA_SUCCESS, SET_RECAPTCHA_FAIL } from './constants';

export const setReCaptcha = (data) => (dispatch) => {
	try {
		dispatch({
			type: SET_RECAPTCHA_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: SET_RECAPTCHA_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
