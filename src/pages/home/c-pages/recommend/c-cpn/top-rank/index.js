import React,{memo,useEffect} from 'react';
import ThemeHeaderRmc from "@/components/theme-header-rmc";
import {getTopListAction} from "@/pages/home/c-pages/recommend/store/actionCreators";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {TopRankWrapper} from "@/pages/home/c-pages/recommend/c-cpn/top-rank/style";
import RankList from '@/components/rank-list'
function TopRank(props) {
  const {newTopList,originTopList,upTopList} = useSelector(state=>({
    newTopList:state.getIn(['recommend','newTopList']),
    originTopList:state.getIn(['recommend','originTopList']),
    upTopList:state.getIn(['recommend','upTopList'])
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTopListAction(0))//新歌榜
    dispatch(getTopListAction(2))//原创榜
    dispatch(getTopListAction(3))//飙升榜
  },[dispatch])
  return (
    <TopRankWrapper>
      <ThemeHeaderRmc title='榜单' />
      <div className="content">
        <RankList coverImg={upTopList.coverImgUrl} list={upTopList.tracks} listName={upTopList.name}/>
        <RankList coverImg={newTopList.coverImgUrl} list={newTopList.tracks} listName={newTopList.name}/>
        <RankList coverImg={originTopList.coverImgUrl} list={originTopList.tracks} listName={originTopList.name}/>
      </div>
    </TopRankWrapper>
  );
}

export default memo(TopRank);
