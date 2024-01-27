import { useState } from 'react'

import { priceFormatter } from '../utils/formatter'
import { useCart } from './useCart'

import { CardProps } from '../components/Card'

export function useProduct<T extends CardProps['coffee']>(coffee: T) {
  const { addItemToCart } = useCart()

  const priceFormattedWithCurrency = priceFormatter
    .format(coffee.price)
    .split(' ')
  const currency = priceFormattedWithCurrency[0]
  const price = priceFormattedWithCurrency[1]

  const [cartAmount, setCartAmount] = useState(1)

  function handleDecreaseCartAmount() {
    if (cartAmount > 1) {
      setCartAmount((prevState) => prevState - 1)
    }
  }
  function handleIncreaseCartAmount() {
    setCartAmount((prevState) => prevState + 1)
  }

  function handleAddCart() {
    const id = coffee.id
    const amount = cartAmount
    const price = coffee.price * amount

    addItemToCart({ id, amount, price })
    setCartAmount(1)
  }

  return {
    currency,
    price,
    cartAmount,
    handleDecreaseCartAmount,
    handleIncreaseCartAmount,
    handleAddCart,
  }
}
