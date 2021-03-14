import React, {memo} from 'react';
import {NavLink} from "react-router-dom";
import { Input,Button } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import {ContentLeft, ContentRight, HeaderWrapper} from "@/components/app-header/style";
import {headerLinks} from "@/common/local-data";
export default memo(function AppHeader(props) {
  //const [showBottom,SetShowBottom] = useState(true)
  const showSelectItem = (item, index)=>{
    if(index >=  3){
      return (
          <a key={item.path} className='navLink' href={item.path}>{item.name}</a>
      )
    }else {
      return (
          <NavLink key={item.path} to={item.path} className='navLink' activeClassName='navLink-active'>{item.name}</NavLink>
      )
    }
  }
  // useEffect(()=>{
  //   console.log('我被调用了')
  //   if(window.location.pathname === '/home'){
  //     SetShowBottom(false)
  //   }
  // },[window.location.pathname])
  return (
      <HeaderWrapper>
        <div className='topNavBar'>
          <div className='mainContent'>
            <ContentLeft>
              <div className='logo'>
                <a href="/">网易云音乐</a>
              </div>
              {
                headerLinks.map((item,index)=>{
                  return (
                      showSelectItem(item, index)
                  )
                })
              }
            </ContentLeft>
            <ContentRight>
              <Input className='searchInput' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>} />
              <Button className='btn' shape='round'>创作者中心</Button>
              <div className='login'>
                <a href="/#" >登录</a>
              </div>
            </ContentRight>
          </div>
        </div>
        {/*//{showBottom && }*/}
        <div className='bottomNavBar'>

        </div>
      </HeaderWrapper>
  );
})

