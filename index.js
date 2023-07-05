require('dotenv').config();
// const endpoint = `https://api.giphy.com/v1/gifs/search??api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const getImages = async (query)=>{
   const endpoint = `https://api.giphy.com/v1/gifs/search??api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
   const requestUrl = await fetch(endpoint)
   const data = await requestUrl.json()
   return data
}
