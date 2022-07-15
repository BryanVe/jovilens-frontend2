import { FC, PropsWithChildren, useState } from 'react'
import { Layout } from 'antd'
import { Sidebar, Header } from './components'

const { Content } = Layout

const sidebarWidth = 260

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => setCollapsed(!collapsed)

  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar collapsed={collapsed} width={sidebarWidth} />
      <Layout>
        <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
