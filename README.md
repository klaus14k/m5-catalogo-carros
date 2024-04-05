Desenvolvendo e testado uma API de catálogo de carros

1 Introdução:

Nesta entrega, colocaremos em prática todos os conhecimentos aprendidos sobre testes automáticos, bem como, revisaremos todos os conhecimentos adquiridos em ciclo anteriores, desenvolvendo e testando uma API para gerenciamento de um catálogo de carros.

2 Requisitos essenciais:

A aplicação deverá ser desenvolvida em Typescript.

A aplicação deverá utilizar o framework Express.

A aplicação deverá respeitar o modelo a arquitetura apresentado nos ciclos de aula.

Os relacionamentos de classes deverão ser injeções de dependências utilizando a biblioteca Tsyringe. (opcional)

As validações e serializações deverão ser realizadas utilizando o Zod.

Deverão ser testados todos os serviços.

Deverão ser testados todas as rotas incluindo todos os casos previstos de sucesso e erro.

3 Banco de dados:

Como ponto de partida será necessário a criação de um banco de dados PostgreSQL. Segue a orientação para modelagem de tabela que deverá ser realizada com Prisma.

Car

id - chave primária - uuid.

name - texto - obrigatório.

description - texto - opcional.

brand - texto - obrigatório.

year - número - obrigatório.

km - número - obrigatório.

4 Rotas:

Crie as seguintes rotas com base na orientação abaixo:

Rota - Descrição

POST /cars
Rota de inserção de carros.

GET /cars
Leitura de carros.

GET /cars/:id
Leitura individual de carros.

PATCH /cars/:id
Atualização de carro.

DELETE /cars/:id
Exclusão do carro.

5 Comportamentos esperados:

POST /cars

Padrão de corpo

{
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}

Padrão de resposta

{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}

Possíveis erros:
STATUS (400) quando o corpo não é compatível com o padrão

Utilize o Zod para fazer a validação correta do corpo de requisição.

GET /cars

Padrão de resposta

[
   {
      "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
      "name": "Car name",
      "description": "Car description",
      "brand": "Card brand",
      "year": 2023,
      "km": 10000
   }
]

GET /cars/:id

Padrão de resposta

{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Card brand",
    "year": 2023,
    "km": 10000
}

Possíveis erros:
Status (404) - Carro não encontrado

{
    "message": "Car not found."
}

PATCH /cars/:id

Padrão de corpo

{
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}

Todos os campos deverão ser opcionais na atualização.

Padrão de resposta

{
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Card brand updated",
    "year": 2022,
    "km": 20000
}

Possíveis erros:
STATUS (400) quando o corpo não é compatível com o padrão

Utilize o Zod para fazer a validação correta do corpo de requisição.

Status (404) - Carro não encontrado

{
    "message": "Car not found."
}

DELETE /cars/:id

Está rota não tem um corpo de resposta, em caso sucesso o Status retornando deverá ser o 204.

Possíveis erros:
Status (404) - Carro não encontrado

{
    "message": "Car not found."
}

6 Finalização:

Com todas as rotas funcionando corretamente e todos os testes bem sucedidos, basta enviar o repositório para correção! Não se esqueça de adicionar o time de correções.
