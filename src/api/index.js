import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

//const type = "pokemon";
export const getPokemonData = async (id) => {
  try {
    return await axios
      .get(baseURL + `/${id}`)
    //const  {data}  = await axios.get(baseUrl + `q=${pokemon}&appid=${apiKey}`)
     // return data;
  } catch (error) {
    throw error;
  }
};
export default getPokemonData;
