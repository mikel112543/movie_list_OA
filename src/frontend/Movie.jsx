import React from "react";
import { Image, Stack} from "react-bootstrap";



// Regular Function Definition
const Movie = ({name, year, poster}) => {
    const posterPath = `https://image.tmdb.org/t/p/original${poster}`

    return (
        <>
            <Stack>
                <Image src={posterPath} alt='https://picsum.photos/100/150'></Image>
                <h4>{name}, {year}</h4>
            </Stack>
        </>
    )
}
export default Movie