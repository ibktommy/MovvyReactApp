import styled from 'styled-components'

const CardList = styled.div`
	width: 100%;
	overflow: hidden;
	margin: 2rem 0;

  /* .swiper-grid {
    width: 100%;
    display: grid !important;
    grid-template-columns: repeat(5, 1fr)!important;
  } */

	.image-card {
		width: calc(25rem + 2vw) !important;
		height: auto !important;
		flex-shrink: 0;
		box-shadow: var(--card-shadow);
    padding-bottom: 2rem;
	}

	.image-card img {
		width: 100%;
		height: 80%;
		object-fit: cover;
    user-select: none;
	}

	.image-card .card-item-details {
		height: 20%;
    width: 100%;
		padding: 0 0.5rem;
		display: flex;
    align-items: center;
	}

  .image-card .card-item-details .card-item-texts {
    flex-basis: 60%;
  }

	.image-card .card-item-details .card-item-texts .title {
		font-size: 1.35rem;
    font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.image-card .card-item-details .card-item-texts .date {
		font-size: 1.2rem;
	}

	.image-card .card-item-details .card-item-info {
		margin-left: auto;
	}

	.image-card .card-item-details .card-item-info .rating {
    width: fit-content;
    margin-left: auto;
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
		/* border: 0.1rem solid #000; */
	}

	.image-card .card-item-details .card-item-info .rating p {
		font-size: 1.2rem;
		margin-right: 0.5rem;
	}

	.image-card .card-item-details .card-item-info .rating #like-icon {
		width: 1.5rem;
		height: 100%;
	}

	.image-card .card-item-details .card-item-info button {
		display: inline-block;
		background-color: var(--pry-color);
		border: 0.2rem solid var(--pry-color);
		color: var(--white);
		font-size: 1.3rem;
		padding: 0.5rem 1rem;
    border-radius: .4rem;
    font-family: var(--pry-font);
    cursor: pointer;

    &:hover {
      background: none;
      color: var(--pry-color);
      transition: all.4s ease;
    }
	}
`;

export default CardList