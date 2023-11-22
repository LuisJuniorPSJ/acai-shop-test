import { SELECT_SIZE, SizeActionTypes } from "../actions/sizeActions";

interface SizeState {
  selectedSize: string;
}

const initialState: SizeState = {
  selectedSize: "",
};

const sizeReducer = (
  state: SizeState = initialState,
  action: SizeActionTypes
): SizeState => {
  switch (action.type) {
    case SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,
      };
    default:
      return state;
  }
};

export default sizeReducer;
