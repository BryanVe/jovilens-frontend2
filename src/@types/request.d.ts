type CancelTokenSource = import('axios').CancelTokenSource

interface APIResponse<T> {
  error: boolean
  message: T
}

interface DtoGetPatientsRequest {
  id?: string
  names?: string
  lastNames?: string
  phone?: string
  createdAt?: {
    startDate: string
    endDate: string
  }
}

interface DtoGetPatientsResponse {
  count: number
  rows: DtoPatient[]
}
