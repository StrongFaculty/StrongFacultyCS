import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';

import { setReCaptcha } from './actions';

const ReCaptcha = () => {
	const dispatch = useDispatch();
	const SITE_KEY = '6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4';
	const [ RecaptchaValid, setRecaptchaValid ] = useState(false);

	const handleChange = (value) => {
		if (value) {
			console.log('value', value);
			setRecaptchaValid(true);
			console.log('RecaptchaValid', RecaptchaValid);
		} else {
			console.log('value', value);
			setRecaptchaValid(false);
			console.log('RecaptchaValid', RecaptchaValid);
		}
	};
	useEffect(
		() => {
			dispatch(setReCaptcha(RecaptchaValid));
		},
		[ RecaptchaValid, dispatch ]
		// 1. argument => function to be triggered on dependancy change
		// 2. argument => dependancy array, if RecaptchaValid is passed, it will trigger
		// 				  an action (1.argument) everytime RecaptchaValid is changed
	);
	return (
		<div className="block-recaptcha">
			<ReCAPTCHA sitekey={SITE_KEY} onChange={handleChange} />
		</div>
	);
};

export default ReCaptcha;
