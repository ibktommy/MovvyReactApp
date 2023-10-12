import { useParams } from 'react-router-dom';
import MediaStyles from '../assets/styles/MediaStyles';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
import MediaList from '../components/cards/MediaList';

const apikey = import.meta.env.VITE_API_ACCESS_KEY;
const authKey = import.meta.env.VITE_API_AUTHORIZATION_KEY;

const Media = () => {
	let { id } = useParams();

	// Get the Numbers in the id string
	function getNumInStr(str) {
		let numArr = [];
		for (let i = 0; i < str.length; i++) {
			let digits = Number(str[i]);
			if (digits) {
				numArr.push(digits);
			}
		}

		return Number(numArr.join(''));
	}
	const idNumbers = getNumInStr(id);
	let mediaURL = '';

	if (id.includes('series') === true) {
		mediaURL = `https://api.themoviedb.org/3/tv/${idNumbers}?language=en-US'&Authorization=${authKey}&id&api_key=${apikey}`;
	} else if (id.includes('movie') === true) {
		mediaURL = `https://api.themoviedb.org/3/movie/${idNumbers}?language=en-US'&Authorization=${authKey}&api_key=${apikey}`;
	}

	// Fetch data from api-server based on the apiURL passed and the pageMenu
	const fetchMediaData = useQuery({
		queryKey: ['media', id],
		queryFn: async () => {
			const result = await axios.get(mediaURL);

			return result;
		},
	});

	const { data, status, error, fetchStatus } = fetchMediaData;

	console.log(fetchMediaData);

	if (
		status === 'loading' &&
		fetchStatus === 'fetching' &&
		data === undefined
	) {
		return (
			<MediaStyles>
				<RingLoader
					color='#e1ca4c'
					size={200}
					speedMultiplier={1}
					className='spinner'
				/>
			</MediaStyles>
		);
	}

	if (status === 'loading' && fetchStatus === 'paused' && data === undefined) {
		return (
			<MediaStyles>
				<p className='message'>Sorry, could not load results. check your network! </p>
			</MediaStyles>
		);
	}

	if (error) {
		return (
			<MediaStyles>
				<p className='message'>`Sorry, technical error: ${error.message}`</p>
			</MediaStyles>
		);
	}

	const mediaData = data.data;

	return (
		<MediaStyles>
			{mediaData && <MediaList dataItem={mediaData} key={idNumbers}/>}
		</MediaStyles>
	);
};

export default Media;
