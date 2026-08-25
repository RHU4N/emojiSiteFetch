// Declarando variáveis para os elementos do DOM
const emoji = document.getElementById("emoji");
const catSelect = document.getElementById("catSelect");
const gpSelect = document.getElementById("gpSelect");
const pesquisa = document.getElementById("pesquisa");
const resultCount = document.getElementById("resultCount");

// Função para criar e exibir os cards de emoji, com parametro de dados recebidos da API
async function getCard(data) {
  emoji.innerHTML = "";// Limpa o conteúdo anterior
  // Verifica se não há resultados
  if (data.length === 0) {
    emoji.innerHTML = '<div class="vazio">Nenhum emoji encontrado.</div>';
    resultCount.textContent = "0 resultados";
    return;
  }


// Atualiza o contador de resultados e verifica se há mais de um resultado para ajustar a pluralização
  resultCount.textContent = `${data.length} resultado${data.length > 1 ? "s" : ""}`;

  // For loop para criar os cards de emoji com base nos dados recebidos
  for (const emojiData of data) {
    const card = document.createElement("article");
    card.classList.add("emoji-card");
    const div = document.createElement("div");
    card.appendChild(div);
    const emojiElement = document.createElement("div");
    emojiElement.classList.add("emoji-img");
    emojiElement.innerHTML = emojiData.htmlCode;
    div.appendChild(emojiElement);
    const emojiNameElement = document.createElement("div");
    emojiNameElement.classList.add("emoji-nome");
    emojiNameElement.textContent =
      emojiData.name.split(" ")[0] + " " + emojiData.name.split(" ")[1];
    div.appendChild(emojiNameElement);
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-btn");
    copyButton.textContent = "Copiar";
    card.appendChild(copyButton);
    // Adiciona um evento de clique ao botão de copiar para copiar o código HTML do emoji para a área de transferência
    copyButton.addEventListener("click", () => {
      const textarea = document.createElement("textarea"); //cria um textare para converter o htmlCode em emoji e copiar o emoji
      textarea.innerHTML = emojiData.htmlCode;

      copyEmoji(textarea.value);
    });
    emoji.appendChild(card);
  }
}

//pegando um emoji aleatório
async function randomEmoji() {
  try {
    // Mostra uma mensagem de carregamento enquanto busca o emoji aleatório
    emoji.innerHTML = '<div class="vazio">Carregando...</div>';
    // Faz a requisição para a API de emoji aleatório
    const response = await fetch("https://emojihub.yurace.pro/api/random");
    const data = await response.json();
    getCard([data]); // Chama a função getCard passando o emoji aleatório como um array
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="vazio error">Erro ao buscar emoji.</div>';
  }
}

//pegando todos os emojis
async function tudo() {
  try {
    // Mostra uma mensagem de carregamento enquanto busca todos os emojis
    emoji.innerHTML = '<div class="vazio">Carregando...</div>';
    // Faz a requisição para a API de todos os emojis
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    const data = await response.json();
    getCard(data);
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="vazio error">Erro ao buscar emojis.</div>';
  }
}

async function allCat() {
  try {
    // Faz a requisição para a API de categorias de emojis
    const response = await fetch("https://emojihub.yurace.pro/api/categories");
    const data = await response.json();
    // Cria opções no select de categorias com base nos dados recebidos
    for (const category of data) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      catSelect.appendChild(option);
    }
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="vazio error">Erro ao buscar emojis.</div>';
  }
}

async function allGP() {
  try {
    // Faz a requisição para a API de grupos de emojis
    const response = await fetch("https://emojihub.yurace.pro/api/groups");
    const data = await response.json();
    // Cria opções no select de grupos com base nos dados recebidos
    for (const group of data) {
      const option = document.createElement("option");
      option.value = group;
      option.textContent = group;
      gpSelect.appendChild(option);
    }
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
    console.error("Error fetching emoji:", error);
    emoji.innerHTML = "<h1>Error fetching emoji</h1>";
  }
}

async function fetchGroup() {
  try {
    // Mostra uma mensagem de carregamento enquanto busca os emojis do grupo selecionado
    emoji.innerHTML = '<div class="vazio">Carregando...</div>';
    // Obtém o valor do grupo selecionado no select
    const selectedGroup = gpSelect.value;
    if (!selectedGroup) { // Verifica se nenhum grupo foi selecionado
      emoji.innerHTML =
        '<div class="vazio error">Selecione um grupo.</div>';
      return;
    } else if (selectedGroup === "Selecione um grupo") { // Verifica se o valor selecionado é o placeholder
      emoji.innerHTML =
        '<div class="vazio error">Selecione um grupo válido.</div>';
      return;
    } else { // Se um grupo válido foi selecionado, faz a requisição para a API de emojis do grupo
      const response = await fetch(
        `https://emojihub.yurace.pro/api/all/group/${selectedGroup}`,
      );
      const data = await response.json();
      getCard(data);
    }
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="vazio error">Erro ao buscar emojis.</div>';
  }
}

async function fetchCategory() {
  try {
    // Mostra uma mensagem de carregamento enquanto busca os emojis da categoria selecionada
    emoji.innerHTML = '<div class="vazio">Carregando...</div>';
    const selectedCategory = catSelect.value; // Obtém o valor da categoria selecionada no select
    if (!selectedCategory) {// Verifica se nenhuma categoria foi selecionada
      emoji.innerHTML =
        '<div class="vazio error">Selecione uma categoria.</div>';
      return;
    } else if (selectedCategory === "Selecione uma categoria") {// Verifica se o valor selecionado é o placeholder
      emoji.innerHTML =
        '<div class="vazio error">Selecione uma categoria válida.</div>';
      return;
    } else {
      const response = await fetch(// Faz a requisição para a API de emojis da categoria selecionada
        `https://emojihub.yurace.pro/api/all/category/${selectedCategory}`,
      );
      const data = await response.json();
      getCard(data);
    }
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="vazio error">Erro ao buscar emojis.</div>';
  }
}

function copyEmoji(emojiCode) {// Função para copiar o código do emoji para a área de transferência no caso o emoji de textarea
  navigator.clipboard.writeText(emojiCode);
  alert("Emoji copiado!");
}

async function searchEmoji() {// Função para pesquisar emojis com base no valor do input de pesquisa
    try{
        // Obtém o valor do input de pesquisa, remove espaços em branco e converte para minúsculas
        const seachValue = pesquisa.value.trim().toLowerCase();
        if(!seachValue){// Verifica se o valor de pesquisa está vazio se sim preenche a tela com todos os emojis
            tudo();
            return;
        }
        // Mostra uma mensagem de carregamento enquanto busca os emojis correspondentes à pesquisa
        emoji.innerHTML = '<div class="vazio">Carregando...</div>';
        const response = await fetch(`https://emojihub.yurace.pro/api/search?q=${seachValue}`);// Faz a requisição para a API de pesquisa de emojis com base no valor do input
        const data = await response.json();
        getCard(data);
    }
        catch (error) {
            // Em caso de erro, exibe uma mensagem de erro no console e na interface do usuário
        console.error("Error searching emoji:", error);
        emoji.innerHTML = '<div class="vazio error">Erro ao pesquisar emojis.</div>';
    }
}
pesquisa.addEventListener("input", searchEmoji);// Adiciona um evento de input ao campo de pesquisa para chamar a função searchEmoji sempre que o valor do input mudar

allGP();// Chama a função allGP para preencher o select de grupos com as opções disponíveis
allCat();// Chama a função allCat para preencher o select de categorias com as opções disponíveis
tudo();// Chama a função tudo para exibir todos os emojis ao carregar a página