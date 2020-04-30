export interface BaseState {
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: string;
}

export const initialBaseState: BaseState = {
  loading: true,
  loaded: false,
  hasError: false,
  error: null,
};

export const loadingBaseState: BaseState = {
  ...initialBaseState,
  loading: true,
};

export const loadedBaseState: BaseState = {
  ...loadingBaseState,
  loaded: true,
  loading: false,
};

export const errorBaseState: BaseState = {
  ...loadingBaseState,
  loading: false,
  hasError: true,
};
