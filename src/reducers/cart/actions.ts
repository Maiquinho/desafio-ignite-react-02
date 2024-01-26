import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  DECREASE_CART_AMOUNT = 'DECREASE_CART_AMOUNT',
  INCREASE_CART_AMOUNT = 'INCREASE_CART_AMOUNT',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export type Action =
  | {
      type: ActionTypes.ADD_ITEM_TO_CART
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREASE_CART_AMOUNT
        | ActionTypes.INCREASE_CART_AMOUNT
        | ActionTypes.REMOVE_ITEM_FROM_CART
      payload: {
        itemId: Item['id']
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

export function decreaseCartAmountAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREASE_CART_AMOUNT,
    payload: {
      itemId,
    },
  } satisfies Action
}

export function increaseCartAmountAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREASE_CART_AMOUNT,
    payload: {
      itemId,
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
