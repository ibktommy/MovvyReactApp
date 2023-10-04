/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import LandingFrameStyles from "../assets/styles/LandingFrameStyles"
import { RingLoader } from 'react-spinners';


const LandingFrame = ({
	title,
	linkText,
	status,
	error,
	data,
	fetchStatus,
}) => {

	if (status === 'loading' && fetchStatus === 'fetching' && data === undefined) {
		return (
			<LandingFrameStyles>
				<h3>{title}</h3>
				<RingLoader
					color='#e1ca4c'
					size={200}
					speedMultiplier={1}
					className='spinner'
				/>
				<Link to='./movies' className="link">explore {linkText}</Link>
			</LandingFrameStyles>
		);
	}

	if (status === 'loading' && fetchStatus === 'paused' && data === undefined) {
		return (
			<LandingFrameStyles>
				<h3>{title}</h3>
				<p>Sorry, could not load {linkText}. check your network! </p>
        <Link to='./movies' className="link">explore {linkText}</Link>
			</LandingFrameStyles>
		);
	}

	if (error) {
		return (
			<LandingFrameStyles>
				<h3>{title}</h3>
				<p>`Sorry, technical error: ${error.message}`</p>
        <Link to='./movies' className="link">explore {linkText}</Link>
			</LandingFrameStyles>
		);
	}

	return (
		<LandingFrameStyles>
			<h3>{title}</h3>
			<Link to='./movies' className="link">explore {linkText}</Link>
		</LandingFrameStyles>
	);
};

export default LandingFrame