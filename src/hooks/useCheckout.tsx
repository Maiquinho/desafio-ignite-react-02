import { useCart } from './useCart'

import { coffees } from '../../data.json'

export function useCheckout() {
  const { cart, checkout } = useCart()

  const itemsOnCart = cart.map((cartItem) => {
    const coffeeData = coffees.find((coffee) => coffee.id === cartItem.id)

    return {
      ...coffeeData,
      id: cartItem.id,
      amount: cartItem.amount,
      price: cartItem.price,
    }
  })

  const deliveryTax = 3.5

  const totalPrice = itemsOnCart.reduce((acc, coffee) => acc + coffee.price, 0)

  return {
    itemsOnCart,
    deliveryTax,
    totalPrice,
    checkout,
  }
}
