import RecommedationsListStyles from "../../assets/styles/RecommendationsListStyles"
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "./CardItem";

const RecommendationsList = ({dataItem, title}) => {
  return (
		<RecommedationsListStyles>
			<h3>check out these recommendations</h3>
			<div className='recommendations-cardlist'>
				<Swiper
					spaceBetween={20}
					slidesPerView={'auto'}
					className='swiper-container'
				>
					{dataItem.map((dataItem) => {
						return (
							<SwiperSlide key={dataItem.id} className='image-card'>
								<CardItem dataItem={dataItem} title={title}/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</RecommedationsListStyles>
	);
}

export default RecommendationsList