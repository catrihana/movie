import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="bg-black py-3 fixed-top"
            variant = "dark" >
                <Container>
                    <Navbar.Brand id="logo" href="/">CINDYFILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending" className="link">TRENDING</Nav.Link>
                        <Nav.Link href="#upcoming" className="link">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div> 
    )
}

export default NavigationBar