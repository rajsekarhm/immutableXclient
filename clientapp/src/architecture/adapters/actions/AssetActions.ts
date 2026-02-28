// Action Types
export const ASSET_SET_LOADING = 'asset/setLoading';
export const ASSET_SET_DATA = 'asset/setData';
export const ASSET_SET_ERROR = 'asset/setError';
export const ASSET_RESET = 'asset/reset';

// State Interface
interface AssetState {
  asset: any;
  loading: boolean;
  status: string;
  error: string | null;
}

const initialState: AssetState = {
  asset: null,
  loading: false,
  status: 'idle',
  error: null,
};

// Reducer
export function assetReducer(state = initialState, action: any): AssetState {
  switch (action.type) {
    case ASSET_SET_LOADING:
      return { ...state, loading: true, status: 'idle', error: null };
    case ASSET_SET_DATA:
      return { ...state, loading: false, status: 'succeeded', asset: action.payload, error: null };
    case ASSET_SET_ERROR:
      return { ...state, loading: false, status: 'failed', error: action.payload };
    case ASSET_RESET:
      return initialState;
    default:
      return state;
  }
}

// Action Creators
export const setAssetLoading = () => ({ type: ASSET_SET_LOADING });
export const setAssetData = (data: any) => ({ type: ASSET_SET_DATA, payload: data });
export const setAssetError = (error: string) => ({ type: ASSET_SET_ERROR, payload: error });
export const resetAsset = () => ({ type: ASSET_RESET });
