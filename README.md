# 😄 EmojiHub — Emoji Search

Aplicação web desenvolvida para a Sprint de **Consumo de API**, utilizando **HTML, CSS e JavaScript** para consumir uma API pública de emojis, processar seus dados em JSON e apresentá-los dinamicamente em uma interface responsiva.

> 🔎 Pesquise emojis por nome, filtre por categoria ou grupo, gere um emoji aleatório e copie o emoji diretamente para a área de transferência.

---

## 📌 Sobre o projeto

O **EmojiHub — Emoji Search** é uma aplicação front-end que utiliza a **EmojiHub API** para buscar e organizar informações sobre emojis.

O projeto foi desenvolvido com foco no consumo de uma API REST utilizando a **Fetch API** e **programação assíncrona com `async/await`**, permitindo que os dados sejam carregados sem bloquear a interface.

Além de atender aos requisitos da Sprint, a aplicação foi estruturada para oferecer uma experiência simples e intuitiva para pesquisar, explorar e copiar emojis.

---

## ✨ Funcionalidades

- 🔎 **Pesquisa por nome** — encontra emojis de acordo com o termo digitado.
- ⚡ **Pesquisa em tempo real** — atualiza os resultados enquanto o usuário digita.
- 🎲 **Emoji aleatório** — consulta a API e exibe um emoji selecionado aleatoriamente.
- 📋 **Copiar emoji** — copia o emoji para a área de transferência com um clique.
- 🗂️ **Filtro por categoria** — consulta emojis de uma categoria específica.
- 👥 **Filtro por grupo** — consulta emojis de um grupo específico.
- 📚 **Mostrar todos** — carrega a lista completa disponibilizada pela API.
- 🔢 **Contagem de resultados** — informa a quantidade de emojis encontrados.
- ⏳ **Estado de carregamento** — apresenta uma mensagem enquanto os dados estão sendo buscados.
- ⚠️ **Tratamento de erros** — informa o usuário quando ocorre uma falha na consulta à API.
- 🚫 **Estado vazio** — informa quando uma pesquisa não retorna resultados.
- 📱 **Layout responsivo** — adapta os cards para diferentes tamanhos de tela.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura da aplicação |
| **CSS3** | Estilização, layout, grid e responsividade |
| **JavaScript** | Lógica, DOM e consumo da API |
| **Fetch API** | Requisições HTTP |
| **Async/Await** | Programação assíncrona |
| **JSON** | Formato dos dados recebidos |
| **Clipboard API** | Cópia dos emojis |
| **Vercel** | Deploy |

---

## 🌐 API utilizada

O projeto utiliza a **EmojiHub API**, uma API pública que disponibiliza dados de emojis organizados por nome, categoria e grupo, além de endpoints para consultas aleatórias e pesquisas.

### Endpoints utilizados

| Endpoint | Função |
|---|---|
| `/api/all` | Retorna todos os emojis |
| `/api/random` | Retorna um emoji aleatório |
| `/api/search?q={query}` | Pesquisa emojis pelo nome |
| `/api/categories` | Retorna as categorias disponíveis |
| `/api/groups` | Retorna os grupos disponíveis |
| `/api/all/category/{category}` | Retorna emojis de uma categoria |
| `/api/all/group/{group}` | Retorna emojis de um grupo |

**Base da API:** `https://emojihub.yurace.pro/api`

---

## 🔄 Funcionamento

```text
Usuário
   │
   ▼
Interação com a interface
   │
   ├── Pesquisa
   ├── Categoria
   ├── Grupo
   ├── Emoji aleatório
   └── Mostrar todos
   │
   ▼
JavaScript
   │
   ▼
Fetch API
   │
   ▼
EmojiHub API
   │
   ▼
Resposta JSON
   │
   ▼
Processamento dos dados
   │
   ▼
Criação dinâmica dos cards
   │
   ▼
Exibição na interface
```

### Programação assíncrona

As requisições são realizadas utilizando `async` e `await`:

```javascript
async function tudo() {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    const data = await response.json();
    getCard(data);
}
```

A resposta da API é convertida para JSON e posteriormente processada pelo JavaScript para gerar os cards dinamicamente.

---

## 🧩 Estrutura do projeto

```text
emojiSiteFetch/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── global.css
│   ├── header.css
│   ├── controles.css
│   ├── filtros.css
│   └── emoji.css
│
├── js/
│   └── script.js
│
└── README.md
```

A estrutura separa as responsabilidades entre HTML, CSS e JavaScript, mantendo o projeto simples e organizado.

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/RHU4N/emojiSiteFetch.git
```

### 2. Entre na pasta

```bash
cd emojiSiteFetch
```

### 3. Execute a aplicação

O projeto não possui dependências de Node.js. Basta abrir o `index.html` no navegador ou utilizar uma extensão como **Live Server** no VS Code.

> Como a aplicação realiza requisições HTTP para uma API externa, é recomendado executar o projeto através de um servidor local como o Live Server.

---

## 🖥️ Interface

A aplicação possui:

- Cabeçalho com identificação e descrição;
- Campo de pesquisa;
- Pesquisa em tempo real;
- Botão de emoji aleatório;
- Filtro por categoria;
- Filtro por grupo;
- Botão para mostrar todos os emojis;
- Contador de resultados;
- Grid responsivo de cards;
- Botão individual para copiar cada emoji.

---

## 🛡️ Tratamento de erros

As requisições são protegidas por blocos `try/catch` para evitar que falhas na comunicação com a API interrompam a aplicação.

A interface apresenta mensagens para situações como:

- Falha na consulta da API;
- Nenhum emoji encontrado;
- Categoria não selecionada;
- Grupo não selecionado;
- Carregamento dos dados.

Isso fornece um retorno visual ao usuário mesmo quando uma consulta não pode ser concluída normalmente.

---

## 📱 Responsividade

O layout utiliza **CSS Grid** e media queries para adaptar a quantidade de colunas conforme a largura disponível.

A aplicação foi preparada para diferentes tamanhos de tela, incluindo desktops, notebooks, tablets e smartphones.

---

## 📚 Objetivos acadêmicos

Este projeto foi desenvolvido como parte da **Sprint — Consumo de API**, tendo como principais objetivos:

- Consumir uma API pública através de requisições HTTP;
- Utilizar programação assíncrona em JavaScript;
- Trabalhar com respostas em formato JSON;
- Processar dados recebidos externamente;
- Manipular o DOM de forma dinâmica;
- Criar uma interface organizada e responsiva;
- Implementar tratamento de erros e estados da aplicação.

---

## 📋 Requisitos da Sprint

| Requisito | Implementação |
|---|---|
| Estrutura HTML, CSS e JavaScript | ✅ Implementado |
| Título da aplicação | ✅ Implementado |
| Área para exibição dos dados | ✅ Implementado |
| Requisição HTTP para API pública | ✅ Implementado |
| Programação assíncrona | ✅ `async/await` |
| Interpretação de JSON | ✅ `response.json()` |
| Processamento dos dados | ✅ JavaScript |
| Exibição dinâmica | ✅ Cards gerados pelo DOM |
| Tratamento de erros | ✅ `try/catch` |
| Tratamento de ausência de dados | ✅ Estado vazio |
| Estilização com CSS | ✅ Implementado |
| Responsividade | ✅ Media queries |
| README | ✅ Documentado |
| Deploy | 🔗 Vercel |

---

## 🔗 Links

- **Repositório:** https://github.com/RHU4N/emojiSiteFetch
- **Deploy:** https://emoji-site-fetch.vercel.app/
- **API:** https://emojihub.yurace.pro/api
- **EmojiHub:** https://github.com/cheatsnake/emojihub

---

## 👨‍💻 Autores

**Rhuan Santana da Silva**

[**ISABELA ANDRELINO SOUZA**](https://github.com/isabzw)

- GitHub: https://github.com/RHU4N
- Projeto: https://github.com/RHU4N/emojiSiteFetch

---

## 📄 Licença

Este projeto foi desenvolvido para fins **educacionais e acadêmicos**.

Os dados de emojis são fornecidos pela **EmojiHub API**.
