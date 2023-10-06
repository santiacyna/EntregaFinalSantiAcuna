import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function App() {
  return(
    <>
    <NavBar />
    <ItemListContainer greeting="Hola este es mi ecommerce"/>
    </>
)
}
export default App
