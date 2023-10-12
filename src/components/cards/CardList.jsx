/* eslint-disable react/prop-types */
import CardListStyles from '../../assets/styles/CardListStyles';
import CardItem from './CardItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardList = ({ data, title }) => {
	const dataDetails = data.results;
	return (
		<CardListStyles>
			<Swiper spaceBetween={20} slidesPerView={'auto'} className='swiper-grid'>
				{
					dataDetails.map((dataItem) => {
						const { id } = dataItem
						return (
							<SwiperSlide key={id} className='image-card'>
								<CardItem dataItem={dataItem} title={title}/>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</CardListStyles>
	);
};

export default CardList;
