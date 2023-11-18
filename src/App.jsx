
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Services from "./pages/Services"
import News from "./pages/News"
import Contact from './pages/Contact'


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path = "/" element = {< Home />} />
      <Route path = "/Services" element = {< Services />} />
      <Route path = "/News" element = {<News />} />
      <Route path = "/Contact" element = {<Contact />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App
