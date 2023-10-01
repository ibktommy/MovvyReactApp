import styled from 'styled-components';

const ButtonStyles = styled.button`
	display: inline-block;
	width: 22rem;
	height: 5rem;
  border: .1rem solid var(--pry-color);
	border-radius: 0.5rem;
	color: var(--white);
	background: var(--pry-color);
	font-family: var(--pry-font);
	font-size: 2rem;
	border: 0;
	letter-spacing: 0.1rem;
	font-weight: 600;
	cursor: pointer;
	transition: 0.4s ease;
  
  &:hover {
    background: var(--pry-deep-color);
  }
`;

export default ButtonStyles;
