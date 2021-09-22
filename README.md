# Bootcamp Digital Inovation - Buscador de Restaurantes

Projeto Desenvolvido no Bootcamp Digital Inovation LocalizaLabs React Developer.
É um projeto onde o usuário habilita sua localização e digita um estabelecimento ou determinada comida e o mesmo lista os restaurantes proximo a sua localidade passada.
Este Projeto se usou dos Hooks do React juntamente com o consumo das APIs do Google Places e Google Maps api e para gerenciar os estados da aplicação foi utilizado o redux.
Além de demais libs que estarei dando ênfase à algumas das muitas que foram utilizadas no projeto, com mais detalhes abaixo, sobre sua funcionalidade que colaborou com o desenvolvimento do projeto. Ao final do projeto foi feito seu Deploy no netlify.

### Ferramentas Utilizadas na Criação do Projeto

-   [Lottie Files](https://lottiefiles.com/).
    O Lottie Files é uma biblioteca de animação leve e escalável.
    Cada animação é baixada em Lottie que é um formato de arquivo de animação de código aberto em JSON, de alta qualidade, interativo e pode ser manipulado em tempo de execução na sua aplicação .

-   [Styled Components ](https://styled-components.com/).
    Styled-Components é uma biblioteca para React e React Native que permite usar estilos de nível de componente em seu aplicativo que são escritos com uma mistura de JavaScript e CSS usando uma técnica chamada CSS-in-JS.

-   [React Slick ](https://react-slick.neostack.com/).
    É uma lib para React para criar carroseis de imagens.
    React slick é um componente de carrossel construído com React.

-   [React Rating Stars](https://www.npmjs.com/package/react-rating-stars-component).
    É uma lib para React para criar estrelas que podem ser usadas como avaliações em alguma aplicação.
    React Rating Stars é um componente de avaliação construído com React.

-   [Styled Reset ](https://www.npmjs.com/package/styled-reset).
    É uma lib para React para zerar todos os estilos padrões do CSS que ficam por default nos navegadores.

-   [Material UI](https://mui.com/pt/).
    É uma biblioteca de estilos para React, personalizável e acessível de componentes básicos e avançados, com sua própria paleta de cores, permitindo que você construa seu próprio sistema de design e desenvolva aplicativos React com mais rapidez.
    Nesse projeto utilizei em questão um componente dessa biblioteca que foi para criar o [componente de Pesquisar](https://www.npmjs.com/package/@material/react-text-field)

-   [Google Maps React ](https://www.npmjs.com/package/google-maps-react).
    É uma biblioteca que serve como auxiliar para envolver a API do Google maps e trabalhar com seus componentes já prontos em React no front de sua aplicação.

-   [Editor Config ](https://editorconfig.org/).
    [ESlint](https://eslint.org/).
    Utilizei do ESlint como ferramenta para análise de código estática para identificar padrões problemáticos encontrados no código JavaScript em conjunto com o Editor Config para indentação padronizado do código.

-   [Redux](https://redux.js.org/).
    Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo,
    onde é utilizado para armazenamento de estados de aplicações utilizando da implementação do Flux, uma arquitetura criada pelo Facebook para contribuir com as aplicações de User Interface, utilizando o conceito de fluxo de dados unidirecional.

-   [Netilfy](https://www.netlify.com/).
    Plataforma rapida e escalavel para efetuar de forma agil o Deploy de sua aplicação além de que oferece hospedagem e serviços de back-end sem servidor para aplicativos da web e sites estáticos.

## Como Rodar o Projeto ?

Após Clonar o Projeto, já em sua maquina utilize o seguinte comando para baixar suas dependências.

### `yarn`

Para Baixar as Dependências do Projeto

### `yarn start`

Para Inicializar o Projeto
Abrir [http://localhost:3000](http://localhost:3000) visualizar no Navegador.

## Configurando as variáveis ambiente

Crie um Arquivo Chamado .env.local na sua pasta raiz do Projeto passando os parâmetros após ter criado uma conta no [Console Cloud Google](https://console.cloud.google.com/) e ter criado seu projeto lá.

`REACT_APP_GOOGLE_API_KEY=""`

## Criando uma conta no Console Cloud do Google e Inicializando um Projeto

Após ter criado o Projeto você irá ter algumas opções porém para esta aplicação basta você escolher a opção Criar credenciais "Chave de API".
E depois de criada você pode estar restringido ela ao seu uso pois só ira utilizar 2 apis do Google nesse projeto que são : Places API e Google Maps API

Um breve resumo abaixo como fazer cada etapa :

[Como Criar uma conta no Console Cloud e Iniciar um Projeto](https://support.google.com/cloudidentity/answer/7378726?hl=pt-BR)

## Efetuando Deploy com Netilfy

Após ter criado uma conta no Netilfy e só escolher aonde esta hospedado o seu repositório do seu projeto selecionar o mesmo e após isso ir em configurações avançadas para passar a chave APIKYGOOGLE pois como a mesma não sobe para o repositório e necessário passar ela como variável local privada no Netilfy e após isso so clicar em Deploy e aguardar, após os teste se estiver tudo certo será gerado o link com o sua aplicação já hospedada no ar.

### link do Deploy no Netilfy

[Restaurant Food Search](https://restaurant-food-search.netlify.app/)

### 🚀 Let's code! 🚀
