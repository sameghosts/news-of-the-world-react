import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import Header from './Partials/Header'
import '../styling/style.css';



// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    //state for query, useful for when user is searching
    const [query, setQuery] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
    // establish state for storing of the news 
    const [newsData, setNewsData] = useState([]);
    // State for Favorites
    const [faves, setFaves] = useState=([]);

    // Use effect hook for fetch API call from News API 
    useEffect(() => {
            if (query){
                fetch(query)
                .then(response => response.json())
                .then(jsonData => {
                    // console.log(jsonData.articles);
                    if (jsonData.articles){
                        setNewsData(jsonData.articles)
                    }
                    console.log(newsData);
                })
            }
        }, [])
        
        // Function Handle Display
            // Drill props and function to Display // router Link to results to go to Details

        // Function to Grab On Change for Query
            //set up state for query
            //Drill to landing
        // Function to handle submit Query
            // Drill to landing
        
        //Function to handle faves Add
            //Drill to:
                // Details Drill
                // Display Drill 
        
    return (
        // Router for setting routes
        <Router>
            <Header /> 
            <div className='app'>
                <Route exact path="/" render={()=>  <Landing />} />
                <Route path="/results" render={()=> <Display news={newsData}/>} />
                {/* Route for Details */}
                {/* Route for Favorites */}
                
            </div>
        </Router>
    )
};