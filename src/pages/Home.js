import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";

import { FBDbContext } from '../contexts/FBDbContext';

export function Home () {
    const[ data, setData ] = useState([])

    const FBDb = useContext(FBDbContext)

    const getData = async () => {
        // get data from firestore collection called "movies"
        const querySnapshot = await getDocs( collection(FBDb, "movies") )
        // an array to store all the movies from firestore
        let movies = []
        querySnapshot.forEach( (doc) => {
            let movie = doc.data()
            movie.id = doc.id
            // add the book to the array
            movies.push(movie)
        })
        // set the movie array as the data state
        setData(movies)
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}