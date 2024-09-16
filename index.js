/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu").
then(response =>{

     if(!response.ok)
      throw new Error("404")

    return response.json()
    })
.then(response => console.log(response.name))
.catch(error => console.error(error))
*/
const pokeImge = document.getElementById("pokeImge");
const pokeName = document.getElementById("pokeName");
const menu = document.getElementById("dropDownMenu")
const best3 = document.querySelectorAll("#dropDownMenu h1");

async function fetchData() {
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`);

        if (!response.ok) {
            throw new Error("page not found")
        }

        const data = await response.json();
        const imgSrc = data.sprites.front_default;
        console.log(imgSrc)
        pokeImge.src = imgSrc;



    }

    catch (error) {
        console.error(error);
    }

}


document.addEventListener('click', (event) => {

    if (document.activeElement === pokeName) {

        menu.style.visibility = "visible";

    }

    else {
        menu.style.visibility = "hidden";
    }

})

best3.forEach((element) => {
    element.addEventListener("click", (event) => {
        pokeName.value = element.textContent;
    })
})

document.addEventListener('input', (event) => {

    if (document.activeElement === pokeName) {

        let pokeSortedNames = pokemonNames.slice(0);
        pokeSortedNames.forEach((element, index, array) => {
            array[index] = element.toLowerCase();
        })

        pokeSortedNames = pokeSortedNames.filter((element) => element.startsWith(pokeName.value.toLowerCase()))
        pokeSortedNames.sort();

        for (let index = 0; index < 3; index++) {
            if (pokeSortedNames[index]) {  
                best3[index].textContent = pokeSortedNames[index].slice(0, 1).toUpperCase() + pokeSortedNames[index].slice(1);
                best3[index].style.visibility = "visible";
            } else {
                best3[index].textContent = '';  
                best3[index].style.visibility = "hidden";
            }

        }

    }
})

const pokemonNames = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch’d",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew"
];
pokemonNames.sort();

