// Make the request to the URI

// Get the data from the response

// Parse the JSON data

// Do something with that parsed data

function fetchCharacters() {
  fetch("https://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(json => renderCharacters(json));
}

function renderCharacters(characters) {
  // Do stuff here
  // console.log(characters);
  let ul = document.createElement("ul");
  
  characters.forEach(character => {
    let li = renderCharacter(character);
    ul.appendChild(li);
  });
  
  document.querySelector(".characters").appendChild(ul);
}

function renderCharacter(character) { 
  let li = document.createElement("li");
  li.innerText = character.name + " is in " + character.house + ".";
  return li;
}