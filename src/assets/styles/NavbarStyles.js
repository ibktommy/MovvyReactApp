import styled from 'styled-components';

const NavbarStyles = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1.5rem 0;
	box-shadow: var(--box-shadow);
  z-index: 5;
  background-color: var(--bg-white);

	.nav-center {
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo svg {
		display: inline-block;
		width: 15rem;
		height: 5rem;
	}

	ul {
		display: flex;
		align-items: center;
	}

	ul a {
		display: inline-block;
		position: relative;
		font-family: var(--pry-font);
		font-size: 1.8rem;
		font-weight: 400;
		padding: 0rem 0.5rem;
		transition: 0.4s ease;
	}

	ul a:first-of-type {
		margin-right: 1.5rem;
	}

	ul a::before {
		position: absolute;
		content: '';
		bottom: -0.3rem;
		left: 0rem;
		width: 100%;
		height: 0.2rem;
		background-color: var(--pry-color);
		transform: scale(0);
	}

	ul a:hover::before {
		transform: scale(1);
		transition: 0.4s ease;
	}
`;

export default NavbarStyles;
