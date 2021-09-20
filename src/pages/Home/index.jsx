import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import Image from '../../assets/restaurante-fake.png';

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle } from './styles';
import ImageCard from '../../components/ImageCard';
import RestaurantCard from '../../components/RestaurantCard';
import Modal from '../../components/Modal';
import Map from '../../components/Map';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
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
          <CarouselTitle>Na sua Área</CarouselTitle>
          {restaurants.map((restaurant) => (
            <Carousel {...settings}>
              <ImageCard
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : Image}
                title={restaurant.name}
              />
            </Carousel>
          ))}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
      </Container>
      <Map query={query} />
    </Wrapper>
  );
};
export default Home;
