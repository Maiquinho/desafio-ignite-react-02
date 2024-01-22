import { ReactNode, createContext } from 'react'

interface CartContextType {
  cart: any
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const cart = 0

  return (
    <CartContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
