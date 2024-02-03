import { useState } from 'react'

import { Item } from '../reducers/cart/reducer'
import { useCart } from './useCart'

import { CheckoutCardProps } from '../pages/Checkout/components/CheckoutCard'

import { coffees } from '../../data.json'

export function useCheckoutCard<T extends CheckoutCardProps['coffee']>(
  coffee: T,
) {
  const { decreaseCartAmount, increaseCartAmount, removeItemFromCart } =
    useCart()

  const [cartAmount, setCartAmount] = useState(coffee.amount)

  const coffeePrice = coffees.find((item) => item.id === coffee.id)!.price

  const initialItemDataToHandle = {
    id: coffee.id,
    amount: cartAmount,
    price: coffeePrice,
  }

  function handleDecreaseCartAmount(item: Item) {
    const currentAmount = item.amount > 1 ? item.amount - 1 : item.amount

    const updateItemWithDecreasedAmount = {
      ...item,
      id: item.id,
      price: item.price * currentAmount,
      amount: item.amount,
    }

    if (cartAmount > 1) {
      setCartAmount((prevState) => prevState - 1)
    }
    decreaseCartAmount(updateItemWithDecreasedAmount)
  }
  function handleIncreaseCartAmount(item: Item) {
    const currentAmount = item.amount + 1

    const updateItemWithInccreasedAmount = {
      ...item,
      id: item.id,
      price: item.price * currentAmount,
      amount: item.amount,
    }

    setCartAmount((prevState) => prevState + 1)
    increaseCartAmount(updateItemWithInccreasedAmount)
  }

  function handleRemoveItemFromCart(id: number) {
    removeItemFromCart(id)
  }

  return {
    cartAmount,
    initialItemDataToHandle,
    handleDecreaseCartAmount,
    handleIncreaseCartAmount,
    handleRemoveItemFromCart,
  }
}
