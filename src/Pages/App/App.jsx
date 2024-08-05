import {BrowserRouter} from 'react-router-dom'
import { AppRoutes } from '../../routes'
import '../../App.css'
import { Navbar } from '../../components/Navbar'
import { Card } from '../../components/Card'


export const  App = () =>  {
  return (
    <BrowserRouter>
   <AppRoutes/>
   <Navbar/>
    </BrowserRouter>
  )
}

