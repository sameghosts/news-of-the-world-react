import React from 'react';
import { Link } from 'react-router-dom';
export const Landing = props => {
    return (
        <div className="landing-container">
            <h2> Welcome to the News of the World App</h2>
            <h3> Click 'Top News' below to see the top news stories or use the search form below to search by keyword!</h3>
            <Link to="/results">
            <button className="top-news-button">Top News</button>
            </Link>

        </div>
    )
};