# 🌐 JavaScript Lab

Laboratório de estudos em **JavaScript moderno**, com foco em lógica, manipulação de dados e organização de código.

## 🎯 Objetivo

O projeto reúne exemplos pequenos e práticos para exercitar fundamentos importantes do JavaScript, mantendo o código simples, testável e fácil de evoluir.

## 🧩 Projeto atual

### Analisador de arrays

O arquivo `array_analyzer.js` implementa a função `analisarNumeros()`, que recebe um array de números e retorna:

- quantidade de elementos;
- soma dos valores;
- média com duas casas decimais;
- maior valor;
- menor valor.

A função também valida a entrada e rejeita arrays vazios, valores não numéricos e números não finitos.

## 🛠️ Tecnologias

- JavaScript
- Node.js
- CommonJS
- Node.js Test Runner
- GitHub Actions

## ▶️ Como executar

Pré-requisito: **Node.js 18 ou superior**.

Execute o exemplo:

```bash
node array_analyzer.js
```

Execute os testes:

```bash
npm test
```

## 🧪 Testes

Os testes verificam:

- cálculo correto das métricas;
- média com duas casas decimais;
- números negativos;
- array com um único elemento;
- rejeição de array vazio;
- rejeição de valores inválidos.

A integração contínua executa os testes automaticamente em pushes para `main` e pull requests.

## 📁 Estrutura

```text
javascript-lab/
├── .github/
│   └── workflows/
│       └── tests.yml
├── tests/
│   └── array_analyzer.test.js
├── .gitignore
├── LICENSE
├── README.md
├── array_analyzer.js
└── package.json
```

## 🚀 Próximos passos

- adicionar outros exercícios de lógica;
- explorar módulos ES;
- trabalhar com manipulação de objetos e coleções;
- criar pequenos projetos com APIs;
- evoluir para aplicações web com JavaScript.

## 👩‍💻 Autora

**Marcella Bongiolo**

Este repositório faz parte da prática de desenvolvimento e estudos em programação.

## 📄 Licença

Distribuído sob a licença MIT.
