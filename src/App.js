import './App.css';

import { Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi'

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";


import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';


function App() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie("Training Day");
      console.log(data);
      setMovie(data)
    };
    fetchData();
  }, [])

  return (
    
      <div>
        <NavBar />
        <div>
          <Routes>
              <Route path='/' element={<Homepage />} />
              {/* <Homepage />  */}

              <Route path='/about' element={<About />} />
              {/* <About /> */}

              <Route path='/projects' element={<Projects />} />
              {/* <Projects /> */}

              <Route path='/projects/movieform' element={<Form movieSearch={getMovie} setMovie={setMovie} />} />

              <Route path='/projects/movieform/favoritemovie' element={<MovieDisplay movie={movie} />} />
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
