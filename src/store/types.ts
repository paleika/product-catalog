type AppStatus =
  | 'initial'
  | 'ready'
  | 'error';

interface State {
  status: AppStatus;
}

type SetStatusAction = {
  type: 'SET_STATUS';
  payload: AppStatus;
}

type Action =
  | SetStatusAction;

export type {
  Action,
  State,
};
