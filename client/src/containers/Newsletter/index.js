/*
 *
 * Newsletter
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import ReCaptcha from '../ReCaptcha';

class Newsletter extends React.PureComponent {
	render() {
		const {
			email,
			newsletterChange,
			subscribeToNewsletter,
			formErrors,
			recaptchaToken,
			formErrorsRecaptcha
		} = this.props;

		const SubscribeButton = <Button type="submit" variant="primary" text="Subscribe" />;

		const handleSubmit = (event) => {
			event.preventDefault();
			subscribeToNewsletter();
		};
		// console.log('recaptcha', recaptcha.recaptcha);
		// console.log('email', email);

		return (
			<div className="newsletter-form ">
				<p>Sign Up for Our Newsletter</p>
				<form onSubmit={handleSubmit}>
					<div className="subscribe">
						<Input
							type={'text'}
							error={formErrors['email']}
							name={'email'}
							placeholder={'Please Enter Your Email'}
							value={email}
							onInputChange={(name, value) => {
								newsletterChange(name, value);
							}}
							inlineElement={SubscribeButton}
						/>
					</div>
					{String(formErrorsRecaptcha) === 'Please take the recaptcha challenge before submitting!' ? (
						<p>{String(formErrorsRecaptcha)}</p>
					) : (
						<p>{String(recaptchaToken)}</p>
					)}
					<ReCaptcha />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		email: state.newsletter.email,
		formErrors: state.newsletter.formErrors,
		formErrorsRecaptcha: state.newsletter.formErrors.recaptchaToken,
		recaptchaToken: state.recaptcha.recaptchaToken
	};
};

export default connect(mapStateToProps, actions)(Newsletter);
