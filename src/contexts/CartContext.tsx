import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Item, cartReducer } from '../reducers/cart/reducer'
import {
  addItemToCartAction,
  decreaseCartAmountAction,
  increaseCartAmountAction,
  removeItemFromCartAction,
} from '../reducers/cart/actions'

interface CartContextType {
  cart: Item[]
  addItemToCart: (item: Item) => void
  decreaseCartAmount: (item: Item) => void
  increaseCartAmount: (item: Item) => void
  removeItemFromCart: (itemId: Item['id']) => void
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

  const { cart } = cartState

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        decreaseCartAmount,
        increaseCartAmount,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
