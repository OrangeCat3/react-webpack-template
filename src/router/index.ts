import { RouteConfig} from "react-router-config";
// import { } from "react-router-dom";
import home from "../pages/home";

const routes: RouteConfig[] = [
  { path: "/", exact:true, component: home }
]

export default routes;
