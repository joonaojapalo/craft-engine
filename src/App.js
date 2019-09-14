import React from 'react';
import './App.css';
import World from './World/World';
import View from './World/View';
import useKeys from './useKeys';

const App = () => {
  const state = useKeys(9, 4, -5);

  return (
    <div className="App">
      <header className="App-header">
        Craft engine
      </header>
      <View>
        <World {...state}/>
      </View>
    </div>
  );
}

export default App;
