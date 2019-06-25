const reducer = (state={Counter:0},action)=>{
  switch(action.type){
    case 'Increase':
      return{
        Counter: state.Counter + 1
      }
    case 'Decrease':
      return{
        Counter: state.Counter - 1
      }
    default:
      return state;
  }
}
module.exports = reducer;
