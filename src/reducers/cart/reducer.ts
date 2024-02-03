import { Action, ActionTypes } from './actions'

export interface Item {
  id: number
  amount: number
  price: number
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
          state.cart.length > 0 && isItemAlreadyAdded
            ? state.cart.map((item) => {
                return item.id === isItemAlreadyAdded.id
                  ? {
                      ...item,
                      amount: item.amount + action.payload.item.amount,
                      price: item.price + action.payload.item.price,
                    }
                  : item
              })
            : [
                ...state.cart,
                {
                  ...action.payload.item,
                  price: action.payload.item.price,
                },
              ],
      }
      break
    }
    case ActionTypes.DECREASE_CART_AMOUNT: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.item.id
            ? {
                ...item,
                amount: item.amount > 1 ? item.amount - 1 : item.amount,
                price: action.payload.item.price,
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
          return item.id === action.payload.item.id
            ? {
                ...item,
                amount: item.amount + 1,
                price: action.payload.item.price,
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
