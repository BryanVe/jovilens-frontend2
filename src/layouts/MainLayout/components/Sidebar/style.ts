import styled from 'styled-components'
import { Divider, Layout, Menu } from 'antd'
import { theme } from 'theme'

const { Sider } = Layout

export const StyledSider = styled(Sider)`
  background-color: ${theme.jovilens.main};
  overflow-x: hidden;
  overflow-y: auto;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`

export const StyledMenu = styled(Menu)`
  font-weight: 400;
  background-color: ${theme.jovilens.main};
  border-right-color: ${theme.jovilens.main};
  border-left: 3px solid #fff;

  & > .ant-menu-item {
    color: #fff;
    height: 48px;
    margin: 0 !important;
  }

  & > .ant-menu-item:hover {
    background-color: ${theme.jovilens.light};
    color: #fff;
  }

  & .ant-menu-item::after {
    border-style: none;
  }

  & > .ant-menu-item-selected {
    font-weight: 500;
    background-color: ${theme.jovilens.light} !important;
  }

  &.ant-menu-inline-collapsed > .ant-menu-item {
    height: 40px;
  }

  & > .ant-menu-item .anticon {
    font-size: 18px;
  }
`

export const StyledDivider = styled(Divider)`
  background-color: ${theme.jovilens.dark};
  height: 3px;
  margin: 0;
`

export const StyledLogo = styled.span`
  font-size: 1.5rem;
  text-align: center;
  padding: 12px 0;
  color: #fff;
  font-family: Kantumruy Pro, 'Times New Roman', Times, serif;
  font-weight: 600;
`
