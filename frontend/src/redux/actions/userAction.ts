import axios from 'axios';
import {
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
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


  export const getUserDetails =
  (id: string) => async (dispatch: (arg0: { type: string; payload?: any; }) => void, getState: () => { userLogin: { userInfo: any; }; }) => {
    try {
      dispatch({
        type: USER_DETAIL_REQUEST
      })

      const { userLogin : { userInfo } } = getState();  //access to userInfo in userLogin

      const config = {
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        }
      }

      const {data} = await axios.get(
        `/api/users/${id}`, //check on postman or backend
        config
      )

      dispatch({
        type: USER_DETAIL_SUCCESS,
        payload: data
      })

    } catch (error: any) {
      dispatch({
        type: USER_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const updateUserProfile =
  (user: any) => async (dispatch: (arg0: { type: string; payload?: any; }) => void, getState: () => { userLogin: { userInfo: any; }; }) => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST
      })

      const { userLogin : { userInfo } } = getState();  //access to userInfo in userLogin

      const config = {
        headers: {
          'Content-Type':'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        }
      }

      const {data} = await axios.put(
        `/api/users/profile`, //check on postman or backend
        user,
        config
      )

      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data
      })

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error: any) {
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
