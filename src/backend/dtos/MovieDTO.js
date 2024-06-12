export class MovieDTO {
    constructor(title, popularity, releaseDate, posterPath) {
        this.title = title;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.posterPath = `https://image.tmdb.org/t/p/original${posterPath}`
    }
}