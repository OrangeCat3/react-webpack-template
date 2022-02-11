import { RouteConfig} from "react-router-config";
// @ts-ignore
import page404 from '@pages/others/anomaly/404'

const routes: RouteConfig[] = [
  {
    path: '/404', exact: true, component: page404
  }
]

export default routes;
