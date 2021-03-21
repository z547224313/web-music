import React from 'react';
import ThemeHeaderRmc from "@/components/theme-header-rmc";
function HotRecommend(props) {
  return (
    <div>
      <ThemeHeaderRmc title='热门推荐' links={['华语','流行','摇滚','民谣','电子']}/>
    </div>
  );
}

export default HotRecommend;