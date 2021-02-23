import * as types from "./planets.types";

const initialState = {
  isLoading: false,
  isLoadingScroll: false,
  isLoadingDetail: false,
  planets: [],
  details: {},
  errorMessage: null,
};

export default function planetsReducer(planetsState = initialState, action) {
  switch (action.type) {
    // FETCH
    case types.FETCH_PLANETS_START:
      return {
        ...planetsState,
        errorMessage: null,
        isLoading: true,
      };
    case types.FETCH_PLANETS_SUCCESS:
      return {
        ...planetsState,
        planets: action.payload,
        isLoading: false,
      };
    case types.FETCH_PLANETS_FAIL:
      return {
        ...planetsState,
        errorMessage: action.payload,
        isLoading: false,
      };

    // FETCH SCROLL
    case types.FETCH_PLANETS_SCROLL_START:
      return {
        ...planetsState,
        errorMessage: null,
        isLoadingScroll: true,
      };
    case types.FETCH_PLANETS_SCROLL_SUCCESS:
      return {
        ...planetsState,
        planets: [...planetsState.planets, ...action.payload],
        isLoadingScroll: false,
      };
    case types.FETCH_PLANETS_SCROLL_FAIL:
      return {
        ...planetsState,
        errorMessage: action.payload,
        isLoadingScroll: false,
      };

    // FETCH SCROLL
    case types.DETAIL_PLANETS_START:
      return {
        ...planetsState,
        errorMessage: null,
        isLoadingDetail: true,
      };
    case types.DETAIL_PLANETS_SUCCESS:
      return {
        ...planetsState,
        details: action.payload,
        isLoadingDetail: false,
      };
    case types.DETAIL_PLANETS_FAIL:
      return {
        ...planetsState,
        errorMessage: action.payload,
        isLoadingDetail: false,
      };

    // SEARCH
    case types.SEARCH_PLANETS_START:
      return {
        ...planetsState,
        errorMessage: null,
        isLoading: true,
      };
    case types.SEARCH_PLANETS_SUCCESS:
      return {
        ...planetsState,
        planets: action.payload,
        isLoading: false,
      };
    case types.SEARCH_PLANETS_FAIL:
      return {
        ...planetsState,
        errorMessage: action.payload,
        isLoading: false,
      };
    default:
      return planetsState;
  }
}
