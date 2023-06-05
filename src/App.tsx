import './App.css'
import { MobileNavbar } from './components/MobileNavbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Sidebar } from './components/Sidebar'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
        lg: 1024,
        xl: 1600
      }
    },
  })
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Sidebar />
          <MobileNavbar />
        </Router>
        
      </ThemeProvider>
    </>
  )
}

export default App
