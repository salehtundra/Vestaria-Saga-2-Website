import React from 'react';
import Header from './Components/Header/Header';
import MainContent from './Components/Main/Main';
import './App.css';
  
function App() {
    return (
      <div className="container">
        <Header />
        <MainContent />
      </div>
    )
}
  
export default App