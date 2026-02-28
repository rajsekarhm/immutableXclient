// Action Types
export const CUSTODIAN_SET_LOADING = 'custodian/setLoading';
export const CUSTODIAN_SET_DATA = 'custodian/setData';
export const CUSTODIAN_SET_ERROR = 'custodian/setError';
export const CUSTODIAN_RESET = 'custodian/reset';

// State Interface
interface CustodianState {
  custodian: any;
  loading: boolean;
  status: string;
  error: string | null;
}

const initialState: CustodianState = {
  custodian: null,
  loading: false,
  status: 'idle',
  error: null,
};

// Reducer
export function custodianReducer(state = initialState, action: any): CustodianState {
  switch (action.type) {
    case CUSTODIAN_SET_LOADING:
      return { ...state, loading: true, status: 'idle', error: null };
    case CUSTODIAN_SET_DATA:
      return { ...state, loading: false, status: 'succeeded', custodian: action.payload, error: null };
    case CUSTODIAN_SET_ERROR:
      return { ...state, loading: false, status: 'failed', error: action.payload };
    case CUSTODIAN_RESET:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export const setCustodianLoading = () => ({ type: CUSTODIAN_SET_LOADING });
export const setCustodianData = (data: any) => ({ type: CUSTODIAN_SET_DATA, payload: data });
export const setCustodianError = (error: string) => ({ type: CUSTODIAN_SET_ERROR, payload: error });
export const resetCustodian = () => ({ type: CUSTODIAN_RESET });
