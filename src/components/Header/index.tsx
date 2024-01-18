import { NavLink } from 'react-router-dom'
import { Container } from '../Container'
import { Cart, HeaderWrapper, Location, Navigation } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <Container>
      <HeaderWrapper>
        <NavLink to="/">
          <img src="/logo.svg" alt="Logo Coffee Delivery" />
        </NavLink>

        <Navigation>
          <ul>
            <li>
              <Location>
                <MapPin size={22} weight="fill" />
                <span>Porto Alegre, RS</span>
              </Location>
            </li>
            <li>
              <NavLink to="/cart">
                <Cart>
                  <ShoppingCart size={22} weight="fill" />
                </Cart>
              </NavLink>
            </li>
          </ul>
        </Navigation>
      </HeaderWrapper>
    </Container>
  )
}
