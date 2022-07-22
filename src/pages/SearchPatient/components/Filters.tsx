import { FC } from 'react'
import { Row, Col, Button } from 'antd'
import { DatePicker, Input } from 'components'

interface FiltersProps {
  filters: DtoGetPatientsRequest
  filterData: SubmitFunction
  onChangeInput: ChangeFunction
  onChangeDates: ChangeDates
}

const Filters: FC<FiltersProps> = (props) => {
  const { filters, filterData, onChangeInput, onChangeDates } = props

  return (
    <form onSubmit={filterData}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={9} lg={9} xl={6} xxl={6}>
          <Input
            id='id'
            placeholder='ID'
            value={filters.id}
            onChange={onChangeInput}
          />
        </Col>
        <Col xs={24} sm={12} md={15} lg={15} xl={9} xxl={9}>
          <Input
            id='names'
            placeholder='Nombres'
            value={filters.names}
            onChange={onChangeInput}
          />
        </Col>
        <Col xs={24} sm={12} md={15} lg={15} xl={9} xxl={9}>
          <Input
            id='lastNames'
            placeholder='Apellidos'
            value={filters.lastNames}
            onChange={onChangeInput}
          />
        </Col>
        <Col xs={24} sm={12} md={9} lg={9} xl={5} xxl={5}>
          <Input
            id='phone'
            placeholder='Teléfono'
            value={filters.phone}
            onChange={onChangeInput}
          />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={15} xxl={15}>
          <DatePicker onChange={onChangeDates} />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={4} xxl={4}>
          <Button
            htmlType='submit'
            type='primary'
            size='large'
            style={{
              width: '100%',
            }}
          >
            Buscar
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default Filters
