import React,{ memo,useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {getTopBannerAction} from "@/pages/home/c-pages/recommend/store/actionCreators";
import {RecommendWrapper} from "@/pages/home/c-pages/recommend/style";

function Recommend(props) {



  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])

 return (
  <RecommendWrapper>
    <div>推荐:{topBanners.length}</div>
  </RecommendWrapper>
 );}


export default memo(Recommend);
