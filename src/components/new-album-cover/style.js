import styled from 'styled-components'
import bg from '@/assets/img/sprite_cover.png'
const NewAlbumCoverWrapper = styled.div`
  .cover-top{
    position: relative;
    img{
      width:${props => props.width +'px'};
      height:${props => props.height +'px'};
    }
    a{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${bg});
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
    }
  }
  .cover-bottom{
    width: 100px;
    .album-name{
      color: #000;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow:ellipsis ;
    }
    .album-artist{
      color: #666666;
    }
  }
`

export {
  NewAlbumCoverWrapper
}