import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';

import { setReCaptcha } from './actions';

const ReCaptcha = () => {
	const dispatch = useDispatch();
	const SITE_KEY = '6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4';
	const [ expired, setExpired ] = useState(true);

	const handleChange = (value) => {
		if (value) {
			console.log('value', value);
			setExpired(false);
			console.log('expired', expired);
		} else {
			console.log('value', value);
			setExpired(true);
			console.log('expired', expired);
		}
	};
	useEffect(
		() => {
			dispatch(setReCaptcha(expired));
		},
		[ expired, dispatch ]
		// 1. argument => function to be triggered on dependancy change
		// 2. argument => dependancy array, if expired is passed, it will trigger
		// 				  an action (1.argument) everytime expired is changed
	);
	return (
		<div className="block-recaptcha">
			<ReCAPTCHA sitekey={SITE_KEY} onChange={handleChange} />
		</div>
	);
};

// class ReCaptcha extends React.PureComponent {
// 	render() {
// 		const dispatch = useDispatch();
// 		const SITE_KEY = '6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4';
// 		const [ expired, setExpired ] = useState(true);

// 		const handleChange = (value) => {
// 			if (value) {
// 				setExpired(false);
// 			} else {
// 				setExpired(true);
// 			}
// 		};
// 		useEffect(
// 			() => {
// 				dispatch(setCaptcha(expired));
// 			},
// 			[ expired, dispatch ]
// 		);

// 		return (
// 			<div className="block-recaptcha">
// 				<ReCAPTCHA sitekey={SITE_KEY} onChange={handleChange} />
// 			</div>
// 		);
// 	}
// }

export default ReCaptcha;
