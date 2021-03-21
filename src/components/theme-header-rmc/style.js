import styled from 'styled-components'
import bg from '@/assets/img/sprite_02.png'
const ThemeHeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 645px;
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid red;
  display: flex;
  justify-content: space-between;
  line-height: 33px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: -225px -156px;
  .left{
    display: flex;
  }
  .title{
    color: #333333;
    font-size: 20px;
  }
  .links{
    margin: 0 0 0 20px;
    color: #666;
    display: flex;
    &-item{
      cursor: pointer;
    }
    &-item::after{
      content: '|';
      margin: 0 10px;
    }
    &-item:last-child::after{
      content: ' ';
    }
  }
  .more{
    cursor: pointer;
  }
`

export {
  ThemeHeaderWrapper
}