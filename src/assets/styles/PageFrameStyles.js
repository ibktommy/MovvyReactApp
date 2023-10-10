import styled from 'styled-components'

const PageFrameStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-menu {
    margin-bottom: 3rem;
    button {
      display: inline-block;
      color: var(--white);
      background-color: var(--pry-color);
      padding: .8rem 1rem;
      font-family: var(--pry-font);
      font-size: 1.6rem;
      text-transform: capitalize;
      border: 0;
      opacity: .6;
      cursor: pointer;

      &:not(:last-of-type) {
        margin-right: 1.5rem;
      }

      &.active {
        opacity: 1;
      }

      &:hover {
        opacity: 1;
        transition: .4s ease;
      }
    }
  }

`;

export default PageFrameStyles;