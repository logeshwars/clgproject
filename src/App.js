import React  from 'react';
import './App.css';
import Top from './Top';
import Carousel from './Carousel'
import Body from './Body';
import Middle from './Middle';
import Hero from './Hero';

function App() {
  return (
    <div className="app">
     <Top/>
     <Hero/>
     <Middle/>
     <Body/>
    </div>
  );
}

export default App;
