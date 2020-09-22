import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';

const Enhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    if (typeof action === 'string') {
      return originalDispatch({type: action})
    }
    return originalDispatch(action)
  }

  return store;
}
// 1. Энхенсер принимает в первые скобки createStore, а во вторые все его аргументы 
//    = (createStore) => (...args)
// 2. Энхенсер должен возвращать новый store
// 3. Диспатч должен возвращать результат функции оригинального диспатча
//
//


const store = createStore(reducer, Enhancer);



store.dispatch('HELLO_WORLD' );
export default store;
