import './App.css'
import { MobileNavbar } from './components/MobileNavbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Router>
        <MobileNavbar />
      </Router>
    </>
  )
}

export default App
