import './App.css'
import {ItemListContainer} from './components/container/ItemListContainer'
import { ItemDetailContainer } from './components/container/ItemDetailContainer'
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      
      <Routes>
        <Route path ="/category/:catId" element={<ItemListContainer greeting="Bienvenidos a"/>}></Route>
        <Route path ="/category" element={<ItemListContainer greeting="Bienvenidos al Shop!"/>}/>
        
        <Route path ="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<Navigate to="/category"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
