import {useRoutes, BrowserRouter} from 'react-router-dom'
import { AppRoutes } from '../../routes'
import { Home } from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import { SignIn } from "../SignIn"
import '../../App.css'


export const  App = () =>  {
  return (
    <BrowserRouter>
   <AppRoutes/>
    </BrowserRouter>
  )
}

