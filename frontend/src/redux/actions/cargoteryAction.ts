import {
  CARGOTERY_LIST_FAIL,
  CARGOTERY_LIST_REQUEST,
  CARGOTERY_LIST_SUCCESS,
} from '../../types/cargoteryConstant';
import axios from 'axios';

export const listCargotery = () => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  try {
    dispatch({ type: CARGOTERY_LIST_REQUEST });

    const { data } = await axios.get('api/cargotery');

    dispatch({
      type: CARGOTERY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: CARGOTERY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
