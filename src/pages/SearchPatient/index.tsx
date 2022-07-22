import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { message, Table, Card } from 'antd'
import dayjs from 'dayjs'

import { Filters } from './components'
import { StyledTitle } from 'components'
import { axiosInstance, getCancelSource, FETCH_LIMIT } from 'utils'

const columns: ColumnsType<DtoPatient> = [
  {
    title: 'ID',
    key: 'id',
    render: (value: DtoPatient) => (
      <Link to={`/patient/${value.id}`}>{value.id}</Link>
    ),
  },
  {
    title: 'Nombres',
    dataIndex: 'names',
    key: 'names',
  },
  {
    title: 'Apellidos',
    dataIndex: 'lastNames',
    key: 'lastNames',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Fecha de creación',
    key: 'createdAt',
    render: (value: DtoPatient) =>
      dayjs(value.createdAt).format('HH:mm - DD/MM/YYYY'),
  },
]

const ListPatients = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DtoGetPatientsResponse>()
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState<DtoGetPatientsRequest>({})

  const handleChangePage = (page: number) => setPage(page)
  const validateFilters = (
    filters?: DtoGetPatientsRequest
  ): {
    error?: string
    filters?: DtoGetPatientsRequest
  } => {
    // ! Without filters
    if (!filters)
      return {
        filters,
      }

    const { createdAt, ...rest } = filters
    const response: DtoGetPatientsRequest = {
      ...rest,
    }
    if (
      createdAt &&
      createdAt.startDate &&
      createdAt.endDate &&
      createdAt.startDate.length !== 0 &&
      createdAt.endDate.length !== 0
    )
      response.createdAt = createdAt

    return {
      filters: response,
    }
  }

  const fetchData = useCallback(
    async (source: CancelTokenSource, _filters?: DtoGetPatientsRequest) => {
      try {
        setLoading(true)

        const { error, filters } = validateFilters(_filters)

        if (error) return message.error(error)

        const { data } = await axiosInstance.post<
          APIResponse<DtoGetPatientsResponse>
        >(
          '/patients',
          {
            limit: FETCH_LIMIT,
            skip: page - 1,
            ...filters,
          },
          {
            cancelToken: source.token,
          }
        )

        setData(data.message)
        let messageText = 'Los pacientes se cargaron correctamente'
        if (data.message.rows.length === 0)
          messageText = 'No se encontró pacientes'
        message.success(messageText)
      } catch (error) {
        console.error(error)
        message.error('No se pudo cargar los pacientes')
      } finally {
        setLoading(false)
      }
    },
    [page]
  )

  const handleChangeFormInput: ChangeFunction = (event) => {
    const { name, value } = event.target

    setFilters((filters) => ({
      ...filters,
      [name]: value,
    }))
  }

  const handleChangeFormDates: ChangeDates = (_, dates) =>
    setFilters((filters) => ({
      ...filters,
      createdAt: {
        startDate: dates[0],
        endDate: dates[1],
      },
    }))

  const filterData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const source = getCancelSource()
    fetchData(source, filters)
  }

  useEffect(() => {
    const source = getCancelSource()
    fetchData(source)

    return () => source.cancel()
  }, [fetchData])

  return (
    <>
      <StyledTitle level={3}>Buscar paciente</StyledTitle>
      <Card style={{ marginTop: 16, marginBottom: 16 }}>
        <Filters
          filters={filters}
          filterData={filterData}
          onChangeInput={handleChangeFormInput}
          onChangeDates={handleChangeFormDates}
        />
      </Card>
      <Table
        bordered
        rowKey='id'
        columns={columns}
        loading={loading}
        dataSource={data ? data.rows : []}
        scroll={{
          x: true,
        }}
        pagination={{
          pageSize: FETCH_LIMIT,
          current: page,
          onChange: handleChangePage,
          ...(data && { total: data.count }),
        }}
      />
    </>
  )
}

export default ListPatients
