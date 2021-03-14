import React,{ memo,useEffect } from 'react';
import * as api from '@/services/request'
export default memo(function Recommend(props) {
  useEffect(()=>{
    api.getBanner().then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err,'我是子组件')
    })
  },[])
 return (
  <div>
    推荐
  </div>
 );})

