let paramKeyVal = document.querySelector('input');
let searchResults = document.getElementById('searchResults');
let viewResults = document.getElementById('viewResults');
let audio = document.querySelector('audio');

let findButton = document.getElementById('findButton');
// console.log(paramKeyVal);
// console.log(searchResults);
// console.log(audio);
// console.log(findButton);

findButton.addEventListener('click', function() {
  searchResults.innerHTML = '<p>Search Results: </p>';
  paramKeyVal = paramKeyVal.value;

  fetch(`https://itunes.apple.com/search?term=${paramKeyVal}`)
    .then(function(response) {

      return response.json();

    }).then(function(data) {
      console.log(data);





      for (let i = 0; i < data.results.length; i++) {
        viewResults.innerHTML +=
          `<div class='resultsContainer'>
            <img class='thumbnails' src=${data.results[i].artworkUrl100}>
            <div style="display: none;" class="preview">${data.results[i].previewUrl}</div>
            <h5 class='songTitles'>${data.results[i].trackName}</h5>
            <h4 class='artists'>${data.results[i].artistName}</h4>
            </div>`
      }
    });
});



viewResults.addEventListener("click", function(event) {
  if (event.target && event.target.matches("div.resultsContainer")) {
    let parent = event.target.parentElement;
    audio.src = parent.getElementsByClassName('preview')[0].innerHTML;
    audio.play();
    let playing = document.querySelector('playing');
    let artist = parent.getElementsByClassName('artists')[0].innerHTML;
    let song = parent.getElementsByClassName('songTitles')[0].innerHTML;

    playing.innerHTML = `${artist} - ${song}`;

  }
});
