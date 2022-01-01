import React  from 'react';
import './App.css';
import Top from './components/Top';
import Body from './components/Body';
import Middle from './components/Middle';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app" >
     <Top/>
     <Hero/>
     <Middle/>
     <Body/>
    </div>
  );
}

export default App;
