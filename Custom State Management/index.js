const createStore = require('./createStore')
const reducer = require('./reducer')

let store = createStore(reducer,{Counter:0})


store.dispatch({type:''})
console.log(store.getState())

store.dispatch({type:'Increase'})
console.log(store.getState())

store.dispatch({type:'Decrease'})
console.log(store.getState())
