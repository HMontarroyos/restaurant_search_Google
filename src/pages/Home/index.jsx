import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import Image from '../../assets/no_image.png';
import { Marker } from 'google-maps-react';

import {
    Container,
    Search,
    Logo,
    Wrapper,
    Carousel,
    CarouselTitle,
    ModalTitle,
    ModalContent,
} from './styles';
import ImageCard from '../../components/ImageCard';
import RestaurantCard from '../../components/RestaurantCard';
import Modal from '../../components/Modal';
import Map from '../../components/Map';
import Loading from '../../components/Loading';
import Skeleton from '../../components/Skeleton';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo da empresa" />
                    <TextField
                        outlined
                        label="Pesquisar Restaurantes"
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input
                            type="text"
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>Na sua Área</CarouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => (
                                    <ImageCard
                                        key={restaurant.place_id}
                                        photo={
                                            restaurant.photos
                                                ? restaurant.photos[0].getUrl()
                                                : Image
                                        }
                                        title={restaurant.name}
                                    />
                                ))}
                            </Carousel>
                        </>
                    ) : (
                        <Loading />
                    )}
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        onClick={() => handleOpenModal(restaurant.place_id)}
                        restaurant={restaurant}
                    />
                ))}
                <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                    {restaurantSelected ? (
                        <>
                            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                            <ModalContent>
                                {restaurantSelected?.formatted_phone_number}
                            </ModalContent>
                            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                            <ModalContent>
                                {restaurantSelected?.opening_hours?.open_now
                                    ? 'Aberto Agora'
                                    : 'Fechado neste momento'}
                            </ModalContent>
                        </>
                    ) : (
                        <>
                            {[0, 1, 2, 3].map(() => (
                                <Skeleton width="10px" height="10px" />
                            ))}
                        </>
                    )}
                </Modal>
            </Container>
            <Map query={query} placeId={placeId}>
                {restaurants.map((restaurant) => (
                    <Marker
                        onClick={() => handleOpenModal(restaurant.place_id)}
                        key={restaurant.place_id}
                        name={restaurant.name}
                        position={{
                            lat: restaurant.geometry.location.lat(),
                            lng: restaurant.geometry.location.lng(),
                        }}
                    />
                ))}
            </Map>
        </Wrapper>
    );
};
export default Home;

//TODO: horario de funcionamento
