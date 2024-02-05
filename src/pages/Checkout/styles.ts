import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  gap: 2rem;

  margin-top: 2.5rem;
`

export const FieldsetBase = styled.fieldset`
  border: 0;

  & legend {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.9375rem;
  }
`

export const FillOrderFildset = styled(FieldsetBase)`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CheckoutOrderFieldset = styled(FieldsetBase)`
  min-width: 28rem;
`

export const FormBoxBase = styled.div`
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 6px;
`

export const AddressFormBox = styled(FormBoxBase)`
  gap: 2rem;
`

export const PaymentFormBox = styled(FormBoxBase)`
  gap: 2rem;
`

export const CheckoutFormBox = styled(FormBoxBase)`
  border-radius: 6px 44px 6px 44px;
`

export const Heading = styled.header`
  display: flex;
  gap: 0.5rem;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    & > span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    & > small {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const FieldsWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 60px;
  grid-template-areas:
    'zipcode . .'
    'street street street'
    'number complement complement'
    'district city state';

  column-gap: 0.75rem;
  row-gap: 1rem;
`

interface InputFieldBaseProps {
  $isInvalid: number
}

export const InputFieldBase = styled.input<InputFieldBaseProps>`
  background: ${(props) => props.theme['base-input']};

  padding: 0.75rem;

  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;

  border: 1px solid
    ${(props) =>
      props.$isInvalid ? props.theme['red-300'] : props.theme['base-button']};
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 0 1px
      ${(props) =>
        props.$isInvalid ? props.theme['red-300'] : props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${(props) => props.theme['base-text']};
    -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme['base-input']} inset !important;
  }
`

export const InputFieldWrapperBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ErrorMessageField = styled.small`
  color: ${(props) => props.theme['red-300']};
`

export const ZipCodeFieldWrapper = styled(InputFieldWrapperBase)`
  grid-area: zipcode;
`
export const ZipCodeField = styled(InputFieldBase)``

export const StreetFieldWrapper = styled(InputFieldWrapperBase)`
  grid-area: street;
`
export const StreetField = styled(InputFieldBase)``

export const NumberFieldWrapper = styled(InputFieldWrapperBase)`
  grid-area: number;
`
export const NumberField = styled(InputFieldBase)``

export const ComplementFieldWrapper = styled.div`
  grid-area: complement;
`

interface ComplementFieldProps {
  $isInvalid: number
}

export const ComplementField = styled.div<ComplementFieldProps>`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid
    ${(props) =>
      props.$isInvalid ? props.theme['red-300'] : props.theme['base-button']};
  border-radius: 4px;

  padding: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0 0 0 1px
      ${(props) =>
        props.$isInvalid ? props.theme['red-300'] : props.theme['yellow-dark']};

    & label {
      display: none;
    }
  }

  & input {
    background: transparent;

    border: 0;

    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: ${(props) => props.theme['base-text']};
      -webkit-box-shadow: 0 0 0 30px ${(props) => props.theme['base-input']}
        inset !important;
    }

    &:focus {
      box-shadow: none;
    }
  }

  & label {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.75rem;
    font-style: italic;
  }
`

export const DistrictFieldWrapper = styled(InputFieldWrapperBase)`
  grid-area: district;
`
export const DistrictField = styled(InputFieldBase)``
export const CityFieldWrapper = styled(InputFieldWrapperBase)`
  grid-area: city;
`
export const CityField = styled(InputFieldBase)``
export const StateFieldWrapper = styled(InputFieldWrapperBase)`
  grid-area: state;
`
export const StateField = styled(InputFieldBase)``

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PaymentOptionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentButton = styled.div`
  & label {
    min-width: 11.166875rem;

    background: ${(props) => props.theme['base-button']};

    border: 1px solid transparent;
    border-radius: 6px;

    padding: 1rem;

    transition: all 0.2s ease;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > span {
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }

  & input {
    display: none;

    &:checked ~ label {
      background: ${(props) => props.theme['purple-light']};
      border-color: ${(props) => props.theme.purple};
    }
  }
`

export const CheckoutButton = styled.button`
  background: ${(props) => props.theme.yellow};

  border: 0;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.6;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};

  padding: 0.75rem;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-bottom: 1.5rem;

  & section {
    display: flex;
    justify-content: space-between;

    & > small {
      font-size: 0.875rem;
    }

    & > small,
    & > span {
      color: ${(props) => props.theme['base-text']};
    }

    & > strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
