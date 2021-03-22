import styled from 'styled-components'
import bg from '@/assets/img/sprite_cover.png'
import icon from '@/assets/img/sprite_icon.png'
const SongsWrapper = styled.div`
  box-sizing: content-box;
  width: 140px;
  padding-bottom: 50px;
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
      line-height: 27px;
      justify-content: space-between;
      align-items: center;
      &-left{
        display: flex;
        align-items: center;
        .listen{
          width: 14px;
          height: 11px;
          background-image: url(${icon});
          background-position: 0 -24px;
          margin: 0 5px 0 10px;

        }
      }
      &-right{
        .playBtn{
          cursor: pointer;
          margin-right: 10px;
          width: 16px;
          height: 17px;
          background-image: url(${icon});
          background-position: 0 0;
        }
      }
    }
  }
  .songs-bottom{
    .songs-title{
      color: #000;
      font-size: 14px;
      margin: 8px 0 3px;
    }
  }
`

export {
  SongsWrapper
}