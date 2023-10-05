import styled from 'styled-components'

const CardItemStyles = styled.article`
  width: 30rem;
  height: 40rem;
  flex-shrink: 0;
  box-shadow: var(--card-shadow);
  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
    /* border: .1rem solid #000; */
  }

  .card-item-details {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-item-details > * {
    flex-shrink: 0;
  }

  .card-item-texts {

  }
`;

export default CardItemStyles;