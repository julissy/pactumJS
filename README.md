# qa.automationexercise-api.pactumjs

Este projeto utiliza [pactumJS](https://pactumjs.github.io/) para automação de testes na aplicação [ServeRest](https://serverest.dev/)

## Tecnologias Utilizadas

- **[pactumJS](https://pactumjs.github.io/):** Framework principal para automação de testes de API.
- **[Joi](https://joi.dev/):** Utilizada para validação de contratos das respostas das APIs.
- **[mocha](https://mochajs.org/):** Framework de execução dos testes.
- **[mochawesome](https://www.npmjs.com/package/mochawesome):** Gerador de relatórios dos testes.

## Requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [npm](https://www.npmjs.com/) (normalmente já incluso com o Node.js)

## Como instalar e executar o projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/julissy/qa.automationexercise-api.pactumjs.git
   cd qa.automationexercise-api.pactumjs
   ```

2. **Instale as dependências necessárias:**
   ```bash
   npm install
   ```

3. **Execute os testes de API e contrato:**
   ```bash
   npm run test
   ```
   Isso irá rodar todos os arquivos de teste localizados em `./test/*.test.js` utilizando o Mocha e gerar o relatório com o Mochawesome.

4. **Visualize o relatório dos testes:**
   Após a execução dos testes, abra o relatório HTML gerado:
   ```bash
   npm run report:open
   ```
   Isso abrirá automaticamente o arquivo `mochawesome-report/mochawesome.html` no navegador padrão.

## Exemplos

- Testes básicos de requisições HTTP usando o ServeRest.dev
- Validação de contratos das respostas com Joi
- Relatórios visuais de resultados dos testes
