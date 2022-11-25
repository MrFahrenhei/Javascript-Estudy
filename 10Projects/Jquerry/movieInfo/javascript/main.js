$(document).ready(() => {
    $('#searchForm').on('submit', (e) =>{
       let searchText = $('#searchText').val();
       getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('https://www.omdbapi.com/?s='+searchText+'&apikey=9be27fce')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index,movie) => {
                output += ` 
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Detalhes do Filmes</a>
                    </div>
                </div>
                `;
            });
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}   

function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false
}

function getMovie(){
    let movieId = sessionStorage.getItem('movieId');

    axios.get('https://www.omdbapi.com/?i='+movieId+'&apikey=9be27fce')
        .then((response) => {
            console.log(response);
            let movie = response.Data;

            let output = ` 
                <div class="row">
                    <div class="col-md-4">
                        <img src=${movie.Poster}" class="thumbnail">
                    </div>
                    <div class="col-md-8">
                        <h2>${movie.Title}</h2>
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Genero:</strong> ${movie.Genre}</li>
                            <li class="list-group-item"><strong>Lançamento:</strong> ${movie.Released}</li>
                            <li class="list-group-item"><strong>Avaliação:</strong> ${movie.Rated}</li>
                            <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                            <li class="list-group-item"><strong>Diretor:</strong> ${movie.Director}</li>
                            <li class="list-group-item"><strong>Roterista:</strong> ${movie.Writer}</li>
                            <li class="list-group-item"><strong>Atores:</strong> ${movie.Actors}</li>
                        <ul>
                    </div>
                </div>
                <div class="row">
                    <div class="well">
                        <h3>Plot</h3>
                        ${movie.Plot}
                        <hr>
                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">Veja no IMDB</a>
                        <a href="index.html" class="btn btn-default">Voltar</a>
                    </div>
                </div>
            `;
            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}