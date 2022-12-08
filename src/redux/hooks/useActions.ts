import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as modelActionCreators from '../store/action-creators/model';

export default function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(modelActionCreators, dispatch);
}
