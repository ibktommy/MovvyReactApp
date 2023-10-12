import { useParams } from 'react-router-dom';
import MediaStyles from '../assets/styles/MediaStyles';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
import MediaList from '../components/cards/MediaList';
import RecommendationsList from '../components/cards/RecommendationsList';

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

	// Get the letters in the id string to be passed to the Recommendations component
	function getWordsInStr(str) {
		let wordArr = [];
		for (let i = 0; i < str.length; i++) {
			let numbers = Number(str[i]);
			if (!numbers) {
				wordArr.push(str[i]);
			}
		}

		return wordArr.join('');
	}

	const idNumbers = getNumInStr(id);
	const idWords = getWordsInStr(id);
	let mediaURL = '';
	let recommendationsURL = '';

	if (id.includes('series') === true) {
		mediaURL = `https://api.themoviedb.org/3/tv/${idNumbers}?language=en-US'&Authorization=${authKey}&id&api_key=${apikey}`;
		recommendationsURL = `https://api.themoviedb.org/3/tv/${idNumbers}/recommendations?language=en-US&page=1&Authorization=${authKey}&api_key=${apikey}`;
	} else if (id.includes('movie') === true) {
		mediaURL = `https://api.themoviedb.org/3/movie/${idNumbers}?language=en-US'&Authorization=${authKey}&api_key=${apikey}`;
		recommendationsURL = `https://api.themoviedb.org/3/movie/${idNumbers}/recommendations?language=en-US&page=1&Authorization=${authKey}&api_key=${apikey}`;
	}

	// Fetch data from api-server based on the mediaURL passed and the media-ID
	const fetchMediaData = useQuery({
		queryKey: ['media', id],
		queryFn: async () => {
			const result = await axios.get(mediaURL);

			return result;
		},
	});

	const fetchRecommendedData = useQuery({
		queryKey: ['recommendations', id],
		queryFn: async () => {
			const result = await axios.get(recommendationsURL);

			return result;
		},
	});

	const { data, status, error, fetchStatus } = fetchMediaData;

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
				<p className='message'>
					Sorry, could not load results. check your network!{' '}
				</p>
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

	// Getting actual data Array from the useQuery data
	const mediaData = data?.data;
	const recommendationsData = fetchRecommendedData?.data?.data?.results;

	if (!recommendationsData) {
		return (
			<MediaStyles>
				<p className='message'>
					Sorry, we experienced an error. You can try reloading the webpage.
				</p>
			</MediaStyles>
		);
	}

	return (
		<MediaStyles>
			{mediaData && <MediaList dataItem={mediaData} key={idNumbers} />}

			{recommendationsData && (
				<RecommendationsList
					key={id}
					dataItem={recommendationsData}
					title={idWords}
				/>
			)}
		</MediaStyles>
	);
};

export default Media;
