const cart = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return[
                ...state,
                {
                    title:action.title,
                    price:action.price,
                    id:action.id,
                    quantity:1,
                }
            ]
        case 'CHANGE_QUANTITY':
            var newState=[]
            for(let i=0;i<state.length;i++){
                if(state[i].id === action.id){
                    if(action.quantity >= 0){
                        newState.push({
                            title:state[i].title,
                            price:state[i].price,
                            id:state[i].id,
                            quantity:action.quantity,
                        })
                    }
                    else{
                        newState.push(state[i])
                    }
                }
                else{
                    newState.push(state[i])
                }
            }
            return newState
        case 'REMOVE_FROM_CART':
            var remain=[]
            for(let i=0;i<state.length;i++){
                if(state[i].id !== action.id){
                    remain.push(state[i])
                }
            }
            return remain
        case 'BUY_ALL':
            return []
        default:
            return state
    }
}
export default cart