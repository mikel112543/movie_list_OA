
import Birthday from "./Movie.jsx";
import SameName from "./Movie.jsx";
import Movie from "./Movie.jsx";
import movie from "./Movie.jsx";
import {Col, Container, Navbar, Row} from "react-bootstrap";

function App() {

    const names = ['Michael', 'Dan', 'John', 'd', 't', 'r', '5', '4', '5', '6', '7', '8', '9'];

    return (
        <>
        <Container fluid style={{ paddingTop: '80px' }}>
            <Navbar fixed='top' style={{background: "purple", height: '60px'}}>
            </Navbar>
                <Row>
                    {names.map((name) => (
                        <Col>
                            <Movie name={name}/>
                        </Col>
                    ))}
                </Row>
        </Container>
        </>
    )
}

export default App