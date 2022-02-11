import React from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview.styled";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./swiper.css";
SwiperCore.use([Pagination, Navigation]);

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title}
      </TitleContainer>
      <PreviewContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640:{
              spaceBetween:20,
              slidesPerView: 2,
              slidesPerGroup:2
            },
            // when window width is >= 768px
            768: {
              spaceBetween:20,
              slidesPerView: 3,
              slidesPerGroup:3,
            },
           
          }}
          className="mySwiper swiper-container"
        >
          {items.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <CollectionItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
