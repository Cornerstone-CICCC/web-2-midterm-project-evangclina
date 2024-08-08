const movieSection = document.querySelector(".movie-wrapper")
const seriesSection = document.querySelector(".series-wrapper")
const searchInput = document.querySelector("#search")
const searchIcon = document.querySelector(".search-icon")

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg5OGM2ZGU5OGU4N2FlYzg1N2NjNmUzNDM4ZGFiYSIsIm5iZiI6MTcyMjk3NzEyOS4wMTU3NTcsInN1YiI6IjY2YjI4MjA1MmZmNTNiNzc1ZTFkMmVlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JdZsnlTnpHkYdorb0GWMFEL55KWc5RRUCXPtUEod440'
  }
};

async function getMovies(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749&with_original_language=en', options)
    const data = res.json()

    return data
  }catch(error){
    console.log(error)
  }
}

async function getSeries(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749', options)


    const data = res.json()
    return data
  }catch(error){
    console.log(error)
  }
}

async function search(key){
  try{
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${key}&include_adult=false&language=en-US&page=1`, options)
    const data = res.json()
    return data
  }catch(error){
    console.log(error)
  }
}

async function buildHTML(){
  try{
    const movie = await getMovies()
    const tvseries = await getSeries()
    console.log(movie)
    console.log(tvseries)
    movie.results.forEach((movie, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"><h3>${movie.original_title}</h3`
      // <p>${movie.overview}</p>`
      movieSection.append(divCard)

    })

    tvseries.results.forEach((series, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${series.poster_path}"><h3>${series.name}</h3>`
      // <p>${series.overview}</p>`
      seriesSection.append(divCard)

    })

  }catch(error){
    console.log(error)
  }
}
buildHTML()

async function searchFnc(){
  searchIcon.addEventListener("click",async (e) =>{
    const value = searchInput.value
    console.log(value)
    const searchOutput =  await search(value)

  console.log(searchOutput)
  })
}
searchFnc()
