import { Link } from "react-router-dom";
import NavbarStyles from "../assets/styles/NavbarStyles";
import LogoDark from "../assets/svg/LogoDark";

const Navbar = () => {
  return (
		<NavbarStyles>
			<div className='nav-center'>
				<Link className='logo'>
					<LogoDark />
				</Link>

				<ul>
					<Link to='/movies'>Movies</Link>
					<Link to='/series'>TV Series</Link>
				</ul>
			</div>
		</NavbarStyles>
	);
}

export default Navbar