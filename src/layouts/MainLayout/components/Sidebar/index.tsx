import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  StyledSider,
  StyledMenu,
  StyledDivider,
  StyledLogo,
  StyledDrawer,
} from './style'
import { getSidebarItems } from './sidebarConfig'
import './sidebar-popup.css'

interface SidebarProps {
  width: number
  collapsed: boolean
  toggleCollapsed: () => void
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { width, collapsed, toggleCollapsed } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const siderContent = (
    <>
      <StyledDivider />
      <StyledMenu
        mode='inline'
        selectedKeys={[pathname]}
        items={getSidebarItems(navigate)}
      />
    </>
  )

  return (
    <>
      <StyledSider width={width} collapsed={collapsed}>
        <StyledLogo>{collapsed ? 'J' : 'JOVILENS'}</StyledLogo>
        {siderContent}
      </StyledSider>
      <StyledDrawer
        width={width}
        visible={!collapsed}
        placement='left'
        onClose={toggleCollapsed}
      >
        <StyledLogo>JOVILENS</StyledLogo>
        {siderContent}
      </StyledDrawer>
    </>
  )
}

export default Sidebar
