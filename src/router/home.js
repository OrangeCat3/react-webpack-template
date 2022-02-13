import home from "@pages/home";
import { Redirect } from "react-router-dom";


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
