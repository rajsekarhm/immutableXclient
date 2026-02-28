// Action Types
export const USER_SET_LOADING = 'user/setLoading';
export const USER_SET_DATA = 'user/setData';
export const USER_SET_ERROR = 'user/setError';
export const USER_RESET = 'user/reset';

// State Interface
interface UserState {
  user: any;
  assets: any[];
  tokens: any[];
  loading: boolean;
  status: string;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  assets: [],
  tokens: [],
  loading: false,
  status: 'idle',
  error: null,
};

// Reducer
export function userReducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case USER_SET_LOADING:
      return { ...state, loading: true, status: 'idle', error: null };
    case USER_SET_DATA:
      return {
        ...state,
        loading: false,
        status: 'succeeded',
        user: action.payload?.user ?? action.payload,
        assets: action.payload?.assets ?? state.assets,
        tokens: action.payload?.tokens ?? state.tokens,
        error: null,
      };
    case USER_SET_ERROR:
      return { ...state, loading: false, status: 'failed', error: action.payload };
    case USER_RESET:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export const setUserLoading = () => ({ type: USER_SET_LOADING });
export const setUserData = (data: any) => ({ type: USER_SET_DATA, payload: data });
export const setUserError = (error: string) => ({ type: USER_SET_ERROR, payload: error });
export const resetUser = () => ({ type: USER_RESET });
