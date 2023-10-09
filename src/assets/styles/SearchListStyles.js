import { styled } from "styled-components";

const SearchListStyles = styled.div`
	width: 100%;
	margin-bottom: 5rem;
	height: fit-content;
	box-shadow: var(--frame-shadow);
	padding: 0.5rem 0.5rem 1rem 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

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
`;

export default SearchListStyles