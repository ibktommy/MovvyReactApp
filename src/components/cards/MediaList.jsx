/* eslint-disable react/prop-types */
import MediaListStyles from "../../assets/styles/MediaListStyles"
import LikeIcon from "../../assets/svg/LikeIcon";
import MissingImage from '../../assets/images/missing-image-svgrepo-com-min.png'
const MediaList = ({dataItem}) => {
  const {
		original_name: movieTitle,
		original_title: seriesTitle,
		vote_average: rating,
		release_date: movieDate,
		first_air_date: seriesDate,
		imgURL = dataItem?.poster_path === null
			? MissingImage
			: `https://image.tmdb.org/t/p/w500/${dataItem?.poster_path}`,
		id,
    genres,
    overview: story,
	} = dataItem;

  const genresArray = genres.map((genresItem) => {
		const { name } = genresItem;
		return name;
	});

  return (
		<MediaListStyles>
			<div className='image'>
				<img src={imgURL} alt={movieTitle || seriesTitle} />
			</div>

			<div className='details'>
				<h2>{movieTitle || seriesTitle}</h2>
				<div className='details-items'>
					<div className="genres">
						{genresArray.map((genre, id) => (
							<p key={id}>
								{genre} {id < genresArray.length - 1 ? " | " : ''}
							</p>
						))}
					</div>
					<p className='date'>{movieDate || seriesDate}</p>
					<div className='rating'>
						<p>{rating.toFixed(2)}</p>
						<LikeIcon id='like-icon' />
					</div>
				</div>
				<p className='story'>{story}</p>
			</div>
		</MediaListStyles>
	);
}

export default MediaList