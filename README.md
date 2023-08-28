<a name="readme-top"></a>


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br>

  <a href="#Buscador de Restaurantes">Buscador de Restaurantes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias-Utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-Instalar-o-Projeto">Como Instalar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Deploy-da-aplicação">Deploy da aplicação</a>


<br>

## <strong>Buscador de Restaurantes</strong>

<br>

#### <strong>Desktop</strong>

<br>

![restaurante gif](https://user-images.githubusercontent.com/60220406/138523571-565b2f5c-9c5f-4c61-af41-733fd55fe05b.gif)


<br>

#### <strong>Mobile</strong>

<br>

<img width="300" alt="mobile home" src="https://uploaddeimagens.com.br/images/004/522/175/original/mobile_restaurante.png?1687872347">


<br>

Este projeto foi desenvolvidor no Bootcamp Digital Inovation LocalizaLabs React Developer, consiste de uma aplicação onde o usuário habilita sua localização e digita um estabelecimento ou determinada comida e o mesmo lista os restaurantes proximo a sua localidade passada.
Este Projeto se usou dos Hooks do React juntamente com o consumo das APIs do Google Places e Google Maps api e para gerenciar os estados da aplicação foi utilizado o Redux.


<br/>




<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>


### <strong>Tecnologias Utilizadas</strong>

<br>

  [![React][React]][React-url]
  [![Styled_Components][Styled_Components]][Styled_Components-url]
  [![Lottie_Files][Lottie_Files]][Lottie_Files-url]
  [![React_Slick][React_Slick]][React_Slick-url]
  [![React_Rating_Stars][React_Rating_Stars]][React_Rating_Stars-url]
  [![Styled_Reset][Styled_Reset]][Styled_Reset-url]
  [![Material_UI][Material_UI]][Material_UI-url]
  [![Google_Maps_React][Google_Maps_React]][Google_Maps_React-url]
  [![Redux][Redux]][Redux-url]


<br>

### <strong>Utilitários</strong>

<br>

  [![Netlify][Netlify]][Netlify-url]
  [![ESlint][ESlint]][ESlint-url]
  [![Editor_Config][Editor_Config]][Editor_Config-url]


<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>


### <strong>Como Instalar o Projeto</strong>
<br>

### Configurando as variáveis ambiente

<br>

Crie um Arquivo Chamado .env.local na sua pasta raiz do Projeto passando os parâmetros após ter criado uma conta no [Console Cloud Google](https://console.cloud.google.com/) e ter criado seu projeto lá.

`REACT_APP_GOOGLE_API_KEY=""`

<br>

### Criando uma conta no Console Cloud do Google e Inicializando um Projeto

<br>

Após ter criado o Projeto você irá ter algumas opções porém para esta aplicação basta você escolher a opção Criar credenciais "Chave de API".
E depois de criada você pode estar restringido ela ao seu uso pois só ira utilizar 2 apis do Google nesse projeto que são : Places API e Google Maps API

Um breve resumo abaixo como fazer cada etapa :

[Como Criar uma conta no Console Cloud e Iniciar um Projeto](https://support.google.com/cloudidentity/answer/7378726?hl=pt-BR)

<br>

### Efetuando Deploy com Netilfy

<br>
Após ter criado uma conta no Netilfy e só escolher aonde esta hospedado o seu repositório do seu projeto selecionar o mesmo e após isso ir em configurações avançadas para passar a chave APIKYGOOGLE pois como a mesma não sobe para o repositório e necessário passar ela como variável local privada no Netilfy e após isso so clicar em Deploy e aguardar, após os teste se estiver tudo certo será gerado o link com o sua aplicação já hospedada no ar.


<br> 
<br>
<br>


Após Clonar o Projeto, já em sua maquina utilize o seguinte comando para baixar suas dependências.

```sh
 yarn
```
Após baixar todas as Dependências do Projeto dentro da pasta Raiz, inicie o Servidor com o Comando: 

```sh
 yarn start
```
<br>

### <strong>Como usar</strong> 
<br>

Para Inicializar o Projeto 
Abrir [http://localhost:3000](http://localhost:3000) vizualizar no Navegador. 

<br>

### <strong>Deploy da aplicação</strong> 
<br>

[![Deploy][Deploy]][Deploy-url]

<br>


### 🚀 Let's code! 🚀 ###


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/HMontarroyos/restaurant_search_Google.svg?style=for-the-badge
[contributors-url]: https://github.com/HMontarroyos/restaurant_search_Google/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HMontarroyos/restaurant_search_Google.svg?style=for-the-badge
[forks-url]: https://github.com/HMontarroyos/restaurant_search_Google/fork
[stars-shield]: https://img.shields.io/github/stars/HMontarroyos/restaurant_search_Google.svg?style=for-the-badge
[stars-url]: https://github.com/HMontarroyos/restaurant_search_Google/stargazers
[issues-shield]: https://img.shields.io/github/issues/HMontarroyos/restaurant_search_Google.svg?style=for-the-badge
[issues-url]: https://github.com/HMontarroyos/restaurant_search_Google/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hebertmontarroyos-developer/

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://pt-br.react.dev/

[Styled_Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled_Components-url]: https://styled-components.com/

[Lottie_Files]: https://img.shields.io/badge/Lottie%20Files-%23049fd9.svg?style=for-the-badge
[Lottie_Files-url]: https://lottiefiles.com/

[React_Slick]: https://img.shields.io/badge/React%20Slick-%23217346.svg?style=for-the-badge
[React_Slick-url]: https://react-slick.neostack.com/

[React_Rating_Stars]: https://img.shields.io/badge/React%20Rating%20Stars-%23FF9900.svg?style=for-the-badge
[React_Rating_Stars-url]: https://www.npmjs.com/package/react-rating-stars-component

[Styled_Reset]: https://img.shields.io/badge/Styled%20Reset-hotpink.svg?style=for-the-badge
[Styled_Reset-url]: https://www.npmjs.com/package/styled-reset

[Material_UI]: https://img.shields.io/badge/Material%20UI-5A0EF8?style=for-the-badge
[Material_UI-url]: https://mui.com/pt/

[Google_Maps_React]: https://img.shields.io/badge/Google%20Maps%20React-4285F4?style=for-the-badge&logo=google&logoColor=white
[Google_Maps_React-url]: https://www.npmjs.com/package/google-maps-react

[Redux]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/



[ESlint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESlint-url]: https://eslint.org/
[Editor_Config]: https://img.shields.io/badge/Editor%20Config-%230db7ed.svg?style=for-the-badge
[Editor_Config-url]: https://editorconfig.org/
[Netlify]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[Netlify-url]: https://www.netlify.com/
[Deploy]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[Deploy-url]: https://restaurant-food-search.netlify.app/
