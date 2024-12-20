import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Mousewheel, Pagination } from 'swiper/modules';
import { IconButton } from '@mui/material';
import './style.css'

const productArr = [
  {
    ImageUrl: 'https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image002.jpg?v=20210616T144221',
    price: '$10',
    productTitle: 'Hoodie Blazer',
  },
  {
    ImageUrl: 'https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image004.jpg?v=20210616T144221',
    price: '$20',
    productTitle: 'Boiler suits',
  },
  {
    ImageUrl: 'https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image006.jpg?v=20210616T144221',
    price: '$30',
    productTitle: 'Colour Blocking',
  },
  {
    ImageUrl: 'https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image008.jpg?v=20210616T144221',
    price: '$40',
    productTitle: 'Maxies Fashion',
  },
  {
    ImageUrl: 'https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image010.jpg?v=20210616T144221',
    price: '$50',
    productTitle: 'Goth latest',
  },
  {
    ImageUrl: 'https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image012.jpg?v=20210616T144221',
    price: '$40',
    productTitle: 'Shackets',
  },
  
  
];

const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className="w-full mt-6">
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArr.map(({ ImageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              ImageUrl={ImageUrl}
              price={price}
              productTitle={productTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ ImageUrl, price, productTitle }) => (
  <IconButton
    sx={{
      padding: '4px',
      borderRadius: '5px',
      color: 'red',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      margin : '3px',
      marginBottom:'30px'
    }}
  >
    <div className="w-full ">
      <img
        src={ImageUrl}
        alt={`product_unit_${productTitle}`}
        className="w-full object-contain"
      />
      <h3 className="text-sm font-semibold text-stone-950">{productTitle}</h3>
      <h3 className="text-lg font-semibold text-stone-950">{price}</h3>
    </div>
  </IconButton>
);
