import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';

import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle } from './styles';
import { ImageCard } from '../../components/ImageCard';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo da empresa" />
          <TextField
            outlined
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <ImageCard photo={'teste'} title={'teste'} />
          </Carousel>
        </Search>
      </Container>
    </Wrapper>
  );
};
export default Home;
