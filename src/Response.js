import React from 'react';

const Response = props => {
    const responses = props.array.map(response => {
        return (
            <p className="response" key={props.array.indexOf(response)}>{response}</p>
        )
    });
    return (
        <div className="all-responses">{responses}</div>
    )
}

export default Response
