import { SET_DATA ,SHOW_DATA} from "./type/DataType.tsx"

export default (state, action) => {
    switch (action.type) {
      case SET_DATA:
        return {
          ...state,
          data: action.payload
        }
  case SHOW_DATA:
    return{
      ...state,
      showData: action.payload
    } 
      default:
        return state
    }
  }
  