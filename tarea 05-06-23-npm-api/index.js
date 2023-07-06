

const axios = require('axios');


const getUsers =async()=>{

    try{
       let users = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
       console.log(users.data.results);
    }catch(error){
        console.log(error)}

   
}


getUsers();