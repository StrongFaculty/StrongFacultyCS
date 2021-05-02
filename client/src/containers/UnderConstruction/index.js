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
import ReCaptcha from '../ReCaptcha';

// import SfLogoStacked from '%PUBLIC_URL%/images/sf-logo-stacked.svg';
const UnderConsDiv = styled.div`
	&&& {
		position: absolute;
		top: 15rem;
	}
`;

class UnderConstruction extends React.PureComponent {
	// State Management
	state = {
		human: false,
		humanKey: '',
		disabled: true
	};

	render() {
		const captcha = useSelector((state) => state.captcha);
		const { captcha: currentCaptcha } = captcha;

		const { email, captchaValue } = this.props;

		const handleSubmit = (event) => {
			event.preventDefault();
		};

		const verifyCaptcha = (res) => {
			if (res) {
				console.log(res);
				// this.setState({ human: true, humanKey: res });
				// this.setState({ disabled: isDisabled() });
			}
		};
		const isDisabled = () => {
			if (
				//   this.state.fullname != null &&
				this.state.email != null &&
				//   this.state.subject != null &&
				//   this.state.message != null &&
				//   this.state.fullnameError === null &&
				// this.state.phoneError === null &&
				//   this.state.emailError === null &&
				//   this.state.subjectError === null &&
				//   this.state.messageError === null &&
				this.state.human === true
			)
				return false;
			return true;
		};

		return (
			// <UnderConsDiv>
			<div className="under-cons-box">
				<img src="/images/sf-logo-stacked.svg" alt="sf-logo-stacked.svg" />
				<div className="block-title">
					<h2 className="text-center">We are building Online academy 3.0! Stay in touch!</h2>
					<Newsletter />
				</div>
			</div>
			// </UnderConsDiv>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		captchaValue: state.underconstruction.captchaValue
// 		// humanKey: state.underconstruction.humanKey,
// 		// disabled: state.underconstruction.disabled
// 	};
// };

// export default connect(mapStateToProps, actions)(UnderConstruction);
export default UnderConstruction;
