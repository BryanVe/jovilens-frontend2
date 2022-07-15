import { lazy } from 'react'

const routes: Route[] = [
  {
    path: '/',
    component: lazy(() => import('pages/Dashboard')),
  },
  {
    path: '/patients',
    component: lazy(() => import('pages/Patients')),
  },
  {
    path: '*',
    component: lazy(() => import('pages/NotFound')),
  },
]

export default routes
