import styled from 'styled-components'

const MediaStyles = styled.section`
	width: 80%;
	margin: 10rem auto 0 auto;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: var(--frame-shadow);

	.message {
		text-align: center;
		text-transform: capitalize;
		font-style: italic;
		font-size: 2rem;
		font-weight: 500;
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
		width: 95%;
	}

	@media screen and (max-width: 768px) {
		width: 98%;

		.message {
			font-size: 1.5rem;
		}
	}
`;

export default MediaStyles