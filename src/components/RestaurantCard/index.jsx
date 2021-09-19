import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, RestaurantPhoto } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c" />
    </RestaurantInfo>
    <RestaurantPhoto />
  </Restaurant>
);

export default RestaurantCard;
