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
`;

export default CardList