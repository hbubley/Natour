import './App.css'
import About from './components/About/About'
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
    </div>
  )
}

export default App
