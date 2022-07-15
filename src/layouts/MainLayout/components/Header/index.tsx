import { FC } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { StyledHeader } from './style'

interface HeaderProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

const Header: FC<HeaderProps> = (props) => {
  const { collapsed, toggleCollapsed } = props
  const CollapsedIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined

  return (
    <StyledHeader>
      <CollapsedIcon onClick={toggleCollapsed} style={{ fontSize: 20 }} />
    </StyledHeader>
  )
}

export default Header
