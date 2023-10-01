import { Link } from 'react-router-dom'
import ErrorPageStyles from '../assets/styles/ErrorPageStyles'
import Button from '../components/Button'
import ErrorImage from '../assets/images/face-id-error-svgrepo-com (1).png'
const ErrorPage = () => {
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

export default ErrorPage