import { Redirect } from "react-router-dom";
import { lazy } from 'react';
const home = lazy(() => import("@pages/home"));


const routes = [
  { 
    path: "/", 
    exact:true, 
    render: function()  {
      return <Redirect to={"/home"} />;
    }
  },
  {
    path: '/home',
    component: home
  }
]

export default routes;
