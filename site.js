let movieDetails = $("#movieDetails")
let indepthDetails = $("#indepthDetails")


fetch('http://www.omdbapi.com/?s=batman&type=movie&apikey=79cfdf02')
.then(function(response){
  return response.json()

}).then(function(json){
  movieDetails.html('')
  json.Search.forEach(function(item){

    let movie = $("<div>").html(`<div class="container">
        <img class="moviePoster" src="${item.Poster}">
        <label class="movieDescription">${item.Title} (${item.Year})</label>
      </div>`)
      movie.click(function(){
        movieFacts(item.imdbID)
        $(window).scrollTop(0);
      })

      movieDetails.append(movie)
  })
})

function movieFacts(imdbid) {
  fetch('http://www.omdbapi.com/?i='+imdbid+'&apikey=79cfdf02')
  .then(function(response){
    return response.json()

  }).then(function(json){
    let movieDiv = $("<div>").html(`<div class="movieFactsContainer"
      <h2 class="bigLabel">${json.Title}</h2>
      <h4 class="yearMovie">Year: ${json.Year}</h4>
      <h5 class="director">Director: ${json.Director}</h5>
      <h5 class="rating">Rated: ${json.Rated}</h5>
      <h6 class="releaseDate">Release Date: ${json.Released}</h6>
      <img class="bigPoster" src="${json.Poster}">

    </div>`)
    indepthDetails.html(movieDiv)
  })
}
