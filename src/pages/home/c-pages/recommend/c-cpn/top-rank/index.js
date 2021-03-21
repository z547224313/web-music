import React,{memo} from 'react';
import ThemeHeaderRmc from "@/components/theme-header-rmc";
function TopRank(props) {
  return (
    <div>
      <ThemeHeaderRmc title='榜单' />
    </div>
  );
}

export default memo(TopRank);