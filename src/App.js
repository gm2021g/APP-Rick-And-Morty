import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './NavBar/NavBar.jsx'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import swal from 'sweetalert';
import Form from './components/Form/Form'
import { useEffect } from 'react'

function App() {

  const [characters, setCharacters] = useState([
  ]);

  const onSearch = ((character1) => {
    fetch(`https://rickandmortyapi.com/api/character/${character1}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          swal(<h2>No hay personajes con ese ID</h2>);
        }
      });
  }
  )

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (

    <div>

      <div>
        <NavBar onSearch={onSearch} />
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
