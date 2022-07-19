import { FC } from 'react'
import { Alert, Select } from 'antd'
import { StyledLabel } from 'components'
import { StyledSelect } from './style'

const { Option } = Select

interface SelectorOption {
  label: string
  value: string
}

interface SelectorProps {
  id: string
  label: string
  value?: string
  options?: SelectorOption[]
  error?: string
  onChange?: (value: string) => void
}

const Selector: FC<SelectorProps> = (props) => {
  const { id, label, value, options, error, onChange } = props

  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect
        allowClear
        size='large'
        id={id}
        value={value}
        placeholder={label}
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
