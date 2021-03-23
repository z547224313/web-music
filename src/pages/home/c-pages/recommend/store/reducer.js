import * as actionTypes from './constans'
import {Map} from 'immutable'

const defaultState = Map({
  topBanners:[],
  hotRecommendLists:[],
  newAlbum:[],
  newTopList:[],
  originTopList:[],
  upTopList:[]
})

function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners',action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND_LISTS:
      return state.set('hotRecommendLists',action.hotRecommendLists)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum',action.newAlbum)
    case actionTypes.CHANGE_NEW_TOP_LIST:
      return state.set('newTopList',action.newTopList)
    case actionTypes.CHANGE_ORIGIN_TOP_LIST:
      return state.set('originTopList',action.originTopList)
    case actionTypes.CHANGE_UP_TOP_LIST:
      return state.set('upTopList',action.upTopList)
    default:
      return state;
  }
}

export default reducer

