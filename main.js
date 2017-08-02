let paramKeyVal = document.querySelector('input');
let searchResults = document.getElementById('#searchResults');
let audio = document.querySelector('audio');
let findButton = document.getElementById('#findButton');

findButton.addEventListener('click', function(){

fetch(`https://itunes.apple.com/search?term=${paramKeyVal.value}`)
  .then(function(response){

   return response.json();
  });

  .then(function(data){
    console.log(data);
  });

searchResults.innerHTML = "";

for(let i = 0; i < data.results.length) {
  searchResults.innerHTML +=
  `<div class='resultsContainer'>
      <img class='thumbnails' src=${data.results[i].artworkUrl100}>
      <h5 class='songTitles'>${data.results[i].trackName}</h5>`
}

});
