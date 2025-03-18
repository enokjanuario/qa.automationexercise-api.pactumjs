# Testes de API - Automation Exercise com PactumJS

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-000000?style=for-the-badge&logo=fastapi&logoColor=white)



Este projeto contém testes automatizados para a API do Automation Exercise utilizando PactumJS, Mocha, Chai e Joi. O projeto implementa testes de contrato e funcionais para validar o comportamento dos endpoints da API.

A API testada está disponível em: [https://automationexercise.com/api_list](https://automationexercise.com/api_list)

## Estrutura do Projeto

```
qa.automationexercise-api.pactumjs/
├── .github/workflows/    # Arquivos de workflow do GitHub Actions
├── src/                  # Código fonte
│   ├── config/           # Arquivos de configuração
│   ├── data/             # Dados para os testes
│   ├── helpers/          # Funções auxiliares
│   ├── schemas/          # Schemas Joi para validação de contrato
│   └── tests/            # Arquivos de teste
│       ├── contract/     # Testes de contrato
│       └── functional/   # Testes funcionais
├── .gitignore            # Arquivo .gitignore
├── package.json          # Dependências e scripts do projeto
├── .mocharc.js           # Configuração do Mocha
└── README.md             # Documentação do projeto
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript utilizado como base para o projeto.
- **PactumJS**: Framework de teste de API REST que simplifica a criação, execução e validação de testes de API.
- **Mocha**: Framework de teste JavaScript que executa testes de maneira organizada e gera relatórios precisos.
- **Chai**: Biblioteca de asserção que integra perfeitamente com o Mocha para verificar resultados esperados.
- **Joi**: Biblioteca de validação de esquemas para verificar a estrutura dos dados retornados pelas APIs.
- **Mochawesome**: Gerador de relatórios personalizados para o Mocha.
- **GitHub Actions**: Ferramenta de CI/CD para automatizar a execução dos testes a cada push ou pull request.

## Dependências

O projeto utiliza as seguintes dependências principais:

- **pactum**: ^3.5.0 - Framework de teste de API REST
- **chai**: ^4.3.7 - Biblioteca de asserção
- **joi**: ^17.9.2 - Validação de esquemas
- **mocha**: ^10.2.0 - Framework de teste
- **mochawesome**: ^7.1.3 - Gerador de relatórios

## Instalação

1. Certifique-se de ter o Node.js (v14 ou superior) e npm (v6 ou superior) instalados.

2. Clone o repositório:
   ```bash
   git clone https://github.com/enokjanuario/qa.automationexercise-api.pactumjs.git
   ``` 
   ```bash
   cd qa.automationexercise-api.pactumjs
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando os Testes

### Executar todos os testes:
```bash
npm test
```

### Executar apenas testes de contrato:
```bash
npm run test:contract
```

### Executar apenas testes funcionais:
```bash
npm run test:functional
```

### Gerar relatório de testes:
```bash
npm run report
```
O relatório será criado no diretório `reports`.

## Padrões de Projeto e Arquitetura

O projeto segue uma estrutura organizada e padrões para garantir manutenibilidade e escalabilidade:

1. **Separação de Responsabilidades**:
    - `/config`: Configurações centralizadas para URLs, endpoints e parâmetros
    - `/data`: Dados isolados para testes
    - `/helpers`: Funções utilitárias reutilizáveis
    - `/schemas`: Esquemas Joi para validação de resposta
    - `/tests`: Testes organizados por tipo

2. **Page Object Pattern Adaptado**:
    - Implementação de objetos que representam endpoints da API, encapsulando a lógica de interação

3. **Factory Pattern**:
    - Geração de dados de teste dinâmicos via funções de fábrica

4. **Handler Pattern**:
    - Uso de handlers customizados para estender as funcionalidades do PactumJS

5. **Gestão de Estados**:
    - Uso de hooks (before/beforeEach) para preparar e limpar o estado entre testes

## Casos de Teste

### Testes de Contrato
- **API 1**: Get All Products List - Valida código de status 200 e estrutura da resposta
- **API 12**: DELETE METHOD To Delete User Account - Valida código de status 200 e estrutura da resposta

### Testes Funcionais
- **API 11**: POST To Create/Register User Account
    - Cria um novo usuário com sucesso
    - Trata tentativa de registro de usuário duplicado
    - Valida esquema de resposta e mensagens
- **API 12**: DELETE METHOD To Delete User Account
    - Exclui com sucesso uma conta de usuário existente
    - Trata exclusão de usuário inexistente
    - Valida esquema de resposta e mensagens

## CI/CD

Este projeto utiliza GitHub Actions para integração contínua. O pipeline é executado a cada push para a branch principal e em pull requests, realizando as seguintes etapas:

1. Checkout do código
2. Configuração do ambiente Node.js
3. Instalação de dependências
4. Execução de testes de contrato
5. Execução de testes funcionais
6. Geração e upload do relatório de testes

O arquivo de configuração da pipeline está localizado em `.github/workflows/main.yml`.

## Relatórios de Testes

O projeto utiliza Mochawesome para gerar relatórios detalhados em HTML. Após a execução dos testes com o comando `npm run report`, os relatórios são gerados no diretório `reports`.

Os relatórios incluem:
- Taxa de sucesso/falha
- Tempo de execução
- Detalhes de cada teste
- Stack trace para falhas
- Visualização da requisição e resposta

