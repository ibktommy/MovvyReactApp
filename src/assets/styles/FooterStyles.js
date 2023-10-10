import styled from 'styled-components'

const FooterStyles = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  h4 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export default FooterStyles;