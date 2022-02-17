import { lazy } from 'react';
const page404 = lazy(() => import('@pages/others/anomaly/404'));
const loading = lazy(() => import('@pages/others/loading'));


const routes = [
  { path: '/404', exact: true, component: page404 },
  { path: '/loading', exact: true, component: loading }
]

export default routes;
