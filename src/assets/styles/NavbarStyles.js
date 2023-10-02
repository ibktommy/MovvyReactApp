import styled from 'styled-components';

const NavbarStyles = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 8rem;
	box-shadow: var(--box-shadow);
  z-index: 5;
  background-color: var(--bg-white);
	display: flex;
	justify-content: center;
	align-items: center;

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
		font-family: var(--pry-font);
		font-size: 1.8rem;
		font-weight: 400;
		padding: 0rem 0.5rem;
	}

	ul a:first-of-type {
		margin-right: 1.5rem;
	}
`;

export default NavbarStyles;
