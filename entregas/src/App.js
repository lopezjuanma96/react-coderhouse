import './App.css'
import {ItemListContainer} from './components/container/ItemListContainer'
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      
      <Routes>
        <Route path ="/productos/:catId" element={<ItemListContainer greeting="Bienvenidos a"/>}></Route>
        <Route path ="/productos" element={<ItemListContainer greeting="Bienvenidos al Shop!"/>}/>
        
        <Route path ="/contacto" element={<p>Apaga el celular si  no quiere que te llame</p>}></Route>

        <Route path="/nosotros" element={<h1> somo nosotro!</h1>}/>

        <Route path="*" element={<Navigate to="/productos"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
