import React from 'react';
import person from './dataStore2';
import jokes from './jokeStore';
const {firstName, email} = person;


class App extends React.Component {
    constructor() {
        super();
        jokes.addJoke("bla bla.");
        jokes.addJoke("bla bla2");
    }


    render() {
        return (
            <div>
                <p>{firstName} {email}</p>
                <p>{jokes.getRandomJoke()}</p>
                <p>{jokes.getRandomJoke()}</p>
                <p>{jokes.getRandomJoke()}</p>
            </div>
        )
    }
}

export default App