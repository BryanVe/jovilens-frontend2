import styled from 'styled-components'
import { Input } from 'antd'
import { theme } from 'theme'

export const StyledInput = styled(Input)`
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 4px;

  &:focus {
    border-color: ${theme.jovilens.main};
    box-shadow: 0 0 0 2px rgb(3 58 158 / 30%);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`
