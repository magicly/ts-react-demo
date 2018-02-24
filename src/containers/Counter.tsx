import { connect, Dispatch } from 'react-redux';
import Counter from '../components/Counter';
import * as actions from '../actions';
import { StoreState } from '../types';

const mapState2Props = ({ name, count }: StoreState) => {
  return {
    name,
    count,
  };
};

const mapDispatch2Props = (dispatch: Dispatch<actions.ActionCount>) => {
  return {
    onInc: () => dispatch(actions.inc()),
    onDec: () => dispatch(actions.dec()),
  };
};

export default connect(mapState2Props, mapDispatch2Props)(Counter);
