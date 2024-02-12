import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Item, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  checkoutAction,
  decreaseCartAmountAction,
  increaseCartAmountAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'
import { OrderForm } from '../pages/Checkout'
import { useNavigate } from 'react-router-dom'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItemToCart: (item: Item) => void
  decreaseCartAmount: (item: Item) => void
  increaseCartAmount: (item: Item) => void
  removeItemFromCart: (itemId: Item['id']) => void
  checkout: (order: OrderForm) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const { cart, orders } = cartState

  const navigate = useNavigate()

  function addItemToCart(item: Item) {
    dispatch(addItemToCartAction(item))
  }

  function decreaseCartAmount(item: Item) {
    dispatch(decreaseCartAmountAction(item))
  }

  function increaseCartAmount(item: Item) {
    dispatch(increaseCartAmountAction(item))
  }

  function removeItemFromCart(itemId: Item['id']) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function checkout(order: OrderForm) {
    dispatch(checkoutAction(order, navigate))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItemToCart,
        decreaseCartAmount,
        increaseCartAmount,
        removeItemFromCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
