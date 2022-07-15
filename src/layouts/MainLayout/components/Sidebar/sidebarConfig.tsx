import { AppstoreOutlined } from '@ant-design/icons'

export const getSidebarItems: GetSidebarItems = (navigate) => [
  {
    key: '/',
    label: 'Dashboard',
    icon: <AppstoreOutlined />,
    onClick: () => navigate('/'),
  },
]
