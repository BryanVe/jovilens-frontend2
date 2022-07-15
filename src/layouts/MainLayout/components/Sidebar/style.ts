import styled from 'styled-components'
import { Divider, Layout, Menu } from 'antd'
import { jovilensColor } from 'theme'

const { Sider } = Layout

export const StyledSider = styled(Sider)`
  background-color: ${jovilensColor.main};
  overflow: auto;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`

export const StyledMenu = styled(Menu)`
  font-weight: 400;
  background-color: ${jovilensColor.main};
  border-right-color: ${jovilensColor.main};
  border-left: 3px solid #fff;

  & > .ant-menu-item {
    color: #fff;
    height: 48px;
    margin: 0 !important;
  }

  & > .ant-menu-item:hover {
    background-color: ${jovilensColor.light};
    color: #fff;
  }

  & .ant-menu-item::after {
    border-style: none;
  }

  & > .ant-menu-item-selected {
    font-weight: 500;
    background-color: ${jovilensColor.light} !important;
  }

  &.ant-menu-inline-collapsed > .ant-menu-item {
    height: 40px;
  }

  & > .ant-menu-item .anticon {
    font-size: 18px;
  }
`

export const StyledDivider = styled(Divider)`
  background-color: ${jovilensColor.dark};
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
