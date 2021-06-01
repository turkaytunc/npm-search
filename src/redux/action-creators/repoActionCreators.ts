import { RepoActionType } from '../action-types';
import { Dispatch } from 'redux';
import { RepoAction } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepoAction>) => {
    dispatch({ type: RepoActionType.SEARCH });

    try {
      const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`);
      const data = await response.json();

      console.log(data);
      return;

      dispatch({ type: RepoActionType.SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RepoActionType.ERROR,
        payload: error.message,
      });
    }
  };
};
