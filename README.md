# Teste - Brain Agriculture

## Pré-requisitos

Antes de começar garanta que as seguintes aplicações estão instaladas:

- [Docker](https://docs.docker.com/get-docker/)

## Execução do projeto

Com o Docker instalado, o comando abaixo irá configurar um banco de dados PostgreSQL e a aplicação.

```bash
docker compose build
docker compose up -d
```

## Rotas da API

Requisições relativas ao endereço `http://localhost:3000`.

### Criação do Produtor

| Método | Request | Descrição                                               |
| ------ | ------- | ------------------------------------------------------- |
| POST   | /farmer | Cria um produtor com sua respectiva fazenda e culturas. |

Body da requisição:

```json
{
  "name": "John Doe",
  "cpf": "85767230005",
  "farm": {
    "city": "Sao Jose do Rio Preto",
    "province": "Sao Paulo",
    "area": 5000,
    "cropArea": 3000,
    "vegetationArea": 1000,
    "crops": [
      {
        "name": "Soja"
      }
    ]
  }
}
```

### Informações do Dashboard

| Método | Request    | Descrição                                             |
| ------ | ---------- | ----------------------------------------------------- |
| GET    | /dashboard | Retorna todas as informações referentes ao Dashboard. |

Exemplo de response:

```json
{
  "dashboard": {
    "farmCount": "7",
    "totalArea": "350000",
    "totalCropArea": "210000",
    "totalVegetationArea": "140000",
    "provinceFarmStats": [
      {
        "province": "Sao Paulo",
        "farmCount": "7",
        "totalArea": "350000"
      }
    ],
    "cropFarmStats": [
      {
        "crop": "Soja",
        "farmCount": "4"
      },
      {
        "crop": "Cana de açúcar",
        "farmCount": "1"
      },
      {
        "crop": "Algodão",
        "farmCount": "1"
      },
      {
        "crop": "Milho",
        "farmCount": "1"
      }
    ]
  }
}
```
