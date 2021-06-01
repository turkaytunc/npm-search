import { RepoActionType } from '../action-types';

export type RepoAction =
  | {
      type: RepoActionType.ERROR;
      payload: string;
    }
  | {
      type: RepoActionType.SUCCESS;
      payload: string[];
    }
  | {
      type: RepoActionType.SEARCH;
    };
