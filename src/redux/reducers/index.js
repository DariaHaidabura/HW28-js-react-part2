import { combineReducers} from 'redux';

import cart from './cart';
import counter from './todos';

const rootReducer = combineReducers({
  cart,
  counter,
})

export default rootReducer;