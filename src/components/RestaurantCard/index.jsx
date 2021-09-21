import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Image from '../../assets/no_image.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoading, setImageLoading] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    value={restaurant.rating}
                    edit={false}
                    isHalf
                    activeColor="#e7711c"
                />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoading}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : Image}
                onLoad={() => setImageLoading(true)}
                alt={'Foto do Restaurante'}
            />
            {!imageLoading && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );
};

export default RestaurantCard;
