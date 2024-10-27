import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'
import SearchResults from './components/Home/SearchResults'
import MovieDetails from './components/Details/MovieDetails'
import TvDetails from './components/Details/TvDetails'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          <Route path='/tvseries' element={<TvSeries />}></Route>
          <Route path='/search' element={<SearchResults />}></Route>
          <Route path='/movie-details/:id' element={<MovieDetails />}></Route>
          <Route path='/tv-details/:id' element={<TvDetails />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
