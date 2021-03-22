import styled from 'styled-components'
import icon from '@/assets/img/sprite_02.png'
const NewAlbumWrapper = styled.div`
  margin-top: 35px;
  .content{
    margin-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    margin-bottom: 37px;
    .albums{
      margin-top: 28px;
      width: 629px;
      height: 152px;
      &-list{
      display: flex !important;
        justify-content: space-evenly;
        
    }
    }
    .rightArrow{
      cursor: pointer;
      width: 17px;
      height: 17px;
      background-image: url(${icon});
      background-position: -260px -75px;
    }
    .leftArrow{
      cursor: pointer;
      width: 17px;
      height: 17px;
      background-image: url(${icon});
      background-position: -300px -75px;
    }
  }
`

export {
  NewAlbumWrapper
}