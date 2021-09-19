import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import { Container, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
        </Search>
        </Container>
      </Wrapper>
  );
};
export default Home;
