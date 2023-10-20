import styled from 'styled-components';

const NavbarStyles = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 8rem;
	box-shadow: var(--box-shadow);
	z-index: 5;
	background-color: var(--body-bg);
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: .1rem solid var(--text-dark);

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

	ul a:not(:last-of-type) {
		margin-right: 1.5rem;
	}

	ul a button {
		font-family: var(--pry-font);
		font-size: 1.8rem;
		font-weight: 400;
		padding: 0.8rem 0.5rem;
		border: 0.2rem solid var(--pry-color);
		border-radius: 0.4rem;
		background-color: var(--pry-color);
		color: var(--white);
		cursor: pointer;

		&:hover {
			background-color: transparent;
			color: var(--pry-color);
			transition: 0.4s ease;
		}
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
		.nav-center {
			width: 95%;
		}
	}

	@media screen and (max-width: 992px) {
		.logo svg {
			width: 13rem;
		}

		ul a {
			font-size: 1.5rem;
		}

		ul a:not(:last-of-type) {
			margin-right: 1rem;
		}

		ul a button {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 768px) {
		padding-bottom: 1rem;

		.nav-center {
			flex-direction: column;
		}

		.logo svg {
			width: 10rem;
		}

		ul a {
			font-size: 1.5rem;
			letter-spacing: 0.1rem;
		}

		ul a:not(:last-of-type) {
			margin-right: .8rem;
		}

		ul a button {
			font-size: 1.5rem;
			padding: .4rem 1rem;
		}
	}
`;

export default NavbarStyles;
