import styled from 'styled-components'

const HomeWrapper = styled.div`
  .topNavBar{
    height: 30px;
    background-color: #C20C0C;
    &-content{
      background-color: #C20C0C;
      height: 30px;
      width: 1100px;
      margin:0 auto;
      display: flex;
      &-item{
        display: block;
        color: #fff;
        font-style: normal;
        text-align: center;
        font-size: 12px;
        &:first-child{
          padding-left: 180px;
        }
        span{
          margin: 2px 17px;
          padding: 0 13px;
          display: inline-block;
          height: 20px;
          border-radius: 20px;
        }
        &-active span,span:hover{
          background-color: #9B0909;
        }
      }
    }
  }
`

export {
  HomeWrapper
}
