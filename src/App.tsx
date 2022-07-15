import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import routes from 'routes'
import './App.css'

const renderRoutes: RenderRoutes = (routes) =>
  routes?.map((route) => (
    <Route
      caseSensitive
      key={route.path}
      path={route.path}
      element={
        route.layout ? (
          <route.layout>
            <route.element />
          </route.layout>
        ) : (
          <route.element />
        )
      }
    >
      {renderRoutes(route.sub)}
    </Route>
  ))

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Spin />}>
      <Routes>{renderRoutes(routes)}</Routes>
    </Suspense>
  </BrowserRouter>
)

export default App
