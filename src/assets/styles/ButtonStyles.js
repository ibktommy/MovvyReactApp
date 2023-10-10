import styled from 'styled-components';

const ButtonStyles = styled.button`
	display: inline-block;
	background-color: var(--pry-color);
	border: 0.2rem solid var(--pry-color);
	color: var(--white);
	font-size: 1.3rem;
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	font-family: var(--pry-font);
	cursor: pointer;

	&:hover {
		background: none;
		color: var(--pry-color);
		transition: all.4s ease;
	}
`;

export default ButtonStyles;
