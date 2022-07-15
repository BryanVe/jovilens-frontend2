type FC = import('react').FC
type PropsWithChildren = import('react').PropsWithChildren
type LazyExoticComponent = import('react').LazyExoticComponent
type NavigateFunction = import('react-router-dom').NavigateFunction
type ItemType = import('antd/lib/menu/hooks/useItems').ItemType

interface Route {
  path?: string
  component?: LazyExoticComponent<() => JSX.Element>
  routes?: Route[]
}

type RenderRoutes = (routes?: Route[]) => JSX.Element[] | undefined
type GetSidebarItems = (navigate: NavigateFunction) => ItemType[]
