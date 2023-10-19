/* eslint-disable react/prop-types */
import LikeIcon from '../../assets/svg/LikeIcon';
import MissingImage from '../../assets/images/missing-image-svgrepo-com-min.png';
import { Link } from 'react-router-dom';
import CardItemStyles from '../../assets/styles/CardItemStyles';

const CardItem = ({ dataItem, title }) => {
	const {
		title: movieTitle,
		name: seriesTitle,
		vote_average: rating,
		release_date: movieDate,
		first_air_date: seriesDate,
		imgURL = dataItem?.poster_path === null
			? MissingImage
			: `https://image.tmdb.org/t/p/w500/${dataItem?.poster_path}`,
		id,
	} = dataItem;

	return (
		<CardItemStyles>
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
					<Link to={`/media/${title + id}`}>
						<button>view info</button>
					</Link>
				</div>
			</div>
		</CardItemStyles>
	);
};

export default CardItem;
