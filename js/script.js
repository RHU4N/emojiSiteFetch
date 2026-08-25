const emoji = document.getElementById("emoji");
const catSelect = document.getElementById("catSelect");
const gpSelect = document.getElementById("gpSelect");
const pesquisa = document.getElementById("pesquisa");
const resultCount = document.getElementById("resultCount");

async function getCard(data) {
  emoji.innerHTML = "";
  if (data.length === 0) {
    emoji.innerHTML = '<div class="empty-state">Nenhum emoji encontrado.</div>';
    resultCount.textContent = "0 resultados";
    return;
  }

  resultCount.textContent = `${data.length} resultado${data.length > 1 ? "s" : ""}`;

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
    copyButton.addEventListener("click", () => {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = emojiData.htmlCode;

      copyEmoji(textarea.value);
    });
    emoji.appendChild(card);
  }
}

//pegando um emoji aleatório
async function randomEmoji() {
  try {
    emoji.innerHTML = '<div class="empty-state">Carregando...</div>';
    const response = await fetch("https://emojihub.yurace.pro/api/random");
    const data = await response.json();
    getCard([data]);
  } catch (error) {
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="empty-state error-state">Erro ao buscar emoji.</div>';
  }
}

//pegando todos os emojis
async function tudo() {
  try {
    emoji.innerHTML = '<div class="empty-state">Carregando...</div>';
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    const data = await response.json();
    getCard(data);
  } catch (error) {
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="empty-state error-state">Erro ao buscar emojis.</div>';
  }
}

async function allCat() {
  try {
    const response = await fetch("https://emojihub.yurace.pro/api/categories");
    const data = await response.json();
    for (const category of data) {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      catSelect.appendChild(option);
    }
  } catch (error) {
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="empty-state error-state">Erro ao buscar emojis.</div>';
  }
}

async function allGP() {
  try {
    const response = await fetch("https://emojihub.yurace.pro/api/groups");
    const data = await response.json();
    for (const group of data) {
      const option = document.createElement("option");
      option.value = group;
      option.textContent = group;
      gpSelect.appendChild(option);
    }
  } catch (error) {
    console.error("Error fetching emoji:", error);
    emoji.innerHTML = "<h1>Error fetching emoji</h1>";
  }
}

async function fetchGroup() {
  try {
    emoji.innerHTML = '<div class="empty-state">Carregando...</div>';
    const selectedGroup = gpSelect.value;
    if (!selectedGroup) {
      emoji.innerHTML =
        '<div class="empty-state error-state">Selecione um grupo.</div>';
      return;
    } else if (selectedGroup === "Selecione um grupo") {
      emoji.innerHTML =
        '<div class="empty-state error-state">Selecione um grupo válido.</div>';
      return;
    } else {
      const response = await fetch(
        `https://emojihub.yurace.pro/api/all/group/${selectedGroup}`,
      );
      const data = await response.json();
      getCard(data);
    }
  } catch (error) {
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="empty-state error-state">Erro ao buscar emojis.</div>';
  }
}

async function fetchCategory() {
  try {
    emoji.innerHTML = '<div class="empty-state">Carregando...</div>';
    const selectedCategory = catSelect.value;
    if (!selectedCategory) {
      emoji.innerHTML =
        '<div class="empty-state error-state">Selecione uma categoria.</div>';
      return;
    } else if (selectedCategory === "Selecione uma categoria") {
      emoji.innerHTML =
        '<div class="empty-state error-state">Selecione uma categoria válida.</div>';
      return;
    } else {
      const response = await fetch(
        `https://emojihub.yurace.pro/api/all/category/${selectedCategory}`,
      );
      const data = await response.json();
      getCard(data);
    }
  } catch (error) {
    console.error("Error fetching emoji:", error);
    emoji.innerHTML =
      '<div class="empty-state error-state">Erro ao buscar emojis.</div>';
  }
}

function copyEmoji(emojiCode) {
  navigator.clipboard.writeText(emojiCode);
  alert("Emoji copiado!");
}

allGP();
allCat();
