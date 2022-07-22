type SizeType = import('antd/lib/config-provider/SizeContext').SizeType
type ColumnsType<T> = import('antd/es/table').ColumnsType<T>
type ChangeDates = import('antd/lib/date-picker').RangePickerProps['onChange']
type RangeValue = import('antd/lib/date-picker').RangePickerProps['value']

interface StringToStringMap {
  [key: string]: string | undefined
}

interface Pagination {
  limit: number
  skip: number
}

interface SelectorOption {
  label: string
  value: string
}

type SubmitFunction = (event: React.FormEvent<HTMLFormElement>) => void
type ChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => void
