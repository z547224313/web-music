import request from "@/services/request";

export const getTopBanner = ()=> request('/banner') //获取轮播图数据

export const getHotRecommend = limit => request('/personalized',{
  limit:limit
}) //热门推荐数据

export const getNewAlbum = limit => request('/top/album',{
  limit
})//获取新碟上架