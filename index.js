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


async function fetchData() {
    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`);

        if(!response.ok){
            throw new Error("page not found")
        }

        const data = await response.json();
        const imgSrc = data.sprites.front_default;
        console.log(imgSrc)
        pokeImge.src = imgSrc;
       
        

    }

    catch(error){
        console.error(error);
    }
    
}