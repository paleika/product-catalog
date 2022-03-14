import { assoc } from 'imtbl';
import actions from './actions';
import { State, Action } from './types';

const initialState: State = {
  status: 'initial',
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actions.SET_STATUS: {
      return assoc(state, 'status', action.payload);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
