import styled from 'styled-components'
import { theme } from 'theme'

interface ContainerProps {
  height: number
}

interface ProgressLayerProps {
  secondary?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: ${theme.progress.light};
  overflow: hidden;
`

export const ProgressLayer = styled.span<ProgressLayerProps>`
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: transform 0.2s linear 0s;
  transform-origin: left center;
  background-color: ${theme.progress.main};
  width: auto;
  animation: 2.1s
    ${(props) =>
      props.secondary
        ? 'cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s'
        : 'cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s'}
    infinite normal none
    ${(props) =>
      props.secondary ? 'progress-animation-2' : 'progress-animation-1'};

  @keyframes progress-animation-1 {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @keyframes progress-animation-2 {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }
`
