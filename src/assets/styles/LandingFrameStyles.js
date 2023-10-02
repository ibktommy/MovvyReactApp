import styled from 'styled-components'

const LandingFrameStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: .1rem solid var(--text-dark);
  padding: .5rem 0.2rem 1rem 0.2rem;
  &:first-of-type {
    margin-bottom: 5rem;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  a {
    display: inline-block;
    align-self: flex-end;
    margin-top: 2rem;
    font-family: var(--sec-font);
    font-size: 1.6rem;
    text-transform: lowercase;
  }
`;

export default LandingFrameStyles