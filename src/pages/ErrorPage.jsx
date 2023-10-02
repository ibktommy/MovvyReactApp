import { Link, useRouteError } from 'react-router-dom';
import ErrorPageStyles from '../assets/styles/ErrorPageStyles';
import Button from '../components/Button';
import ErrorImage from '../assets/images/face-id-error-svgrepo-com (1).png';
const ErrorPage = () => {
	// Checking if app encounters an error route
	const error = useRouteError();
	if (error.status === 404) {
		return (
			<ErrorPageStyles>
				<div>
					<img src={ErrorImage} alt='error-face' />
					<h2>oops! this app has an encountered an error page</h2>
					<Link to='/'>
						<Button>back to home</Button>
					</Link>
				</div>
			</ErrorPageStyles>
		);
	}

	return (
		<ErrorPageStyles>
			<h2>An Error has occurred in the app, check your  code.</h2>
		</ErrorPageStyles>
	)
};

export default ErrorPage;
