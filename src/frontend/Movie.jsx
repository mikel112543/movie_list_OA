import React from "react";
import { Image, Stack} from "react-bootstrap";
import '../frontend/styles/movie.css'


// Regular Function Definition
const Movie = ({name, year, poster}) => {
    const posterPath = `https://image.tmdb.org/t/p/original${poster}`

    return (
        <>
            <Stack>
                <Image className='image-hover-effect' src={posterPath} alt='https://picsum.photos/100/150'></Image>
                <h4>{name}, {year}</h4>
            </Stack>
        </>
    )
}
export default Movie