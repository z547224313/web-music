import React,{memo} from 'react';
import {SongsWrapper} from "@/components/songs-cover/style";
import getCountFormat from "@/until/getCountFormat";
import getImageSizeUrl from "@/until/getImageSizeUrl";
function SongsCover(props) {
  const song = props.song
  return (
    <SongsWrapper>
      <div className='songs-top'>
        <img src={getImageSizeUrl(song.picUrl,140,140)} alt=""/>
        <a className='mask' href='todo'> </a>
        <div className='bottom'>
          <div className="bottom-left">
            <div className='listen'> </div>
            {getCountFormat(song.playCount)}
          </div>
          <div className='bottom-right'>
             <div className='playBtn'> </div>
          </div>
        </div>
      </div>
      <div className="songs-bottom">
        <div className="songs-title">
          <a href="todo">{song.name}</a>
        </div>
        {/*<div className="songs-source">*/}
        {/*  <span>by</span>*/}
        {/*  <span>{song.copywriter}</span>*/}
        {/*</div>*/}
      </div>
    </SongsWrapper>
  );
}

export default memo(SongsCover);