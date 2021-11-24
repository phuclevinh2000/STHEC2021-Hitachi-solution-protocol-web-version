import {
  CARGOTERY_LIST_FAIL,
  CARGOTERY_LIST_REQUEST,
  CARGOTERY_LIST_SUCCESS,
} from '../../types/cargoteryConstant';

export const cargoteryReducer = (state = { cargoterys: [] }, action: any) => {
  switch (action.type) {
    case CARGOTERY_LIST_REQUEST:
      return { loading: true, cargoterys: [] };
    case CARGOTERY_LIST_SUCCESS:
      return { loading: false, cargoterys: action.payload };
    case CARGOTERY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
