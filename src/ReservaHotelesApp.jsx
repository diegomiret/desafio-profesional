import { NavBarComponent } from './components/NavBarComponent'
import { AdminProducts } from './pages/AdminProducts'
import './ReservaHoteles.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomeComponent } from './components/HomeComponent'

export const ReservaHotelesApp = () => {
  return (
    <>
    <NavBarComponent></NavBarComponent>

    <div className='container'>
        <Routes>
            <Route path='/' element={<HomeComponent/>} ></Route>
            <Route path='/administracion' element={<AdminProducts/>}></Route>
            <Route path='/*' element={<HomeComponent/>}></Route>
        </Routes>

    </div>


   
    </>
  )
}
