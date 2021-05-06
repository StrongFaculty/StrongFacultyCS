/**
 *
 * Application
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import actions from '../../actions';

// routes
import UnderConstruction from '../UnderConstruction';
import Notification from '../Notification';

// import SFLogoStacked from '../../../images/sf-logo-stacked.svg';

import Page404 from '../../components/Common/Page404';

const styles = {
	container: {
		width: '400rem',
		minWidth: '90rem'
	}
};

class Application extends React.PureComponent {
	componentDidMount() {
		const token = localStorage.getItem('token');

		if (token) {
			this.props.fetchProfile();
		}

		this.props.handleCart();

		document.addEventListener('keydown', this.handleTabbing);
		document.addEventListener('mousedown', this.handleMouseDown);
	}

	handleTabbing(e) {
		if (e.keyCode === 9) {
			document.body.classList.add('user-is-tabbing');
		}
	}

	handleMouseDown() {
		document.body.classList.remove('user-is-tabbing');
	}

	render() {
		return (
			<div className="application">
				<Notification />
				<main className="main">
					<img style={styles.container} src="images/blurred-app.png" alt="" />
					{/* <Container className="container-sm" fluid="sm"> */}
					<div className="block-container">
						{/* <div className="wrapper"> */}
						<Switch>
							<Route path="/" component={UnderConstruction} />
							<Route path="/404" component={Page404} />
							<Route path="*" component={Page404} />
						</Switch>
						{/* </div> */}
					</div>
					{/* </Container> */}
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authenticated: state.authentication.authenticated
	};
};

export default connect(mapStateToProps, actions)(Application);
