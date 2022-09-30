const postReducer = (state=[], action) => {

    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
            case 'CREATE':
                return [...state, action.payload]
                case 'UPDATE':
                    return state.map((el) => el._id === action.payload._id ? action.payload : el)
                    case 'DELETE':
                        return state.filter((el) => el._id !== action.payload)
            default:
                return state
    }
    
}

export default postReducer