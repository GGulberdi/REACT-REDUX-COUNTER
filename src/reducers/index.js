

// Actions
export const increment=()=>{
    return{
        type:'INCREMENT'
    }
}


export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}


export const addByTwo=()=>{
    return{
        type:'ADD_BY_TWO'
    }
}


export const delay=()=>{
    return{
        type:'DELAY'
    }
}

export const timer=()=>{
    return{
        type:'TIMER'
    }
}
// give a data for initial state
const initialState={
    count:0
}


// Reducer
export default  function counterReducer( state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count +1 };
        case 'DECREMENT':
            return {count:state.count -1};
            case 'ADD_BY_TWO':
                return {count:state.count +1};
                case 'DELAY':
                    return {count:state.count +1};
                    case 'TIMER':
                        return {count:state.count +1};
            default:
                return state;
    }
}