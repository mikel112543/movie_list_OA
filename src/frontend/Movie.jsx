import React from "react";
import {Card, Container, Image, Stack} from "react-bootstrap";



// Regular Function Definition
const Movie = ({name}) => {
    // ---------

    return (
        <>
            <Stack >
                <Image src='https://placekitten.com/200/300' alt='This is a kitten'></Image>
                <h1>{name}</h1>
            </Stack>
        </>
    )
}
export default Movie