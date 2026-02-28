// Action Types
export const TOKEN_SET_LOADING = 'token/setLoading';
export const TOKEN_SET_DATA = 'token/setData';
export const TOKEN_SET_ERROR = 'token/setError';
export const TOKEN_RESET = 'token/reset';

// State Interface
interface TokenState {
  token: any;
  loading: boolean;
  status: string;
  error: string | null;
}

const initialState: TokenState = {
  token: null,
  loading: false,
  status: 'idle',
  error: null,
};

// Reducer
export function tokenReducer(state = initialState, action: any): TokenState {
  switch (action.type) {
    case TOKEN_SET_LOADING:
      return { ...state, loading: true, status: 'idle', error: null };
    case TOKEN_SET_DATA:
      return { ...state, loading: false, status: 'succeeded', token: action.payload, error: null };
    case TOKEN_SET_ERROR:
      return { ...state, loading: false, status: 'failed', error: action.payload };
    case TOKEN_RESET:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export const setTokenLoading = () => ({ type: TOKEN_SET_LOADING });
export const setTokenData = (data: any) => ({ type: TOKEN_SET_DATA, payload: data });
export const setTokenError = (error: string) => ({ type: TOKEN_SET_ERROR, payload: error });
export const resetToken = () => ({ type: TOKEN_RESET });
