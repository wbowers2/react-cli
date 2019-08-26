import React from 'react';

const Response = props => {
    const responses = props.array.map(response => {
        if (response.href) {
            return (
                <p className="response" key={props.array.indexOf(response)}>
                    {response.textBefore}<a href={response.href}>{response.anchorText || response.href}</a>{response.textAfter}
                </p>
            )
        }
        return (
            <p className="response" key={props.array.indexOf(response)}>{response}</p>
        )
    });
    return (
        <div className="all-responses">{responses}</div>
    )
}

export default Response
