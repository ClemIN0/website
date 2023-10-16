import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react';
import { FBDbContext } from '../contexts/FBDbContext';
import { FBStorageContext } from '../contexts/FBStorageContext';
import { AuthContext } from '../contexts/AuthContext';

import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function Detail(props) {
  const [movieData, setMovieData] = useState()

  let { movieId } = useParams()

  const FBDb = useContext(FBDbContext)
  const FBStorage = useContext(FBStorageContext)

  const movieRef = doc(FBDb, "movies", movieId)

  const getMovie = async () => {
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

  const Image = ( props ) => {
    const [imgPath,setImgPath] = useState()
    const imgRef = ref( FBStorage, `movie_cover/${ props.path }`)
    getDownloadURL( imgRef ).then( (url) => setImgPath(url) )

    return(
        <img src={imgPath} />
    )
  }


  if (movieData) {
    return (
      <Container>
        <Row>
          <Col>
          <Image path={movieData.image} />
          </Col>
          <Col>
            <h2>{movieData.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Write a review</h3>
          </Col>
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