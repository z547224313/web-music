import {combineReducers} from "redux-immutable";
import { reducer as recommendReducer} from '@/pages/home/c-pages/recommend/store'

const cReducer = combineReducers({
  recommend: recommendReducer
})

export default cReducer;
