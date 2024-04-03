import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Home from './pages/index';
import Search from './pages/search';
import NotFound from './pages/404';
import NavBar from './components/navBar';


function App() {
  return (
      
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
  )
}


export default App
