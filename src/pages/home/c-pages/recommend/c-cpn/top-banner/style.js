import styled from 'styled-components'
import download from '@/assets/img/download.png'
import banner from '@/assets/img/banner_sprite.png'
const BannerWrapper = styled.div`
  height: 285px;
  min-width: 1100px;
  background-image: url(${props => props.bgImage});
  background-size: 6000px;
  background-position: center center;
  .banner-main{
    height: 285px;
    width: 982px;
    display: flex;
    margin: 0 auto;
    position: relative;
  }
  .control{
   
    .btn{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 37px;
      height: 63px;
      background-image: url(${banner});
      cursor: pointer;
      &:hover{
        background-color: rgba(0, 0, 0, .1);
      }
    }
    
    .left{
      background-position: 0 -360px;
      left: -68px;
     
    }
    .right{
      background-position: 0 -508px;
      right: -68px;
    }
  }
  .banner-left{
    width: 730px;
    button:hover {
      background-color: red;
    }
    .banner-item{
      
      img{
        height: 285px;
        width: 730px
      }
    }
  }
  .banner-right{
    width: 254px;
    background-image: url(${download});
  }
`
export {
  BannerWrapper
}
