const apiUrl = 'https://rickandmortyapi.com/api/character';

function makeCard(character) {
    const {name, status, image} = character;
    const cardsContainer = document.querySelector(".cards-container");
    

    const characterTitle = document.createElement("h5");
    characterTitle.textContent = name;

    const characterStatus = document.createElement("p");
    characterStatus.textContent = status;
    if(status == 'Alive') characterStatus.style.color = "green";
    else characterStatus.style.color = "gray";

    const characterImage = document.createElement("img");
    characterImage.src = image;
    characterImage.width = 200;

    const card = document.createElement("div");
    card.appendChild(characterTitle);
    card.appendChild(characterImage);
    card.appendChild(characterStatus);
    card.style.backgroundColor = "cyan"
    

    cardsContainer.appendChild(card)


}

async function getCharacters () {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        for(let i = 0; i < data.results.length; i++){
            makeCard(data.results[i])
        }
    } catch (error) {
        console.log(error)
        
    }
}

getCharacters()