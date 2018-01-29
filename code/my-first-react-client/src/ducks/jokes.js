import { search } from "../api";

const initialState = {
  page: 1,
  limit: 10,
  totalPages: 1,
  results: [],
  filters: { term: "" }
};

function received(state, action) {
  const { jokes } = action;

  return {
    ...state,
    totalPages: jokes.total_pages,
    results: jokes.results
  };
}

function nextPage(state) {
  return {
    ...state,
    page: Math.min(state.page + 1, state.totalPages)
  };
}

function setFilter(state, action) {
  return {
    ...state,
    filters: {
      ...state.filters,
      [action.filter]: action.value
    }
  };
}

function previousPage(state) {
  return {
    ...state,
    page: Math.max(state.page - 1, 1)
  };
}

const RECEIVED = "jokes/RECEIVED";
const NEXT_PAGE = "jokes/NEXT_PAGE";
const PREVIOUS_PAGE = "jokes/PREVIOUS_PAGE";
const SET_FILTER = "jokes/SET_FILTER";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED:
      return received(state, action);
    case NEXT_PAGE:
      return nextPage(state);
    case PREVIOUS_PAGE:
      return previousPage(state);
    case SET_FILTER:
      return setFilter(state, action);
    default:
      return state;
  }
}

export const actions = {
  next: () => ({ type: NEXT_PAGE }),
  previous: () => ({ type: PREVIOUS_PAGE }),
  setFilter: (filter, value) => ({ type: SET_FILTER, filter, value }),
  search: (term, page, limit) => dispatch =>
    search({ term, page, limit }).then(resp =>
      dispatch({ type: RECEIVED, jokes: resp.data })
    )
};
