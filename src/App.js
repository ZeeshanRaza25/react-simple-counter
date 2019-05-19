import React, { Component } from 'react';
import './App.css'
import Counter from './components/Counter/counter';
import AppFooter from './components/footer/AppFooter';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='header'>
                    <h1 className='title'>Simple Counter</h1>
                </header>
                <Counter />
                <AppFooter />
            </div>
        )
    }
}

export default App;
