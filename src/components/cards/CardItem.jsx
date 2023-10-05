import CardItemStyles from "../../assets/styles/CardItemStyles";

const CardItem = ({dataItem}) => {
  const {
		title: movieTitle,
		name: seriesTitle,
		vote_average: rating,
		release_date: movieDate,
		first_air_date: seriesDate,
		imgURL = dataItem?.poster_path,
		id,
	} = dataItem;

  return (
		<CardItemStyles>
			<img src='' alt={movieTitle || seriesTitle} />
			<div className='card-item-details'>
				<p className='title'>title</p>
				<p className='rating'>rating</p>
				<p className='genre'>genre</p>
				<p className='date'>date</p>
			</div>
		</CardItemStyles>
	);
}

export default CardItem