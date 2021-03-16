import React,{ memo,useEffect } from 'react';
import { connect } from 'react-redux'
import {getTopBannerAction} from "@/pages/home/c-pages/recommend/store/actionCreators";

function Recommend(props) {
  const { getBanners,topBanners } = props

  useEffect(()=>{
    getBanners()
  },[getBanners])

 return (
  <div>
    推荐{topBanners.length}
  </div>
 );}

 const mapStateToProps = state => ({
   topBanners: state.recommend.topBanners
 })

const mapDispatchToProps = dispatch => ({
  getBanners: ()=>{
    //这里的函数保证action调用，然后使用reducer修改state
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
