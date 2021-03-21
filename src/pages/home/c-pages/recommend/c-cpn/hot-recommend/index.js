import React,{memo,useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ThemeHeaderRmc from "@/components/theme-header-rmc";
import {getHotRecommendAction} from '../../store/actionCreators'
import {HotRecommendWrapper} from "@/pages/home/c-pages/recommend/c-cpn/hot-recommend/style";
import SongsCover from "@/components/songs-cover";
function HotRecommend(props) {
  const {hotRecommendLists} = useSelector(state=>({
    hotRecommendLists:state.getIn(['recommend','hotRecommendLists'])
  }),shallowEqual())

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHotRecommendAction(8))
  },[dispatch])
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRmc title='热门推荐' links={['华语','流行','摇滚','民谣','电子']}/>
      <div className='songsList'>
        {
          hotRecommendLists.map(item => {
            return (
              <SongsCover className='songs-item' key={item.id} song={item} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  );
}

export default memo(HotRecommend);