import styled from 'styled-components'

const CardList = styled.div`
	width: 100%;
  overflow: hidden;
	margin: 2rem 0;

	.image-card {
		width: 25rem !important;
		height: 40rem !important;
		flex-shrink: 0;
		box-shadow: var(--card-shadow);
	}

	.image-card img {
		width: 100%;
		height: 80%;
		object-fit: cover;
	}

	.image-card .card-item-details {
		width: 20%;
	}
`;

export default CardList