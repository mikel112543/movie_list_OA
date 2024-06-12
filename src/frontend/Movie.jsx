import React from "react";
import { Image, Stack} from "react-bootstrap";
import '../frontend/styles/movie.css'


// Regular Function Definition
const Movie = ({title, popularity, releaseDate, posterPath}) => {

    return (
        <>
            <Stack>
                <Image className='image-hover-effect' src={posterPath} alt='https://picsum.photos/100/150'></Image>
                <h4>{title}</h4>
                <h5>Released On: {releaseDate}</h5>
            </Stack>
        </>
    )
}
export default Movie