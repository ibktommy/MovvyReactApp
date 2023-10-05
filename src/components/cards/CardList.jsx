/* eslint-disable react/prop-types */
import CardListStyles from '../../assets/styles/CardListStyles';
import CardItem from './CardItem';

const CardList = ({ data }) => {
	const dataDetails = data.results;
	return (
		<CardListStyles>
			<div className='card-list'>
				{dataDetails.map((dataItem, index) => {
					return <CardItem dataItem={dataItem} key={index} />;
				})}
			</div>
		</CardListStyles>
	);
};

export default CardList;
