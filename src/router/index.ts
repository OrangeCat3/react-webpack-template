import { RouteConfig} from "react-router-config";
// import { } from "react-router-dom";
import homeRoutes from './home';
import anomalyRoutes from './anomaly';

const routes: RouteConfig[] = [

]

const route = routes
  .concat(homeRoutes)
  .concat(anomalyRoutes)


export default route;
