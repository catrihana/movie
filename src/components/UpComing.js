import { Card, Container, Row, Col, Image } from "react-bootstrap"
import {useEffect, useState} from "react"
import axios from "axios"


const SuperHero = () => {

    const [movies, setMovies] = useState([])
    // useEffect = untuk merender data yang mau di hit yg mana
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    
    return (
        <div id="card">
            <Container id="upcoming">
                <br />
                <h1 className="text-white title-2">Upcoming Movies</h1>
                <br />
                <Row>
                    {movies.map((result, index) => {
                        return (
                            <Col xs={6} sm={4} md={3} lg={2} className="movieWrapper" key={index}>
                                <Card className="movieImage">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.title} className="images justify-content-center" />
                                    <div className="desc">
                                        <div className="text-white pt-4">
                                            <Card.Title className="text-left text">{result.title}</Card.Title>
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