import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';

import { setRecaptcha } from './actions';

const ReCaptcha = () => {
	const dispatch = useDispatch();
	const SITE_KEY = '6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4';
	// const [ RecaptchaValid, setRecaptchaValid ] = useState(false);
	const [ RecaptchaToken, setRecaptchaToken ] = useState('');

	const handleChange = (value) => {
		if (value) {
			console.log('value', value);
			// setRecaptchaValid(true);
			setRecaptchaToken(value);
			// console.log('RecaptchaValid', RecaptchaValid);
			console.log('RecaptchaToken', RecaptchaToken);
		} else {
			console.log('value', value);
			// setRecaptchaValid(false);
			setRecaptchaToken('');
			// console.log('RecaptchaValid', RecaptchaValid);
			console.log('RecaptchaTo', RecaptchaToken);
		}
	};
	useEffect(
		() => {
			dispatch(setRecaptcha(RecaptchaToken));
		},
		[ RecaptchaToken, dispatch ]
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
