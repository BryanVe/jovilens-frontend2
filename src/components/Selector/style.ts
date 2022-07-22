import { FC } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import { SelectProps } from 'antd/lib/select'

export const StyledSelect: FC<SelectProps> = styled(Select)<SelectProps>`
  display: block;

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 4px;
  }
`
