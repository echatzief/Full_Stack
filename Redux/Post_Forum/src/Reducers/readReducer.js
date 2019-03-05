import {visibilityFilters} from '../Actions/index';

const readReducer=(state=visibilityFilters.SHOW_ALL,action)=>{
    switch(action.type){
        case 'SET_VISIBILITY':
            return action.filter;
        default:
            return state;
    }
}

export default readReducer;