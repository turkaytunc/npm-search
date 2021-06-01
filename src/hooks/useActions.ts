import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { repoActionCreators } from '../redux/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(repoActionCreators, dispatch);
};
