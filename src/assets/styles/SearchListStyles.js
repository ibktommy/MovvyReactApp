import { styled } from "styled-components";

const SearchListStyles = styled.div`
	width: 100%;
	margin-bottom: 5rem;
	height: fit-content;
	box-shadow: var(--frame-shadow);
	padding: 0.5rem 0.5rem 1rem 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		font-size: 2.5rem;
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 2rem;
	}

	p {
		align-self: center;
		text-transform: capitalize;
		font-size: 1.5rem;
		font-style: italic;
		opacity: 0.7;
	}

	.search-list {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2.5rem;

		.search-card {
			width: calc(25rem + 2vw) !important;
			height: auto !important;
			flex-shrink: 0;
			box-shadow: var(--card-shadow);

			img {
				width: 100%;
				height: 80%;
				object-fit: cover;
				user-select: none;
			}

			.card-item-details {
				height: 20%;
				width: 100%;
				padding: 0 0.5rem;
				display: flex;
				align-items: center;

				.card-item-texts {
					flex-basis: 60%;

					.title {
						font-size: 1.35rem;
						font-weight: 500;
						margin-bottom: 0.5rem;
					}

					.date {
						font-size: 1.2rem;
					}
				}

				.card-item-info {
					margin-left: auto;

					.rating {
						width: fit-content;
						margin-left: auto;
						display: flex;
						align-items: center;
						margin-bottom: 0.5rem;

						p {
							font-size: 1.2rem;
							margin-right: 0.5rem;
						}

						#like-icon {
							width: 1.5rem;
							height: 100%;
						}
					}

					button {
						display: inline-block;
						background-color: var(--pry-color);
						border: 0.2rem solid var(--pry-color);
						color: var(--white);
						font-size: 1.3rem;
						padding: 0.5rem 1rem;
						border-radius: 0.4rem;
						font-family: var(--pry-font);
						cursor: pointer;

						&:hover {
							background: none;
							color: var(--pry-color);
							transition: all.4s ease;
						}
					}
				}
			}
		}
	}
`;

export default SearchListStyles