import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { StyledTitle } from 'components'

const NotFound = () => {
  const navigate = useNavigate()
  const redirect = () => navigate('/')

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        fontSize: 24,
        flexDirection: 'column',
      }}
    >
      <StyledTitle level={3}>Página no encontrada</StyledTitle>
      <Button type='ghost' onClick={redirect}>
        Volver al dashboard
      </Button>
    </div>
  )
}

export default NotFound
