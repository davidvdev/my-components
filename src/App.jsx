import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// IMPORT COMPONENTS
import { Carousel } from '../components/Carousel/Carousel.jsx'
import { ToggleGallery } from '../components/ToggleGallery/ToggleGallery.jsx'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Components</h1>
        <p>Built with React and Vite</p>
        <img src={logo} className="App-logo" alt="spinning React logo" />
      </header>
      <main>
        <Carousel />
        <ToggleGallery />
      </main>
    </div>
  )
}

export default App
