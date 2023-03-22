# To-do list

O projeto tem como objetivo desenvolver uma aplicação Full stack, onde as tarefas são armazenadas em um banco de dados, visando o estudo da integração entre o front e o back.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Para a aplicação funcionar, é necessário que você tenha todos esses itens em sua máquina

```
Node.js
NPM
Visual studio code
Docker
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Após clonar o projeto, acesse a pasta 'web' e execute o seguinte comando

```
npm install yarn
```

Em seguida, acesse a pasta server e execute o seguinte comando

```
npm install yarn
```

Para o back end será necessário criar um container com docker, realize a instalação do docker e execute o seguinte comando dentro de server

```
docker run --name some-postgres -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
```

Em seguida, verifique se o arquivo .env possui a seguinte estrutura

```
DATABASE_URL="postgresql://postgres:senha@localhost:5432/todolist?schema=public"
```

Por fim, para rodar o front e o back, execute o seguinte comando dentro de cada pasta

```
yarn dev
```

Com isso, a aplicação estará funcionando localmente e pronta para ser utilizada.


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [ReactJs](https://react.dev) - Uma das bibliotecas de JS mais utilizada na atualidade
* [Css Modules](https://github.com/css-modules/css-modules) - Uma eficiênte de usar Css
* [Fastify](https://www.fastify.io) - Framework do Node.js
* [Prisma](https://www.prisma.io) - Poderoso ORM da atualidade 


## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Eduardo Ramone** - *Desenvolveu o back end* - [Github](https://github.com/DuduRamone)/[Linkedln](https://www.linkedin.com/in/eduardo-ramone-90801b1b6/)
* **Leandro Müller** - *Desenvolveu o back end e a documentação* - [Github](https://github.com/mullerino)/[Linkdeln](https://www.linkedin.com/in/leandromuller7/)
* **Thullyo Damasceno** - *Desenvolveu o front end* - [Github](https://github.com/thullyoufrn)/[Linkdeln](https://www.linkedin.com/in/thullyo-damasceno-375083231/)


## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;