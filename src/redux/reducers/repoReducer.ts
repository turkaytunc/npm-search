interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  ERROR = 'error',
  SUCCESS = 'success',
  SEARCH = 'search',
}

type RepoAction =
  | {
      type: ActionType.ERROR;
      payload: string;
    }
  | {
      type: ActionType.SUCCESS;
      payload: string[];
    }
  | {
      type: ActionType.SEARCH;
      payload: null;
    };

const repoReducer = (state: RepoState, action: RepoAction): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH:
      return { loading: true, error: null, data: [] };
    case ActionType.SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repoReducer;
