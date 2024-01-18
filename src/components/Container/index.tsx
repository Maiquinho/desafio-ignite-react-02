import { ReactNode } from 'react'
import { ContainerWrapper } from './styles'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <ContainerWrapper>{children}</ContainerWrapper>
}
