import styled from 'styled-components'

const MediaListStyles = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 5rem;
	padding: 0 2rem;

	.image {
		width: calc(30rem + 2vw);
		height: 45rem;
		flex-shrink: 0;
		margin-right: 0.8rem;
		box-shadow: var(--card-shadow);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.details {
		flex-basis: 50%;
		flex-shrink: 0;
		margin-left: 0.8rem;
		padding: 3rem 0.5rem;

		h2 {
			font-size: 3rem;
			font-weight: 700;
			text-transform: capitalize;
		}

		&-items {
			display: flex;
			align-items: center;
			gap: 0.8rem;
			margin: 0.6rem 0;

			.genres {
				display: flex;
				align-items: center;
				gap: 0.2rem;

				p {
					font-size: 1.2rem;
				}
			}

			.date {
				font-size: 1.2rem;
			}

			.rating {
				width: fit-content;
				display: flex;
				align-items: center;
				flex-direction: row-reverse;

				p {
					font-size: 1.2rem;
					margin-left: 0.3rem;
				}

				#like-icon {
					width: 1.3rem;
					height: 100%;
				}
			}
		}

		.story {
			font-size: 1.4rem;
		}
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
	}

	@media screen and (max-width: 992px) {
		flex-direction: column;

		.image {
			align-self: flex-start;
		}
	}

	@media screen and (max-width: 768px) {
		.details {
			h2 {
				font-size: 2.4rem;
			}

			&-items {
				flex-direction: column;
				align-items: flex-start;
				margin: 2rem 0;
			}
		}
	}
`;

export default MediaListStyles;