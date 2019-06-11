import React from 'react';
import './App.css';
import MyIp from './MyIP'
import MyUserAgent from './MyUserAgent'
import Card from './Card'

function App() {
  return (
    <div className="App">
      <MyIp style={{ background: 'red' }} />
      <MyUserAgent />

      <Card
        header={(state) => <p>Test {JSON.stringify(state)} </p>}
        body={<div>texto</div>}
      >
        {state => <p>Children {state.counter}</p>}
      </Card>
    </div>
  );
}

export default App;
