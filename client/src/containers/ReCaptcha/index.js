import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';

import { setCaptcha } from './actions';

class ReCaptcha extends React.PureComponent {
	render() {
		const dispatch = useDispatch();
		const SITE_KEY = '6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4';
		const [ expired, setExpired ] = useState(true);

		const handleChange = (value) => {
			if (value) {
				setExpired(false);
			} else {
				setExpired(true);
			}
		};
		useEffect(
			() => {
				dispatch(setCaptcha(expired));
			},
			[ expired, dispatch ]
		);

		return (
			<div className="block-recaptcha">
				<ReCAPTCHA sitekey={SITE_KEY} onChange={handleChange} />
			</div>
		);
	}
}

export default ReCaptcha;
