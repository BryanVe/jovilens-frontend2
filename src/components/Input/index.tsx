import { FC } from 'react'
import { Alert } from 'antd'
import { StyledLabel } from 'components'
import { StyledInput } from './style'

interface InputProps {
  id: string
  type?: string
  size?: SizeType
  label?: string
  value?: string
  error?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (props) => {
  const {
    id,
    type = 'text',
    size = 'large',
    label,
    value,
    error,
    placeholder,
    onChange,
  } = props

  return (
    <>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput
        type={type}
        size={size}
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
    </>
  )
}

export default Input
