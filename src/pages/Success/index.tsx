import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Container } from '../../components/Container'
import {
  IconBox,
  OrderInfo,
  OrderInfoItem,
  SuccessContent,
  SuccessHeading,
} from './styles'

export function Success() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  <br />
                  Farrapos - Porto Alegre, RS
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
                  <strong>Cartão de Crédito</strong>
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
