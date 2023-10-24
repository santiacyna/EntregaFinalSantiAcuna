import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return(
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/home' element={<ItemListContainer greeting="Hola Bienvenido" />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>

  
)
}
export default App
