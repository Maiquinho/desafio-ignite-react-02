import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container } from '../../components/Container'
import {
  IconBox,
  OrderInfo,
  OrderInfoItem,
  SuccessContent,
  SuccessHeading,
} from './styles'

import { useCart } from '../../hooks/useCart'
import { useLocation } from 'react-router-dom'

export function Success() {
  const { orders } = useCart()

  const orderId = parseInt(useLocation().pathname.split('/')[2])
  const order = orders.find((item) => item.id === orderId)

  return (
    <main>
      <Container>
        <SuccessHeading>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessHeading>

        <SuccessContent>
          <OrderInfo>
            <section>
              <OrderInfoItem>
                <IconBox background="purple">
                  <MapPin size={16} weight="fill" />
                </IconBox>
                <span>
                  Entrega em{' '}
                  <strong>{`${order?.street}, ${order?.number}`}</strong>
                  <br />
                  {`${order?.district} - ${order?.city}, ${order?.state}`}
                </span>
              </OrderInfoItem>
              <OrderInfoItem>
                <IconBox background="yellow">
                  <Timer size={16} weight="fill" />
                </IconBox>
                <span>
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </span>
              </OrderInfoItem>
              <OrderInfoItem>
                <IconBox background="yellow-dark">
                  <CurrencyDollar size={16} />
                </IconBox>
                <span>
                  Pagamento na entrega
                  <br />
                  <strong>{order?.paymentMethod}</strong>
                </span>
              </OrderInfoItem>
            </section>
          </OrderInfo>
          <img src="/success-order-illustration.png" alt="" />
        </SuccessContent>
      </Container>
    </main>
  )
}
