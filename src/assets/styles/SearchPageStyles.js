import styled from 'styled-components'

const SearchPageStyles = styled.section`
	width: 80%;
	margin: 8rem auto 0 auto;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		width: 65rem;
		margin: 0 auto 5rem auto;
		font-size: 3rem;
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
	}

	.category-menu {
		position: relative;
		padding: 0.3rem;
		display: flex;
		margin-bottom: 5rem;

		&::before {
			position: absolute;
			content: '';
			width: 0.2rem;
			height: 100%;
			background-color: var(--text-dark);
			top: 0%;
			left: 44%;
			transform: translateX(-50%);
		}

		button {
			position: relative;
			border: 0;
			background: none;
			display: inline-block;
			font-family: var(--sec-font);
			font-size: 2rem;
			font-weight: 400;
			color: var(--text-dark);
			cursor: pointer;

			&:first-of-type {
				margin-right: 1.5rem;
			}
			&:last-of-type {
				margin-left: 1.5rem;
			}

			&.active::before {
				position: absolute;
				content: '';
				height: 0.2rem;
				width: 100%;
				bottom: -0.4rem;
				left: 0;
				background-color: var(--pry-color);
			}
		}
	}

	form {
		width: 80%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 5rem;

		input {
			display: inline-block;
			width: 100%;
			padding: 1rem;
			border: 0.2rem solid var(--text-fade);
			margin-bottom: 2.5rem;
			color: var(--text-dark);
			font-family: var(--pry-font);
			font-size: 2rem;
			outline: none;

			&::placeholder {
				color: var(--text-fade);
			}
		}

		button {
			padding: 1rem 3rem;
			background-color: var(--pry-color);
			color: var(--white);
			border: 0.2rem solid var(--pry-color);
			border-radius: 0.4rem;
			font-family: var(--pry-font);
			font-size: 2rem;
			letter-spacing: 0.1rem;

			&:hover {
				background-color: transparent;
				color: var(--pry-color);
				transition: 0.4s ease;
			}
		}
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
		width: 95%;

		h1 {
			font-size: 2.5rem;
			width: 55%;
		}
	}

	@media screen and (max-width: 992px) {
		h1 {
			font-size: 2rem;
			width: 60%;
		}

		.category-menu {
			button {
				font-size: 1.6rem;
			}
		}

		form {
			width: 90%;

			input {
				font-size: 1.6rem;
			}

			button {
				font-size: 1.6rem;
			}
		}
	}

	@media screen and (max-width: 768px) {
		width: 98%;
		
		h1 {
			width: 70%;
			font-size: 1.8rem;
		}

		.category-menu {
			button {
				font-size: 1.4rem;
			}
		}

		form {
			width: 100%;

			input {
				font-size: 1.4rem;
			}

			button {
				font-size: 1.4rem;
				padding: 1rem .8rem;
			}
		}
	}
`;

export default SearchPageStyles;