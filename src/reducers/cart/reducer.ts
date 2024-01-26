import { Action, ActionTypes } from './actions'

export interface Item {
  id: number
  amount: number
}

export interface CartState {
  cart: Item[]
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const isItemAlreadyAdded = state.cart.find(
        (item) => item.id === action.payload.item.id,
      )

      return {
        ...state,
        cart:
          state.cart.length && isItemAlreadyAdded
            ? state.cart.map((item) => {
                return item.id === isItemAlreadyAdded.id
                  ? {
                      ...item,
                      amount: item.amount + action.payload.item.amount,
                    }
                  : item
              })
            : [...state.cart, action.payload.item],
      }
      break
    }
    case ActionTypes.DECREASE_CART_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.itemId
            ? {
                ...item,
                amount: item.amount > 1 ? item.amount - 1 : item.amount,
              }
            : item
        }),
      }
      break
    }
    case ActionTypes.INCREASE_CART_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.itemId
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        }),
      }
      break
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.itemId
        }),
      }
      break
    }
    default: {
      return state
      break
    }
  }
}
