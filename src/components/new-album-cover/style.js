import styled from 'styled-components'
import bg from '@/assets/img/sprite_cover.png'
const NewAlbumCoverWrapper = styled.div`
  width:${props => props.width +'px'};
  .cover-top{
    position: relative;
    img{
      width:${props => props.width +'px'};
      height:${props => props.height +'px'};
    }
    .cover-bg{
      width: 118px;
      height: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: url(${bg});
      background-position: 0 -570px;
    }
  }
  .cover-bottom{
    .album-name{
      color: #000;
      font-size: 12px;
    }
    .artist{
      color: #666666;
      font-size: 12px;
    }
  }
`

export {
  NewAlbumCoverWrapper
}
