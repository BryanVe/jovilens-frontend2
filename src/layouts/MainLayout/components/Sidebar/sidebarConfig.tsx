import { AppstoreOutlined, UserOutlined } from '@ant-design/icons'

export const getSidebarItems: GetSidebarItems = (navigate) => [
  {
    key: '/',
    label: 'Dashboard',
    icon: <AppstoreOutlined />,
    onClick: () => navigate('/'),
  },
  {
    key: '/patients',
    label: 'Pacientes',
    icon: <UserOutlined />,
    onClick: () => navigate('/patients'),
  },
]
