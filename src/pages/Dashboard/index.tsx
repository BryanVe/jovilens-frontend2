// import { Outlet } from 'react-router-dom'
import { Typography } from 'antd'

const { Title } = Typography

const Dashboard = () => {
  return (
    <>
      <Title level={1} style={{ color: '#525252', margin: 0 }}>
        Hola Bryan!
      </Title>
      <Title level={3} style={{ color: '#525252', margin: 0, marginTop: 16 }}>
        ¿Qué deseas hacer? (TODO: definir acciones)
      </Title>
    </>
  )
}

export default Dashboard
