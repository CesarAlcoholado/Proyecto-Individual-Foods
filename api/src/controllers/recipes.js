const axios= require('axios');
const {API_KEY} = process.env;



const getinfo = async ()=>{

  const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

  const info = await apiResponse.data.results.map(r => {

  })





}
