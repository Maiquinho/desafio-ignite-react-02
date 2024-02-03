import { NavLink } from 'react-router-dom'
import { Container } from '../Container'
import { Cart, Counter, HeaderWrapper, Location, Navigation } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  const cartAmount = cart.length
  const cartLinkStyle: React.CSSProperties = {
    pointerEvents: cartAmount < 1 ? 'none' : 'inherit',
  }

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
              <NavLink to="/checkout" style={cartLinkStyle}>
                <Cart>
                  <ShoppingCart size={22} weight="fill" />
                  {cartAmount > 0 && <Counter>{cartAmount}</Counter>}
                </Cart>
              </NavLink>
            </li>
          </ul>
        </Navigation>
      </HeaderWrapper>
    </Container>
  )
}
