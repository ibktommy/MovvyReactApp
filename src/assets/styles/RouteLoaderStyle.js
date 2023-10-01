import styled from 'styled-components';

const RouteLoaderStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  display: flex;
  justify-content: center;
  align-items: center;

	.loaders {
		height: 6rem;
		display: flex;
		align-items: flex-end;
	}

	.loaders div {
		display: inline-block;
		width: 2rem;
		background: var(--pry-color);
	}

	.loaders div:not(:last-of-type) {
		margin-right: 1.5rem;
	}

	@keyframes loaders {
		0% {
			height: 0%;
		}
		50% {
			height: 100%;
		}
		100% {
			height: 0%;
		}
	}

	.loaders div:nth-of-type(1) {
		animation: loaders 2s 0.1s infinite;
	}
	.loaders div:nth-of-type(2) {
		animation: loaders 2s 0.3s infinite;
	}
	.loaders div:nth-of-type(3) {
		animation: loaders 2s 0.5s infinite;
	}
`;

export default RouteLoaderStyles;
