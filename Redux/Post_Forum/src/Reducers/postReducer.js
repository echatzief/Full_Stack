const postReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_POST':
            return[
                ...state,
                {
                    title:action.title,
                    message:action.message,
                    id:action.id,
                    hasBeenRead:false,
                }
            ]
        case 'DELETE_POST':
            var newState=[];
            for(let i=0;i<state.length;i++){
                if(state[i].id !== action.id){
                    newState.push(state[i]);
                }
            }
            return newState;
        case 'MARK_AS_READ':
            return state.map(post=> (post.id===action.id) ? {...post,hasBeenRead:!post.hasBeenRead}: post)
        default:
            return state;
    }
}

export default postReducer;