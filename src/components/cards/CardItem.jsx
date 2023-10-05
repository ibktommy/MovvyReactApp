/* eslint-disable react/prop-types */
import CardItemStyles from '../../assets/styles/CardItemStyles';

const CardItem = ({ dataItem }) => {
	const {
		title: movieTitle,
		name: seriesTitle,
		vote_average: rating,
		release_date: movieDate,
		first_air_date: seriesDate,
		imgURL = `https://image.tmdb.org/t/p/original/${dataItem?.poster_path}`,
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
				<div className='card-item-rating'>
					<p className='rating'>{rating.toFixed(2)}</p>
				</div>
			</div>
		</CardItemStyles>
	);
};

export default CardItem;
