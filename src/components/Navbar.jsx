import { Link } from "react-router-dom";
import NavbarStyles from "../assets/styles/NavbarStyles";
import LogoWhite from "../assets/svg/LogoWhite";

const Navbar = () => {
  return (
		<NavbarStyles>
			<div className='nav-center'>
				<Link className='logo'>
					<LogoWhite />
				</Link>

				<ul>
					<Link to='/movies' className="link">Movies</Link>
					<Link to='/series' className="link">TV Series</Link>
					<Link to='/search'>
						<button>Go to Search</button>
					</Link>
				</ul>
			</div>
		</NavbarStyles>
	);
}

export default Navbar