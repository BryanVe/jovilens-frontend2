import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoadingPage } from 'components'
import { MainLayout } from 'layouts'
import routes from 'routes'
import './App.css'

const renderRoutes: RenderRoutes = (routes) =>
  routes?.map((route) => (
    <Route
      caseSensitive
      key={route.path}
      path={route.path}
      element={<route.component />}
    >
      {renderRoutes(route.routes)}
    </Route>
  ))

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={<LoadingPage />}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
)

export default App
