import { NavigateFunction } from 'react-router-dom'
import { OrderForm } from '../../pages/Checkout'
import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DECREASE_CART_AMOUNT = 'DECREASE_CART_AMOUNT',
  INCREASE_CART_AMOUNT = 'INCREASE_CART_AMOUNT',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CHECKOUT = 'CHECKOUT',
}

export type Action =
  | {
      type: ActionTypes.ADD_ITEM_TO_CART
      payload: {
        item: Item
      }
    }
  | {
      type: ActionTypes.DECREASE_CART_AMOUNT | ActionTypes.INCREASE_CART_AMOUNT
      payload: {
        item: Item
      }
    }
  | {
      type: ActionTypes.REMOVE_ITEM_FROM_CART
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT
      payload: {
        order: OrderForm
        callback: NavigateFunction
      }
    }

export function addItemToCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  } satisfies Action
}

export function decreaseCartAmountAction(item: Item) {
  return {
    type: ActionTypes.DECREASE_CART_AMOUNT,
    payload: {
      item,
    },
  } satisfies Action
}

export function increaseCartAmountAction(item: Item) {
  return {
    type: ActionTypes.INCREASE_CART_AMOUNT,
    payload: {
      item,
    },
  } satisfies Action
}

export function removeItemFromCartAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  } satisfies Action
}

export function checkoutAction(order: OrderForm, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback,
    },
  } satisfies Action
}
