import { FC } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { SelectProps } from 'antd/lib/select'

export const StyledSelect: FC<SelectProps> = styled(Select)<SelectProps>`
  display: block;
  margin-top: 4px;

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 4px;
    height: 47px;
  }

  &.ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-item,
  &.ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-placeholder {
    line-height: 44px;
  }
`
