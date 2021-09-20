import React from 'react';
import ReactStars from 'react-rating-stars-component';
import Image from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto } from './styles';

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : Image}
      alt={'Foto do Restaurante'}
    />
  </Restaurant>
);

export default RestaurantCard;
