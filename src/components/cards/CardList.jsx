/* eslint-disable react/prop-types */
import CardListStyles from '../../assets/styles/CardListStyles';
import CardItem from './CardItem';

const CardList = ({ data }) => {
	const dataDetails = data.results;
	return (
		<CardListStyles>
			<div className='card-list'>
				{dataDetails.map((dataItem) => {
						const { id } = dataItem;
					return <CardItem dataItem={dataItem} key={id} />;
				})}
			</div>
		</CardListStyles>
	);
};

export default CardList;
