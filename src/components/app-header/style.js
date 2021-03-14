import styled from 'styled-components'
import sprite01 from '@/assets/img/sprite_01.png'

const HeaderWrapper = styled.div`
  height: 75px;

  .topNavBar {
    height: 70px;
    background-color: #242424;

    .mainContent {
      width: 1100px;
      height: 70px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }

  .bottomNavBar {
    height: 5px;
    background-color: #C20C0C;
  }

`

const ContentLeft = styled.div`
  display: flex;
  
  .logo {
    background-position: 0 0;
    background-image: url(${sprite01});
    
    a {
      display: block;
      width: 176px;
      height: 69px;
      text-indent: -9999px;
    }
  }

  .navLink {
    color: #fff;
    height: 70px;
    line-height: 70px;
    padding: 0 19px;
    &:hover,&-active{
      background-color: #000;
      position: relative;
    }
    :last-child{
      position: relative;
    }
    :last-child::after{
      content: '';
      display: block;
      position: absolute;
      top: 21px;
      left: 110px;
      width: 28px;
      height: 19px;
      background-image: url(${sprite01});
      background-position: -190px 0;
    }
    &-active::after{
      display: block;
      content: '';
      position: absolute;
      width: 0;
      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #C20C0C;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
const ContentRight = styled.div`
  display: flex;
  align-content: center;
  color: #ccc;
  font-size: 12px;
  .searchInput{
    border-radius: 32px;
    margin-top: 19px;
    width: 158px;
    height: 32px;
    input::placeholder{
      font-size: 12px;
      color: #9b9b9b;
    }
  }
  .btn{
    color: #ccc;
    font-size: 12px;
    background-color: #242424;
    margin:19px 0 0 12px;
    height: 32px;
    text-align: center;
    border: 1px solid #4F4F4F;
    &:hover{
      border: 1px solid #fff;
    }
  }
  .login{
    margin: 19px 0 0 20px;
    overflow: hidden;
    a{
      color: #787878;
      display: block;
      overflow: hidden;
      padding-top: 7px;
      &:hover{
        color: #787878;
      }
    }
  }
`

export {HeaderWrapper, ContentLeft, ContentRight}
