import './App.css';

// import { Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getMovie } from './services/omdbapi'



import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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
          <Homepage /> 
          <About />
          <Projects />
            <Form movieSearch={getMovie} setMovie={setMovie}/>
            <MovieDisplay movie={movie}/>
        </div>
        {/* <Footer /> */}
      </div>
  
  );
}

export default App;
