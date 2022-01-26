import './App.css'

import Component, {ComponentParam} from './components.js';
import {ItemListContainer} from './components/container/ItemListContainer'
import {NavBar} from './components/NavBar/NavBar'


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos al Shop!"/>
    </>
  );
}

export default App;
