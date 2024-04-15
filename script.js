//e8a03e60eb116802438069d35118335f
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e8a03e60eb116802438069d35118335f&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=e8a03e60eb116802438069d35118335f&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results)
        data.results.forEach(element => {
            const div = document.createElement('div')
        });
    })
}
