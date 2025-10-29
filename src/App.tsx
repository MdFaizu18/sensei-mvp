import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* landing page route = "/" */}
        <Route 
        path="/" 
        element={<LandingPage/>}
        />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
