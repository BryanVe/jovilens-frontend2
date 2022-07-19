import { useState } from 'react'
import { Button, Row, Col } from 'antd'
import { StyledTitle, Input } from 'components'

const formValidations: FormValidations = {
  names: [
    {
      rule: (value) => value.length !== 0,
      message: 'Este campo es requerido',
    },
  ],
  lastNames: [
    {
      rule: (value) => value.length !== 0,
      message: 'Este campo es requerido',
    },
  ],
  phone: [
    {
      rule: (value) => value.length !== 0,
      message: 'Este campo es requerido',
    },
  ],
  age: [
    {
      rule: (value) => value.length !== 0,
      message: 'Este campo es requerido',
    },
    {
      rule: (value) => parseInt(value) < 100,
      message: 'Debe ser menor a 100',
    },
  ],
  address: [
    {
      rule: (value) => value.length !== 0,
      message: 'Este campo es requerido',
    },
  ],
}

interface FormData {
  names: string
  lastNames: string
  phone: string
  age: string
  address: string
  occupation: string
  gender: string
  civilStatus: string
}

const CreatePatient = () => {
  const [errors, setErrors] = useState<StringToStringMap>({})
  const [formData, setFormData] = useState<FormData>({
    names: '',
    lastNames: '',
    phone: '',
    age: '',
    address: '',
    occupation: '',
    gender: '',
    civilStatus: '',
  })

  const handleChangeFormInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    if (errors[name])
      setErrors((errors) => ({
        ...errors,
        [name]: undefined,
      }))

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }))
  }

  const validateForm = () => {
    let ok = true
    Object.entries(formData).forEach((entry) => {
      const key = entry[0]
      const value = entry[1]
      const fieldValidations = formValidations[key] || []
      const notPassedValidation = fieldValidations.find(
        (validation) => !validation.rule(value)
      )

      if (notPassedValidation) {
        setErrors((errors) => ({
          ...errors,
          [key]: notPassedValidation.message,
        }))

        ok = false
      }
    })

    return ok
  }

  const createPatient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const ok = validateForm()
    if (!ok) return

    console.log(formData)
  }

  return (
    <>
      <StyledTitle level={3}>Crear paciente</StyledTitle>
      <form onSubmit={createPatient}>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={12}>
            <Input
              id='names'
              label='Nombres'
              placeholder='Ingrese los nombres'
              value={formData.names}
              error={errors['names']}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Input
              id='lastNames'
              label='Apellidos'
              placeholder='Ingrese los apellidos'
              value={formData.lastNames}
              error={errors['lastNames']}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={17} md={17}>
            <Input
              id='address'
              label='Dirección'
              placeholder='Ingrese la dirección'
              value={formData.address}
              error={errors['address']}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={7} md={7}>
            <Input
              id='phone'
              label='Teléfono'
              placeholder='Ingrese el teléfono'
              value={formData.phone}
              error={errors['phone']}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={6} md={6}>
            <Input
              id='occupation'
              label='Ocupación'
              placeholder='Ingrese la ocupación'
              value={formData.occupation}
              error={errors['occupation']}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={12} md={5}>
            <Input
              id='age'
              type='number'
              label='Edad'
              placeholder='Ingrese la edad'
              value={formData.age}
              error={errors['age']}
              onChange={handleChangeFormInput}
            />
          </Col>
        </Row>
        <Button htmlType='submit'>Crear</Button>
      </form>
    </>
  )
}

export default CreatePatient
