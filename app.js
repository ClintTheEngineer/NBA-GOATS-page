const img = new Image();

async function getTheGoat(){    
    const goats = document.getElementById('goat').value;
    event.preventDefault();
    if (!goats) alert("Enter player name!");
    
const endpoint = new URL(`https://nba-goats-api.herokuapp.com/api/goats/${goats}`);

const response = await fetch(endpoint);

if (response.status === 404) {
    alert("Player not found!");
}

const data = await response.json();


function displayGoat(data, goats=document.getElementById('goat').value){
if (data.id === Number(goats)) {
    img.src = `img/${goats}.jpg`;
    document.getElementById('root').appendChild(img);
    document.querySelector('h2').innerHTML = `${data.name} Facts`;
    document.querySelector('p').innerHTML = `GOAT score: ${data.GOATscore}`;
    document.getElementById('position').innerHTML = `Position: ${data.position}`;
    document.body.style.backgroundImage = `url(img/${goats}.png)`;
  }
}

displayGoat(data);

}