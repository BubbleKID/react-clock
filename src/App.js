import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

const styles = {
  clockFlex:{
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={ styles.clockFlex }>      
            <Clock timezone={'Australia/Melbourne'} city={'Melbourne'} />
            <Clock timezone={'Asia/Shanghai'} city={'Shanghai'} />
            <Clock timezone={'America/New_York'} city={'New York'}/>
            <Clock timezone={'Europe/London'} city={'London'} />
          </div>
        </header>
      
      </div>
    );
  }
}

export default App;
