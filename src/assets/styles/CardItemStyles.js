import styled from 'styled-components'

const CardItemStyles = styled.article`
  width: 25rem;
  height: 30rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }

  .card-item-details {
    width: 100%;
    height: 25%;
  }
`;

export default CardItemStyles;