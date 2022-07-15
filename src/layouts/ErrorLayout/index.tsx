import { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const ErrorLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Layout style={{ height: '100vh' }}>
      <Content>{children}</Content>
    </Layout>
  )
}

export default ErrorLayout
