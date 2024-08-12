const movieSection = document.querySelector(".movie-wrapper")
const seriesSection = document.querySelector(".series-wrapper")
// const searchInput = document.querySelector("#search")
const searchIcon = document.querySelector(".search-icon")
const romComSection = document.querySelector(".movie-two")
const animatedSection = document.querySelector(".movie-three")
const koreanSection = document.querySelector(".series-two")

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODg5OGM2ZGU5OGU4N2FlYzg1N2NjNmUzNDM4ZGFiYSIsIm5iZiI6MTcyMjk3NzEyOS4wMTU3NTcsInN1YiI6IjY2YjI4MjA1MmZmNTNiNzc1ZTFkMmVlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JdZsnlTnpHkYdorb0GWMFEL55KWc5RRUCXPtUEod440'
  }
};

//MOVIE DATA
async function getDramaMovies(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749%2C%2018&without_genres=16%2C%2010751', options)

    const data = res.json()
    return data

  }catch(error){
    console.log(error)
  }
}
async function getAnimatedMovies(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749%2C%2016&without_genres=10751', options)
    const data = res.json()
    return data

  }catch(error){
    console.log(error)
  }
}
async function getRomComs(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749%2C%2035&without_genres=16%2C%2010751', options)


    const data = res.json()
    return data
  }catch(error){
    console.log(error)
  }
}
//SERIES DATA 
async function getSeries(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749', options)
    const data = res.json()
    return data

  }catch(error){
    console.log(error)
  }
}
async function getKDramas(){
  try{
    const res = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en&page=1&sort_by=popularity.desc&with_genres=10749&with_original_language=ko', options)
    const data = res.json()
    return data
    
  }catch(error){
    console.log(error)
  }
}
//SEARCH DATA
async function search(key){
  try{
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${key}&include_adult=false&language=en-US&page=1`, options)
    const data = res.json()
    return data
  }catch(error){
    console.log(error)
  }
}
//build index.html with movie and series fetched data
async function buildHTML(){
  try{
    //   MOVIES SECTION
    const dramaMovie = await getDramaMovies()
    const animatedMovie = await getAnimatedMovies()
    const movieRomCom = await getRomComs()

    animatedMovie.results.forEach((movie, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"><div class="movie-title"><h3>${movie.title}</h3</div>`
      animatedSection.append(divCard)
      divCard.setAttribute("id", `movie-${movie.id}`)
      
      const modalOverlay = document.createElement("div")
      document.querySelector("main").append(modalOverlay)
      const modalContent = document.createElement("div")
      modalOverlay.append(modalContent)
      const closeBtn = document.createElement("button")
      closeBtn.innerHTML = "Close"
      modalContent.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"><p>${movie.overview}</p>`
      modalContent.append(closeBtn)
      closeBtn.addEventListener("click", function(){
        modalOverlay.remove()
      })
      modalContent.classList.add("modal")
      modalOverlay.classList.add("overlay")
      
      modalOverlay.style.display = "none"

      divCard.addEventListener("click", function(){
        document.querySelector("main").append(modalOverlay)
        modalOverlay.style.display = "grid"
      })
    })

    movieRomCom.results.forEach((movie, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"><div class="movie-title"><h3>${movie.title}</h3</div>`
      romComSection.append(divCard)
      divCard.setAttribute("id", `movie-${movie.id}`)

      const modalOverlay = document.createElement("div")
      document.querySelector("main").append(modalOverlay)
      const modalContent = document.createElement("div")
      modalOverlay.append(modalContent)
      const closeBtn = document.createElement("button")
      closeBtn.innerHTML = "Close"
      modalContent.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"><p>${movie.overview}</p>`
      modalContent.append(closeBtn)
      closeBtn.addEventListener("click", function(){
        modalOverlay.remove()
      })
      modalContent.classList.add("modal")
      modalOverlay.classList.add("overlay")
      
      modalOverlay.style.display = "none"

      divCard.addEventListener("click", function(){
        document.querySelector("main").append(modalOverlay)
        modalOverlay.style.display = "grid"
      })
    })

    dramaMovie.results.forEach((movie, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"><div class="movie-title"><h3>${movie.title}</h3</div>`
      movieSection.append(divCard)
      divCard.setAttribute("id", `movie-${movie.id}`)

      const modalOverlay = document.createElement("div")
      document.querySelector("main").append(modalOverlay)
      const modalContent = document.createElement("div")
      modalOverlay.append(modalContent)
      const closeBtn = document.createElement("button")
      closeBtn.innerHTML = "Close"
      modalContent.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"><p>${movie.overview}</p>`
      modalContent.append(closeBtn)
      closeBtn.addEventListener("click", function(){
        modalOverlay.remove()
      })
      modalContent.classList.add("modal")
      modalOverlay.classList.add("overlay")
      
      modalOverlay.style.display = "none"

      divCard.addEventListener("click", function(){
        document.querySelector("main").append(modalOverlay)
        modalOverlay.style.display = "grid"
      })
    })

    //SERIES SECTION
    const tvseries = await getSeries()
    const kDramas = await getKDramas()
    tvseries.results.forEach((series, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${series.poster_path}"><div class="serie-title"><h3>${series.name}</h3></div>`
      seriesSection.append(divCard)
      divCard.setAttribute("id", `series-${series.id}`)

      const modalOverlay = document.createElement("div")
      document.querySelector("main").append(modalOverlay)
      const modalContent = document.createElement("div")
      modalOverlay.append(modalContent)
      const closeBtn = document.createElement("button")
      closeBtn.innerHTML = "Close"
      modalContent.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${series.backdrop_path}"><p>${series.overview}</p>`
      modalContent.append(closeBtn)
      closeBtn.addEventListener("click", function(){
        modalOverlay.remove()
      })
      modalContent.classList.add("modal")
      modalOverlay.classList.add("overlay")
      
      modalOverlay.style.display = "none"

      divCard.addEventListener("click", function(){
        document.querySelector("main").append(modalOverlay)
        modalOverlay.style.display = "grid"
      })

    })

    kDramas.results.forEach((series, i) =>{
      let divCard = document.createElement("div")
      divCard.classList.add("card")
      divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${series.poster_path}"><div class="serie-title"><h3>${series.name}</h3></div>`
      koreanSection.append(divCard)
      divCard.setAttribute("id", `series-${series.id}`)

      const modalOverlay = document.createElement("div")
      document.querySelector("main").append(modalOverlay)
      const modalContent = document.createElement("div")
      modalOverlay.append(modalContent)
      const closeBtn = document.createElement("button")
      closeBtn.innerHTML = "Close"
      modalContent.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${series.backdrop_path}"><p>${series.overview}</p>`
      modalContent.append(closeBtn)
      closeBtn.addEventListener("click", function(){
        modalOverlay.remove()
      })
      modalContent.classList.add("modal")
      modalOverlay.classList.add("overlay")

      modalOverlay.style.display = "none"

      divCard.addEventListener("click", function(){
        document.querySelector("main").append(modalOverlay)
        modalOverlay.style.display = "grid"
      })
    })

  }catch(error){
    console.log(error)
  }
}
buildHTML()
//build search.html with search data
async function buildSearch(){
  const urlParams = new URLSearchParams(window.location.search);
  const searchInput = urlParams.get('search');
  const searchOutput = await search(searchInput)
  console.log(searchOutput)

  const finalInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
  let title = document.createElement("h1")
  title.innerHTML = `Search for: ${finalInput}`
  document.querySelector(".search-title").append(title)

  searchOutput.results.forEach((result)=>{

    let divCard = document.createElement("div")
    divCard.classList.add("search-card")
    divCard.innerHTML= `<img src="https://image.tmdb.org/t/p/w500${result.poster_path}"><div class="movie-title"><h3>${result.title}</h3</div>`
    document.querySelector(".box").append(divCard)

    const modalOverlay = document.createElement("div")
    document.querySelector("main").append(modalOverlay)
    const modalContent = document.createElement("div")
    modalOverlay.append(modalContent)
    const closeBtn = document.createElement("button")
    closeBtn.innerHTML = "Close"
    modalContent.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${result.backdrop_path}"><p>${result.overview}</p>`
    modalContent.append(closeBtn)
    closeBtn.addEventListener("click", function(){
      modalOverlay.remove()
    })
    modalContent.classList.add("modal")
    modalOverlay.classList.add("overlay")
      
    modalOverlay.style.display = "none"

    divCard.addEventListener("click", function(){
      document.querySelector("main").append(modalOverlay)
       modalOverlay.style.display = "grid"
    })

    if(typeof(result.backdrop_path) === "undefined"){
      modalContent.innerHTML = `<img src="./assets/img_unavailable.jpg"><p>${result.overview}</p>`
    }
    if(typeof(result.overview) === "undefined"){
      modalContent.innerHTML = `Content unavailable`
      modalContent.append(closeBtn)
    }

    if (typeof(result.title) === "undefined"){
      divCard.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${result.poster_path}"><div class="movie-title"><h3>${result.name}</h3</div>`
    }

    if(typeof(result.poster_path) === "undefined"|| result.poster_path === null){
      divCard.innerHTML = `<img src="./assets/img_unavailable.jpg"><div class="movie-title"><h3>${result.title}</h3</div>`
    }
  })
}

buildSearch()

//Dark Mode 
const switchToggle = document.getElementById("dark-mode-toggle")
const container = document.querySelector("body")
const imglogo = document.querySelector(".logo img")
const aboutlogo= document.querySelector(".image img")

switchToggle.addEventListener("change", function(){
  if(this.checked){
    container.classList.add("dark-mode")
    imglogo.setAttribute("src", "./assets/darkmode.png")
    aboutlogo.setAttribute("src", "./assets/darkmode.png")
  }else{
    container.classList.remove("dark-mode")
    imglogo.setAttribute("src", "./assets/film2.png")
    aboutlogo.setAttribute("src", "./assets/film2.png")
  }
})


// burger menu 
var sidemenu = document.querySelector(".menu-list");
  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }