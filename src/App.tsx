import './App.css'
import { MobileNavbar } from './components/MobileNavbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 380,
        md: 600,
        lg: 1024,
        xl: 1600
      }

    }
  })
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <MobileNavbar />
        </Router>
        
      </ThemeProvider>
    </>
  )
}

export default App
