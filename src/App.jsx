
import './App.css'
import InputPokedex from './componentes/InputPokedex'
import Pokedex from './componentes/Pokedex'
import PokedexID from './componentes/PokedexID'
import PokedexConfi from './componentes/PokedexConfig'
import ProtectedRoutes from './componentes/ProtectedRoutes'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import { useState } from 'react'
import Loading from './componentes/Loading'


function App() {
  const [load, setLoad] = useState(false)
    setTimeout(() => {
      setLoad(true)
    }, 2000)
 
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={load?<InputPokedex />:<Loading></Loading>} />
        

          <Route element={<ProtectedRoutes/>}>
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Pokedex/:id" element={<PokedexID />} />
          <Route path='/Pokedex/config' element={<PokedexConfi />}></Route>
        </Route>
      </Routes>
      </HashRouter>
    </>
  );
}

export default App
