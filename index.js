var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = "PG"; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.getPG = function (movieList) {
        return movieList.filter(function (mov) { return mov.rating === 'PG'; });
    };
    return Movie;
}());
var movie = new Movie("Casino Royale", "Eon Productions", "PG­13");
var listOfMovies = [
    new Movie('Blade', "Marvel", "PG"),
    new Movie('Captain America', "Marvel", "PG13"),
    new Movie('Captain Marvel', "Marvel", "PG"),
    new Movie('Black Panther', "Marvel", "PG"),
    new Movie('Batman', "Warner Brothers", "PG13")
];
console.log(movie.getPG(listOfMovies));
