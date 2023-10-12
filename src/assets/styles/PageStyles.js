import styled from 'styled-components'

const PageStyles = styled.section`
	width: 80%;
	margin: 8rem auto 0 auto;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;

	h1 {
		width: 100%;
		margin: 0 auto 3rem auto;
		font-size: 3rem;
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
	}

	/* Responsiveness */

	@media screen and (max-width: 1023px) {
		width: 95%;
	}

	@media screen and (max-width: 992px) {
		h1 {
			font-size: 2.5rem;
		}
	}

	@media screen and (max-width: 768px) {
		width: 98%;

		h1 {
			font-size: 2rem;
		}
	}
`;

export default PageStyles;