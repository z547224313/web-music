import * as actionTypes from './constans'

import {getTopBanner, getHotRecommend,getNewAlbum} from "@/services/recommend";


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