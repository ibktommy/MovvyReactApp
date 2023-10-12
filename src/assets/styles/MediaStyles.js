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
`;

export default MediaStyles