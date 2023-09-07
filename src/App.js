import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Hero from"./components/Hero"
import Card from './components/Card';
import data from './data';
function App() {
  const cards = data.map(item => {
     return <Card image = {item.coverImg}
     rating = {item.stats.rating} 
     reviewCount = {item.stats.reviewCount} 
     title={item.title}
      price = {item.price}
      location={item.location}
      openSpots = {item.openSpots}/>
  })
  return (
    <div className="App">
      
<Navbar/>
<Hero/>   
<section className="cards-list">
                {cards}
            </section>
 </div>
  );
 
}

export default App;
