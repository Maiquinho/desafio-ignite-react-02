import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { priceFormatter } from '../../../../utils/formatter'
import {
  CheckoutCardWrapper,
  CheckoutInfo,
  CardDetails,
  Actions,
  CartChangeAmount,
  DeleteButton,
  Separator,
} from './styles'

import { useTheme } from 'styled-components'
import { useCheckoutCard } from '../../../../hooks/useCheckoutCard'

export interface CheckoutCardProps {
  coffee: {
    id: number
    image: string
    tags: string[]
    name: string
    description: string
    price: number
    amount: number
  }
}

export function CheckoutCard({ coffee }: CheckoutCardProps) {
  const theme = useTheme()

  const {
    cartAmount,
    initialItemDataToHandle,
    handleDecreaseCartAmount,
    handleIncreaseCartAmount,
    handleRemoveItemFromCart,
  } = useCheckoutCard(coffee)

  return (
    <>
      <CheckoutCardWrapper>
        <CheckoutInfo>
          <img src={coffee.image} alt="" />
          <CardDetails>
            <span>{coffee.name}</span>
            <Actions>
              <CartChangeAmount>
                <button
                  type="button"
                  onClick={() =>
                    handleDecreaseCartAmount(initialItemDataToHandle)
                  }
                >
                  <Minus size={14} weight="bold" />
                </button>
                <span>{cartAmount}</span>
                <button
                  type="button"
                  onClick={() =>
                    handleIncreaseCartAmount(initialItemDataToHandle)
                  }
                >
                  <Plus size={14} weight="bold" />
                </button>
              </CartChangeAmount>
              <DeleteButton
                type="button"
                onClick={() => handleRemoveItemFromCart(coffee.id)}
              >
                <Trash size={16} color={theme.purple} />
                Remover
              </DeleteButton>
            </Actions>
          </CardDetails>
        </CheckoutInfo>

        <strong>{priceFormatter.format(coffee.price)}</strong>
      </CheckoutCardWrapper>
      <Separator />
    </>
  )
}
