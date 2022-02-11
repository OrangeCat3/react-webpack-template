import { RouteConfig} from "react-router-config";
import home from "../pages/home";

const routes: RouteConfig[] = [
  { path: "/", exact:true, component: home }
]

export default routes;
