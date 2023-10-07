/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import FrameStyles from "../assets/styles/FrameStyles"
import { RingLoader } from 'react-spinners';
import CardList from "./cards/CardList";


const MoviesFrame = ({
	title,
	linkText,
	status,
	error,
	fetchStatus,
	data,
}) => {

	if (status === 'loading' && fetchStatus === 'fetching' && data === undefined) {
		return (
			<FrameStyles>
				<h3>{title}</h3>
				<RingLoader
					color='#e1ca4c'
					size={200}
					speedMultiplier={1}
					className='spinner'
				/>
				<Link to='./movies' className="link">explore {linkText}</Link>
			</FrameStyles>
		);
	}

	if (status === 'loading' && fetchStatus === 'paused' && data === undefined) {
		return (
			<FrameStyles>
				<h3>{title}</h3>
				<p className='frame-para'>Sorry, could not load {linkText}. check your network! </p>
        <Link to='./movies' className="link">explore {linkText}</Link>
			</FrameStyles>
		);
	}

	if (error) {
		return (
			<FrameStyles>
				<h3>{title}</h3>
				<p className='frame-para'>`Sorry, technical error: ${error.message}`</p>
        <Link to='./series' className="link">explore {linkText}</Link>
			</FrameStyles>
		);
	}

	return (
		<FrameStyles>
			<h3>{title}</h3>
			<CardList data={data}/>
			<Link to='./movies' className="link">explore {linkText}</Link>
		</FrameStyles>
	);
};

export default MoviesFrame