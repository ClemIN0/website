import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

import { FBDbContext } from '../contexts/FBDbContext';
import { FBStorageContext } from '../contexts/FBStorageContext'

import  '../styles/Home.css'

export function Home () {
    const[ data, setData ] = useState([])

    const FBDb = useContext(FBDbContext)
    const FBStorage = useContext( FBStorageContext )

    const getData = async () => {
        // get data from firestore collection called "movies"
        const querySnapshot = await getDocs( collection(FBDb, "movies") )
        // an array to store all the movies from firestore
        let movies = []
        querySnapshot.forEach( (doc) => {
            let movie = doc.data()
            movie.id = doc.id
            // add the movie to the array
            movies.push(movie)
        })
        // set the movie array as the data state
        setData(movies)
    }

    useEffect( () => {
        if( data.length === 0 ) {
            getData()
        }
    })

    const Image = ( props ) => {
        const [imgPath,setImgPath] = useState()
        const imgRef = ref( FBStorage, `movie_cover/${ props.path }`)
        getDownloadURL( imgRef ).then( (url) => setImgPath(url) )

        return(
            <Card.Img variant="top" src={imgPath} className="card-image" />
        )
    }

    const Columns = data.map( (movie, key) => {
        return(
            <Col md="3" key={key} className="my-3">
                <Card>
                    <Image path={movie.image} />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                {Columns}
            </Row>
       </Container>
    )
}