import { produce } from 'immer'
import { Action, ActionTypes } from './actions'
import { OrderForm } from '../../pages/Checkout'

export interface Item {
  id: number
  amount: number
  price: number
}

export interface Order extends OrderForm {
  id: number
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const isItemAlreadyAdded = state.cart.find(
        (item) => item.id === action.payload.item.id,
      )

      const isItemAlreadyAddedIndex = state.cart.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      const itemsOnCart = state.cart.length

      if (isItemAlreadyAddedIndex < 0) {
        return produce(state, (draft) => {
          draft.cart.push(action.payload.item)
        })
      }

      return produce(state, (draft) => {
        if (itemsOnCart > 0 && isItemAlreadyAdded) {
          draft.cart[isItemAlreadyAddedIndex].amount +=
            action.payload.item.amount
          draft.cart[isItemAlreadyAddedIndex].price += action.payload.item.price
        }
      })

      break
    }
    case ActionTypes.DECREASE_CART_AMOUNT: {
      const isItemAlreadyAddedIndex = state.cart.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (isItemAlreadyAddedIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        const currentItem = draft.cart[isItemAlreadyAddedIndex]
        const currentItemAmount = currentItem.amount

        currentItem.amount =
          currentItemAmount > 1 ? currentItemAmount - 1 : currentItemAmount
        currentItem.price = action.payload.item.price
      })
      break
    }
    case ActionTypes.INCREASE_CART_AMOUNT: {
      const isItemAlreadyAddedIndex = state.cart.findIndex(
        (item) => item.id === action.payload.item.id,
      )

      if (isItemAlreadyAddedIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        const currentItem = draft.cart[isItemAlreadyAddedIndex]
        const currentItemAmount = currentItem.amount

        currentItem.amount = currentItemAmount + 1
        currentItem.price = action.payload.item.price
      })
      break
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter((item) => {
          return item.id !== action.payload.itemId
        })
      })
      break
    }
    case ActionTypes.CHECKOUT: {
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }

        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/orders/${newOrder.id}/success`)
      })
      break
    }
    default: {
      return state
      break
    }
  }
}
