import * as actionTypes from './constans'

import {getTopBanner, getHotRecommend} from "@/services/recommend";


const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
 const changeHotRecommendListsAction = res =>({
   type:actionTypes.CHANGE_HOT_RECOMMEND_LISTS,
   hotRecommendLists:res
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
