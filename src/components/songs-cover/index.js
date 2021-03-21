import React,{memo} from 'react';
import {SongsWrapper} from "@/components/songs-cover/style";

function SongsCover(props) {
  const song = props.song
  return (
    <SongsWrapper>
      <div className='songs-top'>
        <img src={song.picUrl} alt=""/>
        <a className='mask' href='javaScript:'> </a>
        <div className='bottom'>
          <div className="bottom-left">
            <div className='listen'> </div>
          </div>
          <div className='bottom-right'>

          </div>
        </div>
      </div>
    </SongsWrapper>
  );
}

export default memo(SongsCover);