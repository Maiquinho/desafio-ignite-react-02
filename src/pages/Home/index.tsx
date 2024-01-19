import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Container } from '../../components/Container'
import { Card } from '../../components/Card'
import {
  IconBox,
  DeliveryInfo,
  DeliveryInfoItem,
  Intro,
  IntroContent,
  IntroHeading,
  CoffeeList,
  CoffeeGrid,
} from './styles'

import { coffees } from '../../../data.json'

export function Home() {
  return (
    <main>
      <Intro>
        <Container>
          <IntroContent>
            <IntroHeading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>

              <DeliveryInfo>
                <DeliveryInfoItem>
                  <IconBox background="yellow-dark">
                    <ShoppingCart size={16} weight="fill" />
                  </IconBox>
                  <span>Compra simples e segura</span>
                </DeliveryInfoItem>
                <DeliveryInfoItem>
                  <IconBox background="base-text">
                    <Package size={16} weight="fill" />
                  </IconBox>
                  <span>Embalagem mantém o café intacto</span>
                </DeliveryInfoItem>
                <DeliveryInfoItem>
                  <IconBox background="yellow">
                    <Timer size={16} weight="fill" />
                  </IconBox>
                  <span>Entrega rápida e rastreada</span>
                </DeliveryInfoItem>
                <DeliveryInfoItem>
                  <IconBox background="purple">
                    <Coffee size={16} weight="fill" />
                  </IconBox>
                  <span>O café chega fresquinho até você</span>
                </DeliveryInfoItem>
              </DeliveryInfo>
            </IntroHeading>
            <section>
              <img
                src="/intro-coffee.png"
                alt="Imagem de um copo de café do banner principal"
              />
            </section>
          </IntroContent>
        </Container>
      </Intro>

      <CoffeeList>
        <Container>
          <h2>Nossos Cafés</h2>

          <CoffeeGrid>
            {coffees.map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
          </CoffeeGrid>
        </Container>
      </CoffeeList>
    </main>
  )
}
