import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StyledSider, StyledMenu, StyledDivider, StyledLogo } from './style'
import { getSidebarItems } from './sidebarConfig'

interface SidebarProps {
  width: number
  collapsed: boolean
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { width, collapsed } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <StyledSider width={width} collapsed={collapsed}>
      <StyledLogo>{collapsed ? 'J' : 'JOVILENS'}</StyledLogo>
      <StyledDivider />
      <StyledMenu
        mode='inline'
        selectedKeys={[pathname]}
        items={getSidebarItems(navigate)}
      />
    </StyledSider>
  )
}

export default Sidebar
