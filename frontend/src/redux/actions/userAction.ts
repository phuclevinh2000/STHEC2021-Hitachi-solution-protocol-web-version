import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../../types/userConstant';

export const login =
  (email: string, password: string) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // post using axios
      const { data } = await axios.post(
        'api/users/login',
        { email, password },
        config
      );

      // dispatch data
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch: (arg0: { type: string }) => void) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};

export const register =
  (name: string, email: string, password: string) => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST
      })

      const config = {
        headers: {
          'Content-Type':'application/json'
        }
      }

      const {data} = await axios.post(
        '/api/users/', //check on postman or backend
        { name, email, password },
        config
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
      })

      localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error: any) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
