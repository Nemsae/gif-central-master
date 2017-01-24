export default function apiCalls(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_SEARCH_FULFILLED': {
      return payload.data;
    }

    default: return state;
  }
}
