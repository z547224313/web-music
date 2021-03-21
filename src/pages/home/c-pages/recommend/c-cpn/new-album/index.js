import React,{memo} from 'react';
import ThemeHeaderRmc from "@/components/theme-header-rmc";
function NewAlbum(props) {
  return (
    <div>
      <ThemeHeaderRmc title='新碟上架'/>
    </div>
  );
}

export default memo(NewAlbum);