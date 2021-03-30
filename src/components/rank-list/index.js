import React,{ memo } from 'react';
import {RankListWrapper} from "@/components/rank-list/style";
import getImageSizeUrl from "@/until/getImageSizeUrl";
export default memo(function RankList(props) {
  const {list,coverImg,listName} = props
 return (
  <RankListWrapper>
    <div className="top">
      <div className="img">
        <img src={getImageSizeUrl(coverImg,80,80)} alt=""/>
        <a className='imgCover' href="/todo"> </a>
      </div>
      <div className="title">
        <p className="name">{listName}</p>

      </div>
    </div>
  </RankListWrapper>
 );})

