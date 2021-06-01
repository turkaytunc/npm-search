import { RepoActionType } from '../action-types';
import { RepoAction } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ type: RepoActionType.SEARCH });

    try {
      const response = await fetch(`https://registry.npmjs.org/${term}`);
      const data = await response.json();

      dispatch({ type: RepoActionType.SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RepoActionType.ERROR,
        payload: error.message,
      });
    }
  };
};
