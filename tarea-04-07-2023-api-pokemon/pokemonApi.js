function fetchDatos() {
    fetch('https://pokeapi.co/api/v2/pokemon-form?limit=10')
        .then(response => response.json())
        .then(data => {
            let results = data.results;
            for(let i = 0; i < results.length; i++){
                let pokemon = results[i];
                let name = pokemon.name;
                let url = pokemon.url;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        let frontShinySprite = data.sprites.front_shiny;
                        console.log(name + ": " + url + ", Front Shiny Sprite: " + frontShinySprite);
                        addUser({name: name, url: frontShinySprite});
                    });
            }
        })
        .catch(err => console.log("Solicitud fallida", err));
}

const itemsContainer = document.getElementById("users");
function addUser(pokemon) {
    const inyectarHTML = '<div class="card">' +
    '<img src=' + pokemon.url + ' class="card-img-top" alt="Avatar">' +
    '<div class="card-body">' +
    '<h3 class="card-title text-center">' + pokemon.name + '</h3>' +
    '</div>' +
    '</div>' +
    '<br/>';
    itemsContainer.innerHTML += inyectarHTML;
}
