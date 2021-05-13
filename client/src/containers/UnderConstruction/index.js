/*
 *
 * UnderConstruction
 *
 */

import React from 'react';
// import styled from 'styled-components';

import Newsletter from '../Newsletter';
// import ReCaptcha from '../ReCaptcha';

// const UnderConsDiv = styled.div`
// 	&&& {
// 		position: absolute;
// 		top: 15rem;
// 	}
// `;

const UnderConstruction = () => {
	return (
		<div className="under-cons-box">
			<img src="/images/sf-logo-stacked-dark.svg" alt="sf-logo-stacked.svg" />
			<div className="block-title">
				<h1 className="text-center">We are building Online academy 3.0! Stay in touch!</h1>
				<Newsletter />
			</div>
		</div>
	);
};

export default UnderConstruction;
