import LandingPageStyles from '../assets/styles/LandingPageStyles'
import LandingFrame from "../components/LandingFrame";

const LandingPage = () => {
  return (
		<LandingPageStyles>
			<h1>Discover movies and tv series that include your favourites</h1>

      <LandingFrame title='Trending Movies' linkText='movies'/>
      <LandingFrame title='Trending Series' linkText='series'/>
		</LandingPageStyles>
	);
}

export default LandingPage