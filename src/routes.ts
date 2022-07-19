import { lazy } from 'react'
import { Outlet } from 'react-router-dom'

const routes: Route[] = [
  {
    path: '/',
    component: lazy(() => import('pages/Dashboard')),
  },
  {
    path: '/patients',
    component: Outlet,
    routes: [
      {
        path: 'create',
        component: lazy(() => import('pages/CreatePatient')),
      },
    ],
  },
  {
    path: '*',
    component: lazy(() => import('pages/NotFound')),
  },
]

export default routes
