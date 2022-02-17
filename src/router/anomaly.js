import { lazy } from 'react';
const page404 = lazy(() => import('@pages/others/anomaly/404'))

const routes = [
  {
    path: '/404', exact: true, component: page404
  }
]

export default routes;
