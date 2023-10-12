import styled from 'styled-components'

const RecommedationsListStyles = styled.section`
	width: 100%;
	margin-bottom: 8rem;
	padding: 0 2rem;
	overflow-x: hidden;

	h3 {
		font-size: 2.3rem;
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 2rem;
	}

	.recommendations-cardlist {
		width: 100%;
		margin: 2rem 0;

		.swiper-container {
			height: 45rem !important;

			.swiper-wrapper {
				height: 100% !important;
			}

			.image-card {
				width: 26rem !important;
				box-shadow: var(--card-shadow);
			}
		}
	}

	/* Responsiveness */

	@media screen and (max-width: 768px) {
		h3 {
			font-size: 1.5rem;
		}
	}
`;

export default RecommedationsListStyles;