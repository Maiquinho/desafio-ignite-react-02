import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'

import { Container } from '../../components/Container'
import {
  AddressFormBox,
  CheckoutButton,
  CheckoutFormBox,
  CheckoutOrderFieldset,
  CityField,
  ComplementField,
  DistrictField,
  FieldsWrapper,
  FillOrderFildset,
  FormWrapper,
  Heading,
  NumberField,
  PaymentButton,
  PaymentFormBox,
  PaymentOptions,
  StateField,
  StreetField,
  ZipCodeField,
  PaymentCheckout,
} from './styles'

import { useTheme } from 'styled-components'
import { useCheckout } from '../../hooks/useCheckout'

import { priceFormatter } from '../../utils/formatter'
import { CheckoutCard } from './components/CheckoutCard'

export function Checkout() {
  const theme = useTheme()

  const { itemsOnCart, totalPrice, deliveryTax } = useCheckout()

  return (
    <main>
      <Container>
        <FormWrapper>
          <FillOrderFildset>
            <legend>Complete seu pedido</legend>
            <AddressFormBox>
              <Heading>
                <MapPin size={22} color={theme['yellow-dark']} />
                <section>
                  <span>Endereço de Entrega</span>
                  <small>
                    Informe o endereço onde deseja receber seu pedido
                  </small>
                </section>
              </Heading>

              <FieldsWrapper>
                <ZipCodeField type="text" placeholder="CEP" />
                <StreetField type="text" placeholder="Rua" />
                <NumberField type="text" placeholder="Número" />
                <ComplementField>
                  <input
                    id="complement"
                    type="text"
                    placeholder="Complemento"
                  />
                  <label htmlFor="complement">Opcional</label>
                </ComplementField>
                <DistrictField type="text" placeholder="Bairro" />
                <CityField type="text" placeholder="Cidade" />
                <StateField type="text" placeholder="UF" />
              </FieldsWrapper>
            </AddressFormBox>
            <PaymentFormBox>
              <Heading>
                <CurrencyDollar size={22} color={theme.purple} />
                <section>
                  <span>Pagamento</span>
                  <small>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </small>
                </section>
              </Heading>
              <PaymentOptions>
                <PaymentButton>
                  <input
                    type="radio"
                    name="payment-type"
                    id="credit-card-payment"
                    value="Cartão de Crédito"
                  />
                  <label htmlFor="credit-card-payment">
                    <CreditCard size={16} color={theme.purple} />
                    <span>Cartão de Crédito</span>
                  </label>
                </PaymentButton>
                <PaymentButton>
                  <input
                    type="radio"
                    name="payment-type"
                    id="debit-card-payment"
                    value="Cartão de Débito"
                  />
                  <label htmlFor="debit-card-payment">
                    <Bank size={16} color={theme.purple} />
                    <span>Cartão de Débito</span>
                  </label>
                </PaymentButton>
                <PaymentButton>
                  <input
                    type="radio"
                    name="payment-type"
                    id="money-payment"
                    value="Dinheiro"
                  />
                  <label htmlFor="money-payment">
                    <Money size={16} color={theme.purple} />
                    <span>Dinheiro</span>
                  </label>
                </PaymentButton>
              </PaymentOptions>
            </PaymentFormBox>
          </FillOrderFildset>
          <CheckoutOrderFieldset>
            <legend>Cafés selecionados</legend>
            <CheckoutFormBox>
              {itemsOnCart.length > 0 &&
                itemsOnCart.map(
                  ({ id, amount, price, description, image, name, tags }) => (
                    <CheckoutCard
                      key={id}
                      coffee={{
                        id,
                        amount,
                        price,
                        description: description!,
                        image: image!,
                        name: name!,
                        tags: tags!,
                      }}
                    />
                  ),
                )}
              <PaymentCheckout>
                <section>
                  <small>Total de itens</small>
                  <span>{priceFormatter.format(totalPrice)}</span>
                </section>
                <section>
                  <small>Entrega</small>
                  <span>{priceFormatter.format(deliveryTax)}</span>
                </section>
                <section>
                  <strong>Total</strong>
                  <strong>
                    {priceFormatter.format(deliveryTax + totalPrice)}
                  </strong>
                </section>
              </PaymentCheckout>
              <CheckoutButton>Confirmar Pedido</CheckoutButton>
            </CheckoutFormBox>
          </CheckoutOrderFieldset>
        </FormWrapper>
      </Container>
    </main>
  )
}
