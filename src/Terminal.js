import React, { useState, useEffect } from 'react';
import History from './History';
import commandMap from './Command';

const Terminal = () => {
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const pair = {};
        pair.command = "help";
        pair.response = commandMap.get("help");
        setHistory([pair]);
    }, [])

    useEffect(() => {
        document.getElementById('input').scrollIntoView(false);
    })

    const handleChange = event => {
        setInput(event.target.value);
    }

    const handleKeyPress = event => {
        if(event.key === 'Enter') {
            const pair = {};
            pair.command = input;
            const trimmedCommand = pair.command.trim();
            pair.response = commandMap.get(trimmedCommand);
            if (trimmedCommand === "date") pair.response = [new Date().toString()];
            if (trimmedCommand.substring(0, 5) === "echo ") pair.response = [trimmedCommand.substring(5)];
            trimmedCommand === "clear" ? setHistory([]) : setHistory(history.concat(pair));
            setInput("");
            event.preventDefault();
        }
    }

    const setFocus = () => {
        document.getElementById('input').focus();
    }
    
    return (
        <div className="flex-container">
            <History addHistory={history}/>
            <form className="text-input">
                <label className="text-input">
                    ~$&nbsp;
                    <input 
                    autoComplete="off"
                    autoFocus
                    id="input"
                    onBlur={setFocus}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    type="text"
                    value={input}
                    />
                </label>
            </form>
        </div>
    )
}

export default Terminal;
