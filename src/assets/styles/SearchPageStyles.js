import styled from 'styled-components'

const SearchPageStyles = styled.section`
	width: 80%;
	margin: 8rem auto 0 auto;
	padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

	h1 {
		width: 65rem;
		margin: 0 auto 5rem auto;
		font-size: 3rem;
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
	}

  .category-menu {
    position: relative;
    padding: .3rem;
    display: flex;

    &::before {
      position: absolute;
      content: '';
      width: .2rem;
      height: 100%;
      background-color: var(--text-dark);
      top: 0%;
      left: 44%;
      transform: translateX(-50%);
    }

    button {
      position: relative;
      border: 0;
      background: none;
      display: inline-block;
      font-family: var(--sec-font);
      font-size: 2rem;
      font-weight: 400;
      color: var(--text-dark);
      cursor: pointer;

      &:first-of-type {
        margin-right: 1.5rem;
      }
      &:last-of-type {
        margin-left: 1.5rem;
      }

      &.active::before {
        position: absolute;
        content: '';
        height: .2rem;
        width: 100%;
        bottom: -.4rem;
        left: 0;
        background-color: var(--pry-color);
      }
    }
  }
`;

export default SearchPageStyles;