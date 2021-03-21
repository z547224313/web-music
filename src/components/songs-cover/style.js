import styled from 'styled-components'
import bg from '@/assets/img/sprite_cover.png'
import icon from '@/assets/img/sprite_icon.png'
const SongsWrapper = styled.div`
  box-sizing: content-box;
  width: 140px;

  .songs-top{
    position: relative;
    .mask{
      background-image: url(${bg});
      background-position: 0 0;
      width: 100%;
      height: 100%;
      left: 0;
      position: absolute;
      z-index: 999;
    }
    img{
      width: 140px;
    }
    .bottom{
      height: 27px;
      width: 100%;
      color: #ccc;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,.3);
      z-index: 9999;
      display: flex;
      &-left{
        .listen{
          width: 14px;
          height: 11px;
          background-image: url(${icon});
          background-position: 0 -24px;
          margin: 9px 5px 9px 10px;
        }
      }
    }
  }
`

export {
  SongsWrapper
}