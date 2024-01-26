import { useCart } from './useCart'

import { coffees } from '../../data.json'

export function useCheckout() {
  const { cart } = useCart()

  const itemsOnCart = cart.map((cartItem) => {
    const coffeeData = coffees.find((coffee) => coffee.id === cartItem.id)

    return {
      ...coffeeData,
      amount: cartItem.amount,
    }
  })

  const { decreaseCartAmount, increaseCartAmount, removeItemFromCart } =
    useCart()

  function handleDecreaseCartAmount(id: number) {
    decreaseCartAmount(id)
  }
  function handleIncreaseCartAmount(id: number) {
    increaseCartAmount(id)
  }

  function handleRemoveItemFromCart(id: number) {
    removeItemFromCart(id)
  }

  return {
    itemsOnCart,
    handleDecreaseCartAmount,
    handleIncreaseCartAmount,
    handleRemoveItemFromCart,
  }
}
