import { FC } from 'react'
import { Alert, Select } from 'antd'
import { StyledLabel } from 'components'
import { StyledSelect } from './style'

const { Option } = Select

interface SelectorProps {
  id: string
  size?: SizeType
  label: string
  value?: string
  options?: SelectorOption[]
  error?: string
  placeholder?: string
  onChange?: (value: string) => void
}

const Selector: FC<SelectorProps> = (props) => {
  const {
    id,
    size = 'large',
    label,
    value,
    options,
    error,
    placeholder,
    onChange,
  } = props

  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect
        allowClear
        size={size}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
        {options &&
          options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
      </StyledSelect>
      {error && (
        <Alert
          message={error}
          type='error'
          showIcon
          style={{ marginTop: 3, fontSize: 12 }}
        />
      )}
    </>
  )
}

export default Selector
