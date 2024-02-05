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
  ErrorMessageField,
  ZipCodeFieldWrapper,
  StreetFieldWrapper,
  NumberFieldWrapper,
  ComplementFieldWrapper,
  DistrictFieldWrapper,
  CityFieldWrapper,
  StateFieldWrapper,
  PaymentOptionButtons,
} from './styles'

import { useTheme } from 'styled-components'
import { useCheckout } from '../../hooks/useCheckout'

import { priceFormatter } from '../../utils/formatter'
import { CheckoutCard } from './components/CheckoutCard'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  zipcode: z
    .string()
    .min(9, { message: 'Digite um formato válido de CEP.' })
    .max(9, { message: 'Digite um formato válido de CEP.' }),
  street: z.string().min(1, { message: 'Digite um nome válido de rua.' }),
  number: z
    .string()
    .min(1, { message: 'Digite um número válido de endereço.' }),
  complement: z.string(),
  district: z.string().min(1, { message: 'Digite um nome válido de bairro.' }),
  city: z.string().min(1, { message: 'Digite um nome válido de cidade.' }),
  state: z
    .string()
    .min(2, { message: 'Digite o estado no formato UF.' })
    .max(2, { message: 'Digite o estado no formato UF.' }),
  paymentMethod: z
    .string()
    .min(1, { message: 'Selecione uma opção de pagamento.' }),
})

type FormType = z.infer<typeof formSchema>

export function Checkout() {
  const theme = useTheme()

  const { itemsOnCart, totalPrice, deliveryTax } = useCheckout()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  })

  function onSubmit(form: FormType) {
    console.log(form)
  }

  return (
    <main>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
                <ZipCodeFieldWrapper>
                  <ZipCodeField
                    type="text"
                    placeholder="CEP"
                    $isInvalid={+!!errors.zipcode?.message}
                    {...register('zipcode')}
                  />
                  {errors.zipcode?.message && (
                    <ErrorMessageField>
                      {errors.zipcode?.message}
                    </ErrorMessageField>
                  )}
                </ZipCodeFieldWrapper>
                <StreetFieldWrapper>
                  <StreetField
                    type="text"
                    placeholder="Rua"
                    $isInvalid={+!!errors.street?.message}
                    {...register('street')}
                  />
                  {errors.street?.message && (
                    <ErrorMessageField>
                      {errors.street?.message}
                    </ErrorMessageField>
                  )}
                </StreetFieldWrapper>
                <NumberFieldWrapper>
                  <NumberField
                    type="text"
                    placeholder="Número"
                    $isInvalid={+!!errors.number?.message}
                    {...register('number')}
                  />
                  {errors.number?.message && (
                    <ErrorMessageField>
                      {errors.number?.message}
                    </ErrorMessageField>
                  )}
                </NumberFieldWrapper>
                <ComplementFieldWrapper>
                  <ComplementField $isInvalid={+!!errors.complement?.message}>
                    <input
                      id="complement"
                      type="text"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    <label htmlFor="complement">Opcional</label>
                  </ComplementField>
                  {errors.complement?.message && (
                    <ErrorMessageField>
                      {errors.complement?.message}
                    </ErrorMessageField>
                  )}
                </ComplementFieldWrapper>
                <DistrictFieldWrapper>
                  <DistrictField
                    type="text"
                    placeholder="Bairro"
                    $isInvalid={+!!errors.district?.message}
                    {...register('district')}
                  />
                  {errors.district?.message && (
                    <ErrorMessageField>
                      {errors.district?.message}
                    </ErrorMessageField>
                  )}
                </DistrictFieldWrapper>
                <CityFieldWrapper>
                  <CityField
                    type="text"
                    placeholder="Cidade"
                    $isInvalid={+!!errors.city?.message}
                    {...register('city')}
                  />
                  {errors.city?.message && (
                    <ErrorMessageField>
                      {errors.city?.message}
                    </ErrorMessageField>
                  )}
                </CityFieldWrapper>
                <StateFieldWrapper>
                  <StateField
                    type="text"
                    placeholder="UF"
                    $isInvalid={+!!errors.state?.message}
                    {...register('state')}
                  />
                  {errors.state?.message && (
                    <ErrorMessageField>
                      {errors.state?.message}
                    </ErrorMessageField>
                  )}
                </StateFieldWrapper>
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
                <PaymentOptionButtons>
                  <PaymentButton>
                    <input
                      type="radio"
                      id="credit-card-payment"
                      value="Cartão de Crédito"
                      {...register('paymentMethod')}
                    />
                    <label htmlFor="credit-card-payment">
                      <CreditCard size={16} color={theme.purple} />
                      <span>Cartão de Crédito</span>
                    </label>
                  </PaymentButton>
                  <PaymentButton>
                    <input
                      type="radio"
                      id="debit-card-payment"
                      value="Cartão de Débito"
                      {...register('paymentMethod')}
                    />
                    <label htmlFor="debit-card-payment">
                      <Bank size={16} color={theme.purple} />
                      <span>Cartão de Débito</span>
                    </label>
                  </PaymentButton>
                  <PaymentButton>
                    <input
                      type="radio"
                      id="money-payment"
                      value="Dinheiro"
                      {...register('paymentMethod')}
                    />
                    <label htmlFor="money-payment">
                      <Money size={16} color={theme.purple} />
                      <span>Dinheiro</span>
                    </label>
                  </PaymentButton>
                </PaymentOptionButtons>
                {errors.paymentMethod?.type === 'invalid_type' && (
                  <ErrorMessageField>
                    Selecione um método de pagamento
                  </ErrorMessageField>
                )}
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
