import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { ref } from "firebase/storage";

import { FBDbContext } from '../contexts/FBDbContext';
import { FBStorageContext } from '../contexts/FBStorageContext'

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
        console.log(movies)
    }

    useEffect( () => {
        if( data.length === 0 ) {
            getData()
        }
    })

    const Columns = data.map( (movie, key) => {
        return(
            <Col md="4" key={key}>
                <Card>
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