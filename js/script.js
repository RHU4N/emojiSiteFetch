const emoji = document.getElementById("emoji");
const catSelect = document.getElementById("catSelect");
const gpSelect = document.getElementById("gpSelect");

async function randomEmoji() {
    try {
        emoji.innerHTML = ""; // Clear previous emojis
        const response = await fetch("https://emojihub.yurace.pro/api/random");
        const data = await response.json();
            emoji.innerHTML += `<h1>${data.htmlCode}</h1>`;
            emoji.innerHTML += `<h1>${data.name}</h1>`;
            emoji.innerHTML += `<button onclick="copyEmoji('${data.htmlCode}')">Copy</button>`;
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    }
}

async function tudo() {
    try {
        emoji.innerHTML = ""; // Clear previous emojis
        const response = await fetch("https://emojihub.yurace.pro/api/all");
        const data = await response.json();
        for(const emojiData of data) {
            emoji.innerHTML += `<h1>${emojiData.htmlCode}</h1>`;
        }
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    }
}

async function allCat() {
    try {
        const response = await fetch("https://emojihub.yurace.pro/api/categories");
        const data = await response.json();
        for(const category of data) {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            catSelect.appendChild(option);
        }
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    
    }
}

async function allGP() {
    try {
        const response = await fetch("https://emojihub.yurace.pro/api/groups");
        const data = await response.json();
        for(const group of data) {
            const option = document.createElement("option");
            option.value = group;
            option.textContent = group;
            gpSelect.appendChild(option);
        }
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    }
}

async function fetchByCategory() {
    try {
        emoji.innerHTML = ""; // Clear previous emojis
        const selectedCategory = catSelect.value;
        const response = await fetch(`https://emojihub.yurace.pro/api/category/${selectedCategory}`);
        const data = await response.json();
        for(const emojiData of data) {
            emoji.innerHTML += `<h1>${emojiData.htmlCode}</h1>`;
        }
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    }
}

async function fetchGroup() {
    try {
        emoji.innerHTML = ""; // Clear previous emojis
        const selectedGroup = gpSelect.value;
        const response = await fetch(`https://emojihub.yurace.pro/api/all/group/${selectedGroup}`);
        const data = await response.json();
        for(const emojiData of data) {
            emoji.innerHTML += `<h1>${emojiData.htmlCode}</h1>`;
        }
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    }
}

async function fetchCategory() {
    try {
        emoji.innerHTML = ""; // Clear previous emojis
        const selectedCategory = catSelect.value;
        const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${selectedCategory}`);
        const data = await response.json();
        for(const emojiData of data) {
            emoji.innerHTML += `<h1>${emojiData.htmlCode}</h1>`;
        }
    }
    catch (error) {
        console.error("Error fetching emoji:", error);
        emoji.innerHTML = "<h1>Error fetching emoji</h1>";
    }
}

function copyEmoji(emojiCode) {
   navigator.clipboard.writeText(emojiCode);
    alert("Emoji copiado!");
}   

allGP();
allCat();

