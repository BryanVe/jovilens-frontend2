import styled from 'styled-components'
import { Typography } from 'antd'
import { theme } from 'theme'

const { Title } = Typography

export const StyledTitle = styled(Title)`
  color: ${theme.title.main} !important;
`

export const StyledContainer = styled.div`
  padding: 32px;
  height: 100%;
`
