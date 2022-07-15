import { FC } from 'react'
import { Container, ProgressLayer } from './style'

interface ProgressProps {
  height?: number
}

const Progress: FC<ProgressProps> = (props) => {
  const { height = 3 } = props

  return (
    <Container height={height}>
      <ProgressLayer />
      <ProgressLayer secondary />
    </Container>
  )
}

export default Progress
