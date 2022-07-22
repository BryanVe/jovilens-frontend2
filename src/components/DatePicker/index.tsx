import { FC } from 'react'
import { StyledRangePicker } from './style'

interface DatePickerProps {
  size?: SizeType
  onChange: ChangeDates
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const { size = 'large', onChange } = props

  return <StyledRangePicker size={size} onChange={onChange} />
}

export default DatePicker
