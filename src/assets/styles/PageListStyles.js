import styled from 'styled-components'

const PageListStyles = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 2.5rem;
	margin-bottom: 10rem;
	height: fit-content;
	box-shadow: var(--frame-shadow);
	padding: 1rem;

	p {
		align-self: center;
		text-transform: capitalize;
		font-size: 1.5rem;
		font-style: italic;
		opacity: 0.7;
	}

	.page-card {
		width: calc(25rem + 2vw) !important;
		height: 50rem !important;
		flex-shrink: 0;
		box-shadow: var(--card-shadow);
	}
`;

export default PageListStyles