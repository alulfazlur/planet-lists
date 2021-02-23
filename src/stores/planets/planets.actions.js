import axios from "axios";
import api from "../../config/api";
import * as types from "./planets.types";

export const fetchPlanets = () => {
  return (dispatch) => {
    dispatch({ type: types.FETCH_PLANETS_START });
    axios({
      method: "GET",
      url: api.planets,
    })
      .then((res) => {
        dispatch({
          type: types.FETCH_PLANETS_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: types.FETCH_PLANETS_FAIL, payload: error });
      });
  };
};

export const fetchPlanetsScroll = (page = 2) => {
  console.log("masuk", page);
  return (dispatch) => {
    dispatch({ type: types.FETCH_PLANETS_SCROLL_START });
    axios({
      method: "GET",
      url: api.planets + `?page=${page}`,
    })
      .then((res) => {
        dispatch({
          type: types.FETCH_PLANETS_SCROLL_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: types.FETCH_PLANETS_SCROLL_FAIL, payload: error });
      });
  };
};

export const fetchPlanetDetails = (url) => {
  return (dispatch) => {
    dispatch({ type: types.DETAIL_PLANETS_START });
    axios({
      method: "GET",
      url,
    })
      .then((res) => {
        delete res.data.residents
        delete res.data.films
        dispatch({
          type: types.DETAIL_PLANETS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: types.DETAIL_PLANETS_FAIL, payload: error });
      });
  };
};

export const searchPlanets = (keyword) => {
  return (dispatch) => {
    dispatch({ type: types.SEARCH_PLANETS_START });
    axios({
      method: "GET",
      url: api.planets + `?search=${keyword}`,
    })
      .then((res) => {
        dispatch({
          type: types.SEARCH_PLANETS_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: types.SEARCH_PLANETS_FAIL, payload: error });
      });
  };
};
