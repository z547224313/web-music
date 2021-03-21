import styled from 'styled-components'
import bgc from '@/assets/img/sprite_footer_02.png'
const FootWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  min-width: 980px;
  .content{
    width: 980px;
    min-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    &-left{
      font-size: 12px;
      padding-top: 15px;
      .links{
        display: flex;
        .link-item{
          color: #999;
          cursor: pointer;
          &::after{
            content: '|';
            margin-left: 10px;
            margin-right: 8px;
          }
        }
      }
      .right{
        margin-bottom: 0;
        color: #666;
        height: 24px;
        line-height: 24px;
        span:nth-child(1){
          margin-right: 10px;
        }
      }
    }
    &-right{
      margin-top: 33px;
      width: 368px;
      .footer-image{
        display: flex;
        .image-item{
          width: 50px;
          height: 45px;
          margin-left: 30px;
          background-image: url(${bgc});
          background-size: 110px 450px;
          &:nth-child(1){
            margin-left: 0;
            background-position: -60px -101px;
          }
          &:nth-child(2){
            background-position: 0 0;
          }
          &:nth-child(3){
            background-position: -60px -50px;
          }
          &:nth-child(4){
            background-position:0 -101px;
          }
        }
      } 
    }
  }
`
export {
    FootWrapper
}