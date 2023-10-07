/* eslint-disable react/prop-types */
import CardListStyles from '../../assets/styles/CardListStyles';
import CardItem from './CardItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardList = ({ data }) => {
	const dataDetails = data.results;
	return (
		<CardListStyles>
			<Swiper spaceBetween={20} slidesPerView={4.9}>
				{
					dataDetails.map((dataItem) => {
						const { id } = dataItem
						return (
							<SwiperSlide key={id} className='image-card'>
								<CardItem dataItem={dataItem}/>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</CardListStyles>
	);
};

export default CardList;
