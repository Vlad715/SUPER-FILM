import { createStore } from 'redux';

import reducer from './redusers/index';

const store = createStore(reducer);

export default store;