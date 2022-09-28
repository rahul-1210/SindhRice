import { items } from "./itemApi";

export const initialState = {
  basket: [],
  items: items,
};

export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'DELETE_FROM_BASKET':
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product ${action.id} as its not in basket`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };

    case 'FILTER_ITEMS':
      if (action.category === 'all') {
        return {
          ...state,
          items: items,
        };
      } else {
        const result = items.filter(
          (item) => item.category === action.category
        );

        return {
          ...state,
          items: result,
        };
      }

    default:
      return state;
  }
};

export default reducer;