export const REELS_ACTIONS_TYPE = {
  increment: 'Increment',
  decrement: 'Decrement',
  custom: 'Custom',
  reset: 'Reset'
};

export const reelsReducer = (state, action) => {
  console.log({action});
  switch (action.type) {
    case REELS_ACTIONS_TYPE.increment:
      return {count: state.count + 1};
    case REELS_ACTIONS_TYPE.decrement:
      return {count: state.count - 1};
    case REELS_ACTIONS_TYPE.reset:
      return {count: 0};
    case REELS_ACTIONS_TYPE.custom:
      return {count: action.data};
    default:
      return state;
  }
};
