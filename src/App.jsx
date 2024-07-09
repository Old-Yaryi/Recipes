
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'
import Ingridients from './pages/Ingridients/Ingridients'
import Ingridient from './Components/Ingridient/Ingridient'




function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/ingridients' element={<Ingridients />} />
          <Route path='./ingridient/:id' element={<Ingridient />} />
        </Route >
      </Routes >

    </>
  )
}

export default App
