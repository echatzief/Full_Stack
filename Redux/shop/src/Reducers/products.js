const products =(state=[],action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return[
                ...state,
                {
                    title:action.title,
                    price:action.price,
                    id:action.id,
                    description:action.description,
                }
            ]
        case 'REMOVE_PRODUCT':
            var remain=[]
            for(let i=0;i<state.length;i++){
                if(state[i].id !== action.id){
                    remain.push(state[i])
                }
            }
            return remain
        default: 
            return state
    }
}

export default products