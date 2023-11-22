export const SELECT_SIZE = "SELECT_SIZE";

export interface SelectSizeAction {
  type: typeof SELECT_SIZE;
  payload: string;
}

export const selectSize = (size: string): SelectSizeAction => {
  return {
    type: SELECT_SIZE,
    payload: size,
  };
};

export type SizeActionTypes = SelectSizeAction;
