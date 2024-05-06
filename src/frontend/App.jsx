
import Birthday from "./Movie.jsx";
import SameName from "./Movie.jsx";
import Movie from "./Movie.jsx";

import {Button, Col, Container, Dropdown, Navbar, NavbarText, Row} from "react-bootstrap";

function App() {

    const names = ['Michael', 'Dan', 'John', 'd', 't', 'r', '5', '4', '5', '6', '7', '8', '9'];

    return (
        <>
            <Navbar fixed='top' style={{background: "purple", height: '60px'}}>
                <div style={{display: "flex", justifyContent: "flex-end", width: '95%', gap: 20}}>
                    <Button style={{display: "flex", alignItems: "center", justifyContent: "center", padding: 5, gap: 10}}>
                        Basket
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-basket" viewBox="0 0 16 16">
                            <path
                                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </Button>
                </div>
            </Navbar>
            <Container fluid style={{paddingTop: '80px'}}>
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