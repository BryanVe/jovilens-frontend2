import { FC } from 'react'
import { Alert } from 'antd'
import { StyledLabel, StyledInput } from './style'

interface InputProps {
  id: string
  type?: string
  label: string
  value: string
  error?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (props) => {
  const {
    id,
    type = 'text',
    label,
    value,
    error,
    placeholder,
    onChange,
  } = props

  return (
    <div style={{ marginBottom: 16 }}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        size='large'
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && (
        <Alert
          message={error}
          type='error'
          showIcon
          style={{ marginTop: 3, fontSize: 12 }}
        />
      )}
    </div>
  )
}

export default Input
