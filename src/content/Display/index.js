import React from 'react';

export const Display = props => {

if (props.news.length < 1) {
    return (<h1>Loading</h1>)
} else {
    let content = props.news.map((article, i ) =>{
        return (
            <li key={`article-${i}`}>
                {article.title}
                by
                {article.author}
            </li>
        )})

    return (
            <div>
                <h1>Top Articles:</h1>
                <ul>
                {content}
                </ul>
            </div>
        )

    }
    // let content = props.data ? '' : 'Ruh-Roh! API or props fail!';

};