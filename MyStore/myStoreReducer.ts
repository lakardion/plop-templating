import { MyStoreAction } from "./MyStoreActionTypes";

export interface MyStoreState {}

export const myStoreInitialState: MyStoreState = {};

const myStoreReducer = (state: MyStoreState, action: MyStoreAction) => {
  switch (action.type) {
    // --Append--
    default:
      return state;
  }
};

export default myStoreReducer;
