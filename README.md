<h1 align="center">Nest.JS Second Service</h1>

## Description:

It often happens that while working on one project, you need to use another project from within it.  
For example, If you have more than one service and need to use a unified schema or any code shared between these services.  
In this project, I use [Shared-Service](https://github.com/MohamedAlabasy/Shared-Service) to do that.

## To run this project

`Step 1` : To use this project must install [Node.js](https://nodejs.org/en/), [Nest.Js](https://nestjs.com/) and [Mongodb](https://www.mongodb.com/try/download/community) Then Download the source code

```
git clone https://github.com/MohamedAlabasy/Second-Service
```

`Step 2` : Enter the project file then get submodule

```
git submodule update --init
```

you can merge `step 1` and `step 2` by using this command

```
git clone --recurse-submodules https://github.com/MohamedAlabasy/Second-Service
```

`Step 3` : Enter the project file then install package

```
npm i
```

`Step 3` : Run server on watch mode :

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
