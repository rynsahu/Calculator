import React from 'react';
import './App.css';
import calculate from './util/claculate'
// import Display from './components/display';
// import Keypad from './components/keypad';

class App extends React.Component {
    state = {
        keys: [7, 8, 9, 'DEL', 4, 5, 6,'/', 1, 2, 3, 'x', '.', 0, '+', '-', '='],
        display: { value: '', nextIndex: 0 },
        keyInputs: []
    }

    handleKey(key) {
        const keyInputs = [...this.state.keyInputs];
        let display = {...this.state.display};
        console.log(display);

        if(key === '=') {
            const { currentValue, currentIndex } = calculate(keyInputs, display);
            display = { value: currentValue, nextIndex: currentIndex };
            console.log(display);
        }
        else keyInputs.push(key);

        this.setState({ display, keyInputs });
    }

    render() {
        const { display, keys, keyInputs } = this.state;
        const getDisplayStyle = display.value === '' ? { visibility: "hidden" }: {};

        return (
            <div className="App-component">
                <div className="App-display">
                    <div className="App-expression">{keyInputs}</div>
                    <div className="App-result" style={getDisplayStyle}>{display.value}</div>
                </div>
                <div className="App-keypad">
                    {keys.map(key => 
                        <button
                            key={key}
                            onClick={() => this.handleKey(key)}>{key}
                        </button>
                    )}
                </div>
            </div>
        );
    } 
}

export default App;