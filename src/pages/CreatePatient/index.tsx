import { useState } from 'react'
import { Button, Row, Col } from 'antd'
import { StyledTitle, Input, Selector } from 'components'
import { CIVIL_STATUS_OPTIONS, GENDER_OPTIONS, patientValidations } from 'utils'

interface FormData {
  names: string
  lastNames: string
  phone: string
  age: string
  address: string
  occupation?: string
  gender?: string
  civilStatus?: string
}

const CreatePatient = () => {
  const [errors, setErrors] = useState<StringToStringMap>({})
  const [formData, setFormData] = useState<Partial<FormData>>({})

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

  const handleChangeFormSelector = (name: string, value: string) => {
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
    Object.entries(patientValidations).forEach((entry) => {
      const field = entry[0]
      const validations = entry[1]
      const value = Object(formData)[field]
      const failedValidation = validations.find(
        (validation) => !value || !validation.rule(value)
      )

      if (failedValidation) {
        setErrors((errors) => ({
          ...errors,
          [field]: failedValidation.message,
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
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={7}>
            <Input
              id='names'
              label='Nombres'
              placeholder='Nombres'
              value={formData.names}
              error={errors['names']}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={7}>
            <Input
              id='lastNames'
              label='Apellidos'
              placeholder='Apellidos'
              value={formData.lastNames}
              error={errors.lastNames}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={10} xl={8} xxl={5}>
            <Input
              id='age'
              type='number'
              label='Edad'
              placeholder='Edad'
              value={formData.age}
              error={errors.age}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={14} xl={9} xxl={5}>
            <Input
              id='phone'
              label='Teléfono'
              placeholder='Teléfono'
              value={formData.phone}
              error={errors.phone}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={5} xxl={5}>
            <Input
              id='occupation'
              label='Ocupación'
              placeholder='Ocupación'
              value={formData.occupation}
              error={errors.occupation}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={5} xxl={5}>
            <Selector
              id='gender'
              label='Género'
              placeholder='Género'
              value={formData.gender}
              error={errors.gender}
              onChange={(value) => handleChangeFormSelector('gender', value)}
              options={GENDER_OPTIONS}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={5} xxl={5}>
            <Selector
              id='civilStatus'
              label='Estado civil'
              placeholder='Estado civil'
              value={formData.civilStatus}
              error={errors.civilStatus}
              onChange={(value) =>
                handleChangeFormSelector('civilStatus', value)
              }
              options={CIVIL_STATUS_OPTIONS}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={9}>
            <Input
              id='address'
              label='Dirección'
              placeholder='Dirección'
              value={formData.address}
              error={errors.address}
              onChange={handleChangeFormInput}
            />
          </Col>
          <Col xs={24} sm={24} md={5}>
            <Button htmlType='submit'>Crear</Button>
          </Col>
        </Row>
      </form>
    </>
  )
}

export default CreatePatient
