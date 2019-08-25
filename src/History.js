import React from 'react';
import Response from './Response';

const History = props => {
    const listHistory = props.addHistory.map(pair => {
        if (pair.response) {
            return (
                <div key={props.addHistory.indexOf(pair)}>
                    <p className="command">~$ {pair.command}</p>
                    <Response array={pair.response} />
                </div>
            )
        } else {
            return (
                <div key={props.addHistory.indexOf(pair)}>
                    <p className="command">~$ {pair.command}</p>
                    <p>-react-cli: {pair.command}: command not found</p>
                </div>
            )
        }
    });

    return (
        <div>{listHistory}</div>
    )
}

export default History;
