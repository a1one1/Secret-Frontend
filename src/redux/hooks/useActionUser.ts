import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as userActionCreators from '../store/action-creators/user';


export default function useActionUser() {
  const dispatch = useDispatch();
  return bindActionCreators(userActionCreators, dispatch);
}
