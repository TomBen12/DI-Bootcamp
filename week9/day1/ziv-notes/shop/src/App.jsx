import {Routes, Route} from 'react-router'
import Shop from './components/Shop'
import Product from './components/Product'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
