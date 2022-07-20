import styled from 'styled-components'
import { Divider, Drawer, Layout, Menu } from 'antd'
import { theme } from 'theme'

const { Sider } = Layout
const breakpoint = '920px'

export const StyledSider = styled(Sider)`
  background-color: ${theme.jovilens.main};
  overflow-x: hidden;
  overflow-y: auto;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakpoint}) {
    display: none;
  }
`

export const StyledMenu = styled(Menu)`
  font-weight: 400;
  background-color: ${theme.jovilens.main};
  border-right-color: ${theme.jovilens.main};
  border-left: 3px solid #fff;

  & .ant-menu-item {
    color: #fff;
    height: 48px;
    margin: 0 !important;
  }

  & .ant-menu-item:hover {
    background-color: ${theme.jovilens.light};
    color: #fff;
  }

  & .ant-menu-item::after {
    border-style: none;
  }

  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    font-weight: 500;
    background-color: ${theme.jovilens.light};
  }

  &.ant-menu-inline-collapsed .ant-menu-item {
    height: 40px;
  }

  & .ant-menu-submenu {
    color: #fff;
  }

  & .ant-menu-submenu > .ant-menu-submenu-title {
    color: #fff;
    background-color: ${theme.jovilens.main};
    margin: 0;
    height: 48px;
  }

  &.ant-menu-inline-collapsed .ant-menu-submenu-title {
    height: 40px;
  }

  & .ant-menu-submenu-title:hover {
    color: #fff;
  }

  & .ant-menu-sub {
    background-color: ${theme.jovilens.main};
  }

  & .ant-menu-sub .ant-menu-item {
    background-color: ${theme.jovilens.main};
    color: #fff;
    height: 48px;
  }

  & .anticon {
    font-size: 18px;
  }

  & .ant-menu-submenu-arrow {
    color: #fff !important;
  }
`

export const StyledDivider = styled(Divider)`
  background-color: ${theme.jovilens.dark};
  height: 3px;
  margin: 0;
`

export const StyledDrawer = styled(Drawer)`
  & .ant-drawer-header {
    display: none;
  }

  & .ant-drawer-body {
    background-color: ${theme.jovilens.main};
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${breakpoint}) {
    display: none;
  }
`

export const StyledLogo = styled.span`
  font-size: 1.5rem;
  text-align: center;
  padding: 12px 0;
  color: #fff;
  font-family: Kantumruy Pro, 'Times New Roman', Times, serif;
  font-weight: 600;
`
