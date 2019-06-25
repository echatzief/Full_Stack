
function createStore(reducer,preloadedState){

  let currentReducer = null;
  let currentState = null;
  let isDispatching = false;

  /* Forgot to initialize the store with it's reducer*/
  if(typeof reducer ==='undefined'){
    throw new Error('It looks like you are not passing the reducer to the createStore().\
    Each store should have a reducer.')
  }
  /* Wrong argument order */
  else if(typeof reducer ==='object' && typeof preloadedState === 'function'){
    throw new Error('Wrong argument order. createStore(Reducer,State).')
  }
  else if(typeof reducer ==='function' && typeof preloadedState === 'object'){
    currentReducer = reducer
    currentState = preloadedState
  }

  /* Get the current state */
  function getState(){
    if(isDispatching){
      throw new Error('You may not call store.getState() while reducer is executing.')
    }
    return currentState
  }

  /* Replace the existing reducer */
  function replaceReducer(newReducer){
    if(isDispatching){
      throw new Error('You may not call store.replaceReducer() while the previous reducer is executing.')
    }
    currentReducer = newReducer
  }

  /* Change the current state */
  function dispatch(action){
    try{
      isDispatching = true
      currentState = currentReducer(currentState,action)
    }
    finally{
      isDispatching = false
    }
  }

  return{
    getState,
    dispatch,
    replaceReducer,
  }
}

module.exports = createStore
