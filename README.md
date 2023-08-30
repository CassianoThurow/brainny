
# Front end test - Brainny

Foi proposto a criação de uma landing page para ser avalidado no processo seletivo para desenvolvedor front end.

## Tech Stack

**Client:** React, ChakraUI



## Run Locally

Clone the project

```bash
  git clone https://github.com/CassianoThurow/brainny
```

Go to the project directory

```bash
  cd brainny
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Documentation

Um dos desafios principais, foi a adapação ao uso do ChakraUI, apesar de ser facil de implementar e entender como ele funciona, levou um tempo até pegar o jeito.
Outo ponto foi a criação do slider com o efeito 3D, levei um tempo para conseguir desenvolver e chegar no resultado esperado (utilizei algumas bibliotecas terceiras para desenvolver).

No mais, a integração com a API em graphql não pareceu ser complexa, mas aparentemente estava com um problema para rodar as queries, parecia que não tinha acesso para rodar qualquer query:

ex:
query teste {
roles {
name
}
}

retornava isso: 



## Usage/Examples

```javascript
{
  "errors": [
    {
      "message": "Forbidden",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "roles"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "data": null,
          "isBoom": true,
          "isServer": false,
          "output": {
            "statusCode": 403,
            "payload": {
              "statusCode": 403,
              "error": "Forbidden",
              "message": "Forbidden"
            },
            "headers": {}
          },
          "message": "Forbidden",
          "stacktrace": [
            "Error: Forbidden",
            "    at handleErrors (/application/teste-frontend-api/teste-frontend-api/node_modules/strapi-plugin-users-permissions/config/policies/permissions.js:92:28)",
            "    at module.exports (/application/teste-frontend-api/teste-frontend-api/node_modules/strapi-plugin-users-permissions/config/policies/permissions.js:79:12)",
            "    at async /application/teste-frontend-api/teste-frontend-api/node_modules/strapi-plugin-graphql/node_modules/strapi-utils/lib/policy.js:68:5",
            "    at async /application/teste-frontend-api/teste-frontend-api/node_modules/strapi-plugin-graphql/services/resolvers-builder.js:97:7",
            "    at async /application/teste-frontend-api/teste-frontend-api/node_modules/strapi-plugin-graphql/services/type-definitions.js:53:19"
          ]
        }
      }
    }
  ],
  "data": {
    "roles": null
  }
}
```

