import { lazy } from 'react'
import { ErrorLayout, MainLayout } from 'layouts'

const routes: Route[] = [
  {
    path: '/',
    layout: MainLayout,
    element: lazy(() => import('pages/Dashboard')),
  },
  {
    path: '/aea',
    layout: MainLayout,
    element: lazy(() => import('pages/Dashboard')),
  },
  {
    path: '*',
    layout: ErrorLayout,
    element: lazy(() => import('pages/NotFound')),
  },
]

export default routes
