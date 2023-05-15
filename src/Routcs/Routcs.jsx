import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingnUP/SingUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/',
           element:<Home></Home> 
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SingUp></SingUp>
        },
        {
          path:'bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
       
        {
          path:'checkout/:id',
          element:<Checkout></Checkout>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;