import * as actionTypes from './constans'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners:[]
})

function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners',action.topBanners)
    default:
      return state;
  }
}

export default reducer

