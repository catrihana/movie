import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"
import {useEffect, useState} from "react"
import axios from "axios"


const SuperHero = () => {

    const [movies, setMovies] = useState([])
    // useEffect = untuk merender data yang mau di hit yg mana
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            console.log(response.data.results)
        })
    }, [])
    
    return (
        <div>
            <Container id="superhero">
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    {movies.map((result, index) => {
                        return (
                            <Col md={4} className="movieWrapper" key={index}>
                                <Card className="movieImage">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images" />
                                    <div className="bg-dark desc">
                                        <div className="p-2 m-1 text-white">
                                            <Card.Title className="text-center">{result.title}</Card.Title>
                                            <Card.Text className="text-left">
                                                {result.overview}
                                            </Card.Text>
                                            <Card.Text className="text-left">
                                                {result.release_date}
                                            </Card.Text>  
                                        </div>
                                    </div>    
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>              
        </div>
    );
}

export default SuperHero