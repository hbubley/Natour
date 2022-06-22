import './App.css'
import About from './components/About/About'
import Booking from './components/Booking/Booking'
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import Stories from './components/Stories/Stories'
import Tours from './components/Tours/Tours'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
    </div>
  )
}

export default App
