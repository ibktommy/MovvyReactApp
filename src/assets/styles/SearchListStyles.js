import { styled } from "styled-components";

const SearchListStyles = styled.div`
	width: 100%;
	margin-bottom: 10rem;
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
			height: 50rem !important;
			flex-shrink: 0;
			box-shadow: var(--card-shadow);
		}
	}
`;

export default SearchListStyles