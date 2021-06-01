import { RepoActionType } from '../action-types';
import { RepoAction } from '../actions';

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const repoReducer = (state: RepoState, action: RepoAction): RepoState => {
  switch (action.type) {
    case RepoActionType.SEARCH:
      return { loading: true, error: null, data: [] };
    case RepoActionType.SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepoActionType.ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repoReducer;
