import { FC } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { jovilensColor } from 'theme'
import { Container } from './style'

interface LoadingPageProps {
  size?: number
}

const LoadingPage: FC<LoadingPageProps> = (props) => {
  const { size = 60 } = props

  return (
    <Container>
      <Spin
        indicator={
          <LoadingOutlined
            style={{ fontSize: size, color: jovilensColor.main }}
            spin
          />
        }
      />
    </Container>
  )
}

export default LoadingPage
