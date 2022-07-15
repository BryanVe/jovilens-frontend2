// import { Outlet } from 'react-router-dom'
import { Typography } from 'antd'

const { Title } = Typography

const Patients = () => {
  return (
    <>
      <Title level={3} style={{ color: '#525252', margin: 0 }}>
        Pacientes
      </Title>
    </>
  )
}

export default Patients
