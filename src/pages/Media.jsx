import { useParams } from 'react-router-dom';

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

	console.log(mediaURL);
	return (
		<div>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
			<h1>Media</h1>
		</div>
	);
};

export default Media;
