import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer, Viewport } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Viewport>
        <Outlet />
      </Viewport>
    </LayoutContainer>
  )
}
