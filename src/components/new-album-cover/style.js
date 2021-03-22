import styled from 'styled-components'

const NewAlbumCoverWrapper = styled.div`
  .cover-top{
    img{
      width:${props => props.width +'px'};
      height:${props => props.height +'px'};
    }
  }
`

export {
  NewAlbumCoverWrapper
}