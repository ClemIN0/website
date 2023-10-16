import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react';
import { FBDbContext } from '../contexts/FBDbContext';
import { FBStorageContext } from '../contexts/FBStorageContext';
import { AuthContext } from '../contexts/AuthContext';

import { doc, getDoc } from "firebase/firestore";

export function Detail(props) {
  const [movieData, setMovieData] = useState()

  let { movieId } = useParams()

  const FBDb = useContext(FBDbContext)

  const movieRef = doc(FBDb, "movies", movieId)

  const getMovie = async (id) => {
    let movie = await getDoc(movieRef)
    if (movie.exists()) {
      setMovieData(movie.data())
    }
    else {
      // no movie exists with the ID
    }
  }

  useEffect(() => {
    if (!movieData) {
      getMovie(movieId)
    }
  })

  if (movieData) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>{movieId}</h2>
          </Col>
          <Col>Right</Col>
        </Row>
      </Container>
    )
  }
  else {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Loading...</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}