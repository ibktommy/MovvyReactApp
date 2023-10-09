import styled from 'styled-components'

const FrameStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow:var(--frame-shadow);
  padding: .5rem 0.5rem 1rem 0.5rem;
  margin-bottom: 5rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .spinner {
    align-self: center;
  }

  .frame-para {
    align-self: center;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-style: italic;
    opacity: .7;
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

export default FrameStyles