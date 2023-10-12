import styled from 'styled-components';

const CardItemStyles = styled.div`
	img {
		width: 100%;
		height: 80%;
		object-fit: cover;
		user-select: none;
	}

	.card-item-details {
		height: 20%;
		width: 100%;
		padding: 1rem 0.5rem 1.5rem 0.5rem;
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

				#like-icon {
					width: 1.5rem;
					height: 100%;
				}

				p {
					font-size: 1.2rem;
					margin-right: 0.5rem;
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
`;

export default CardItemStyles;
