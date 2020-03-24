export default function updateAction(state, payload) {
  return {
    ...state,
    yourDetail: {
      ...state.yourDetail,
      ...payload
    }
  };
}
