/*
 *
 * UnderConstruction
 *
 */

import React from 'react';
import styled from 'styled-components';
// import ReCAPTCHA from 'react-google-recaptcha';
import { useSelector } from 'react-redux';

import Newsletter from '../Newsletter';
// import ReCaptcha from '../ReCaptcha';

const UnderConsDiv = styled.div`
	&&& {
		position: absolute;
		top: 15rem;
	}
`;

const UnderConstruction = () => {
	// const recaptcha = useSelector((state) => state.recaptcha);
	// const email = useSelector((state) => state.newsletter.email);
	// console.log('recaptcha', recaptcha);
	// console.log('email', email);

	return (
		<div className="under-cons-box">
			<img src="/images/sf-logo-stacked.svg" alt="sf-logo-stacked.svg" />
			<div className="block-title">
				<h2 className="text-center">We are building Online academy 3.0! Stay in touch!</h2>
				<Newsletter />
				{/* {recaptcha ? (
					<p>...isValid...{String(recaptcha.recaptcha)}</p>
				) : (
					<h1>current value {String(recaptcha.recaptcha)}</h1>
				)} */}
				{/* <ReCaptcha /> */}
			</div>
		</div>
	);
};

export default UnderConstruction;
