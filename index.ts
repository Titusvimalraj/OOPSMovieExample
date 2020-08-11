class Movie {
    title: string;
    studio: string;
    rating: string;

    constructor(title:string, studio: string, rating:string="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    getPG(movieList:Movie[]){
        return movieList.filter(mov=>mov.rating==='PG');
    }
}


let movie = new Movie("Casino Royale", "Eon Productions", "PG­13");

let listOfMovies:Movie[] = [
    new Movie('Blade',"Marvel","PG"),
    new Movie('Captain America',"Marvel","PG13"),
    new Movie('Captain Marvel',"Marvel","PG"),
    new Movie('Black Panther',"Marvel","PG"),
    new Movie('Batman',"Warner Brothers","PG13")
]

console.log(movie.getPG(listOfMovies));
