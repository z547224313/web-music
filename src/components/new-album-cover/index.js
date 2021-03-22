import React,{memo} from 'react';
import {NewAlbumCoverWrapper} from './style'
import getImageSizeUrl from "@/until/getImageSizeUrl";
function NewAlbumCover(props) {
  const {album,width=100,height=100} = props
  return (
    <NewAlbumCoverWrapper width={width} height={height}>
      <div className="cover-top">
        <img src={getImageSizeUrl(album.picUrl,100,100)} alt=""/>
      </div>
      <div className="cover-bottom">

      </div>
    </NewAlbumCoverWrapper>
  );
}

export default memo(NewAlbumCover);