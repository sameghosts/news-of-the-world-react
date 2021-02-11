import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import Header from './Partials/Header'
import NewsFakeJson from '../NewsFakeJson'
import '../styling/style.css';



// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works
export const App = () => {
    //state for query, useful for when user is searching
    const [query, setQuery] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
    // establish state for storing of the news 
    const [newsData, setNewsData] = useState([]);
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

        
    return (
        // Router for setting routes
        <Router>
            <Header /> 
            <div className='app'>
                <Route exact path="/" render={()=>  <Landing />} />
                <Route path="/results" render={()=><Display news={newsData}/>} />
            </div>
        </Router>
    )
};