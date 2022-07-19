type Rule = (value: string) => boolean

interface Validation {
  rule: Rule
  message: string
}

interface FormValidations {
  [key: string]: Validation[]
}
