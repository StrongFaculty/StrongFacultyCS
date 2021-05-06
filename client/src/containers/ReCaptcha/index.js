import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';

import { setRecaptcha } from './actions';

const ReCaptcha = () => {
	const dispatch = useDispatch();
	const SITE_KEY = '6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4';

	const [ RecaptchaToken, setRecaptchaToken ] = useState('');

	const formErrorsRecaptcha = String(useSelector((state) => state.newsletter.formErrors.recaptchaToken));

	const handleChange = (value) => {
		if (value) {
			setRecaptchaToken(value);
		} else {
			setRecaptchaToken('');
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
			<div className="input-box invalid">
				<ReCAPTCHA sitekey={SITE_KEY} onChange={handleChange} />
				{/* {formErrorsRecaptcha === 'Please take the recaptcha challenge before submitting!' ? ( */}
				{formErrorsRecaptcha === 'Please take the recaptcha challenge before submitting!' ? (
					<p className="invalid-message">{formErrorsRecaptcha}</p>
				) : (
					<p />
				)}
			</div>
		</div>
	);
};

export default ReCaptcha;
