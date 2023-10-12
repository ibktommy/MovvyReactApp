import styled from 'styled-components'

const CardList = styled.div`
	width: 100%;
	overflow: hidden;
	margin: 2rem 0;

	.image-card {
		width: calc(25rem + 2vw) !important;
		height: auto !important;
		flex-shrink: 0;
		box-shadow: var(--card-shadow);
		padding-bottom: 2rem;
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
		.image-card {
			width: 30rem !important;
			height: 50rem !important;
		}
	}

	@media screen and (max-width: 992px) {
		.image-card {
			height: 45rem !important;
		}
	}

	@media screen and (max-width: 768px) {
		.image-card {
			width: 25rem!important;
		}
	}
`;

export default CardList