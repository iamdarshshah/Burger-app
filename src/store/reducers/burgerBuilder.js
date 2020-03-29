import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGEDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  const updateIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updateIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGEDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updateIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngs = updateObject(state.ingredients, updateIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGEDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
    building: false
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
