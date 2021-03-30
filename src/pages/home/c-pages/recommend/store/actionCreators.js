import * as actionTypes from './constans'

import {getTopBanner, getHotRecommend,getNewAlbum,getTopList} from "@/services/recommend";


const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
 const changeHotRecommendListsAction = res =>({
   type:actionTypes.CHANGE_HOT_RECOMMEND_LISTS,
   hotRecommendLists:res
 })

const changeNewAlbum = res => ({
  type:actionTypes.CHANGE_NEW_ALBUM,
  newAlbum:res
})
const changeNewTopList = res => ({
  type:actionTypes.CHANGE_NEW_TOP_LIST,
  newTopList:res
})
const changeOriginTopList = res => ({
  type:actionTypes.CHANGE_ORIGIN_TOP_LIST,
  originTopList:res
})
const changeUpTopList = res => ({
  type:actionTypes.CHANGE_UP_TOP_LIST,
  upTopList:res
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBannerAction(res))
    })

  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotRecommendListsAction(res.result))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res =>{
      dispatch(changeNewAlbum(res.albums))
    })
  }
}

export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res=>{
      if(idx === 0){
        dispatch(changeNewTopList(res.playlist))
      }else if(idx === 2){
        dispatch(changeOriginTopList(res.playlist))
      }else if(idx === 3){
        dispatch(changeUpTopList(res.playlist))
      }
    })
  }
}
