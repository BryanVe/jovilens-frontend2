import styled from 'styled-components'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

export const StyledRangePicker = styled(RangePicker)`
  width: 100%;

  & input {
    text-align: center;
  }
`
