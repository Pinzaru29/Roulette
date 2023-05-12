import React, { Component } from 'react';
import classes from './App.module.css';
import Roulette from '../components/Roulette/Roulette';
import ButtonAppBar from '../components/Header/header';

class App extends Component {

    render() {
        return (
            <>
                <ButtonAppBar />
                <div className = { classes.App } >
                    <Roulette />
                </div>
            </>
        )
    }
}

export default App;