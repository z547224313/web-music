import React,{ memo,useEffect,useRef,useCallback,useState } from 'react';

import {BannerWrapper} from "@/pages/home/c-pages/recommend/c-cpn/top-banner/style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopBannerAction} from "@/pages/home/c-pages/recommend/store/actionCreators";
import {Carousel} from "antd";

export default memo(function Index(props) {
  const [currentIndex,setCurrentIndex] = useState(0)

  const {topBanners} = useSelector(state => ({
    topBanners:state.getIn(['recommend','topBanners'])
  }),shallowEqual)
  const dispatch = useDispatch()
  const bannerRef = useRef()

  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])
  const bannerChange = useCallback((from, to)=>{
    setTimeout(()=>{
      setCurrentIndex(to)
    },0)
  },[])

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+'?imageView&blur=40x20')
 return (
  <BannerWrapper bgImage={bgImage}>
    <div className="banner-main">
      <div className='banner-left'>
        <Carousel ref={bannerRef} beforeChange={bannerChange}>
          {
            topBanners.map(item => {
              return (
                  <div key={item.imageUrl} className='banner-item'>
                    <img src={item.imageUrl} alt=""/>
                  </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className="banner-right">

      </div>
      <div className='control'>
        <div className="btn left" onClick={event => bannerRef.current.prev()}></div>
        <div className="btn right" onClick={event => bannerRef.current.next()}></div>
      </div>
    </div>
  </BannerWrapper>
 );})

