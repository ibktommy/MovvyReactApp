/* eslint-disable react/prop-types */
import LikeIcon from '../../assets/svg/LikeIcon';
import MissingImage from '../../assets/images/missing-image-svgrepo-com-min.png';
import { Link } from 'react-router-dom';

const CardItem = ({ dataItem, title }) => {
	console.log(title);
	const {
		title: movieTitle,
		name: seriesTitle,
		vote_average: rating,
		release_date: movieDate,
		first_air_date: seriesDate,
		imgURL = dataItem?.poster_path === null
			? MissingImage
			: `https://image.tmdb.org/t/p/original/${dataItem?.poster_path}`,
		id,
	} = dataItem;

	return (
		<>
			<img src={imgURL} alt={movieTitle || seriesTitle} />
			<div className='card-item-details'>
				<div className='card-item-texts'>
					<p className='title'>{movieTitle || seriesTitle}</p>
					<p className='date'>{movieDate || seriesDate}</p>
				</div>
				<div className='card-item-info'>
					<div className='rating'>
						<p>{rating.toFixed(2)}</p>
						<LikeIcon id='like-icon' />
					</div>
					<Link to={`/media/${title + id}`} target='_blank'>
						<button>view info</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CardItem;
