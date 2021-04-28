/*
 *
 * UnderConstruction
 *
 */

import React from 'react';
import styled from 'styled-components';
import Recaptcha from 'react-recaptcha';

import Button from '../../components/Common/Button';
import Newsletter from '../Newsletter';

// import SfLogoStacked from '%PUBLIC_URL%/images/sf-logo-stacked.svg';
const UnderConsDiv = styled.div`
	&&& {
		position: absolute;
		top: 15rem;
	}
`;

class UnderConstruction extends React.PureComponent {
	render() {
		const { email, newsletterChange, subscribeToNewsletter, formErrors } = this.props;

		const SubscribeButton = <Button type="submit" variant="primary" text="Subscribe" />;

		const handleSubmit = (event) => {
			event.preventDefault();
			subscribeToNewsletter();
		};
		var callback = function() {
			console.log('Done!!!!');
		};

		// specifying verify callback function
		var verifyCallback = function(response) {
			console.log(response);
		};

		return (
			// <UnderConsDiv>
			<div className="under-cons-box">
				<img src="/images/sf-logo-stacked.svg" alt="sf-logo-stacked.svg" />
				<div className="block-title">
					<h2 className="text-center">We are building Online academy 3.0! Stay in touch!</h2>
					<Newsletter />
				</div>
				<div className="block-recaptcha">
					<Recaptcha
						sitekey="6Ldxjr0aAAAAAKS_bt0EkLrljyHcZMpWuOsSoOw4"
						render="explicit"
						verifyCallback={verifyCallback}
						onloadCallback={callback}
					/>
				</div>
			</div>
			// </UnderConsDiv>
		);
	}
}

export default UnderConstruction;
