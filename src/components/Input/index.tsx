import { FC } from 'react'
import { Alert } from 'antd'
import { StyledLabel } from 'components'
import { StyledInput } from './style'

interface InputProps {
  id: string
  type?: string
  label: string
  value?: string
  error?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (props) => {
  const { id, type = 'text', label, value, error, onChange } = props

  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        size='large'
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={label}
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
