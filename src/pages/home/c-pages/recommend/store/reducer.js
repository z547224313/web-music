import * as actionTypes from './constans'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners:[],
  hotRecommendLists:[]
})

function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners',action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND_LISTS:
      return state.set('hotRecommendLists',action.hotRecommendLists)
    default:
      return state;
  }
}

export default reducer

