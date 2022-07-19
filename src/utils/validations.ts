export const patientValidations: FormValidations = {
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
      rule: (value) => 0 < parseInt(value) && parseInt(value) < 100,
      message: 'Debe estar entre 0 y 100',
    },
  ],
  address: [
    {
      rule: (value) => value.length !== 0,
      message: 'Este campo es requerido',
    },
  ],
}
