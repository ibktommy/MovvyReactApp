import styled from 'styled-components'

const ErrorPageStyles = styled.section `
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;

    img {
      width: 30rem;
    }

    h2 {
      font-family: var(--sec-font);
      font-size: 1.6rem;
      font-weight: 500;
      text-align: center;
      margin: 2rem 0;
      text-transform: uppercase;
      letter-spacing: .1rem;
    }
  }
`

export default ErrorPageStyles