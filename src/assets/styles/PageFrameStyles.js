import styled from 'styled-components';

const PageFrameStyles = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.page-menu {
		margin-bottom: 3rem;
		button {
			display: inline-block;
			color: var(--white);
			background-color: var(--pry-color);
			padding: 0.8rem 1rem;
			font-family: var(--pry-font);
			font-size: 1.6rem;
			text-transform: capitalize;
			border: 0;
			opacity: 0.6;
			cursor: pointer;

			&:not(:last-of-type) {
				margin-right: 1.5rem;
			}

			&.active {
				opacity: 1;
			}

			&:hover {
				opacity: 1;
				transition: 0.4s ease;
			}
		}
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
		.page-menu {
			button {
				font-size: 1.5rem;
			}
		}
	}

	@media screen and (max-width: 992px) {
		.page-menu {
			button {
				font-size: 1.4rem;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.page-menu {
			button {
        width: 10rem;
        border-radius: .4rem;
				padding: 0.8rem 0.5rem;

				&:not(:last-of-type) {
					margin-right: 0.8rem;
				}
			}
		}
	}
`;

export default PageFrameStyles;
