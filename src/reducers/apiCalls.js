export default function apiCalls(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_SEARCH_FULFILLED': {
      console.log('payload:', payload);
      return payload;
    }

    default: return state;
  }
}
