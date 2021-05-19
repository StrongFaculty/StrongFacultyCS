/*
 *
 * UnderConstruction
 *
 */

import React, { lazy } from 'react';
import GithubCorner from 'react-github-corner';
// import styled from 'styled-components';

// import Newsletter from '../Newsletter';
const Newsletter = lazy(() => import('../Newsletter'));
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
			<GithubCorner bannerColor={'#6D7D8B'} href="https://github.com/StrongFaculty" />
			<img src="/images/sf-logo.svg" alt="sf-logo-stacked.svg" />
			<div className="block-title">
				<h1 className="text-center">We are building Online academy 3.0! Stay in touch! :)</h1>
				<Newsletter />
			</div>
		</div>
	);
};

export default UnderConstruction;
