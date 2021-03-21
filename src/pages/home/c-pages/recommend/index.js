import React, {memo} from 'react';
import TopBanner from './c-cpn/top-banner'
import {ContentWrapper,RecommendLeft,RecommendRight} from "./style";
import HotRecommend from "@/pages/home/c-pages/recommend/c-cpn/hot-recommend";
import NewAlbum from "@/pages/home/c-pages/recommend/c-cpn/new-album";
import TopRank from "@/pages/home/c-pages/recommend/c-cpn/top-rank";
function Recommend(props) {
  return (
    <>
      <TopBanner/>
      <ContentWrapper>
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <TopRank/>
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </ContentWrapper>
    </>
  );
}

export default memo(Recommend);


