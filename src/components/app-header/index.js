import React, {memo} from 'react';
import {NavLink} from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import {ContentLeft, ContentRight, HeaderWrapper} from "@/components/app-header/style";
import headerLinks from "@/common/local-data";
export default memo(function AppHeader(props) {
  const showSelectItem = (item, index)=>{
    if(index >=  3){
      return (
          <a key={item.path} className='navLink' href={item.path}>{item.name}</a>
      )
    }else {
      return (
          <NavLink key={item.path} exact to={item.path} className='navLink' activeClassName='navLink-active'>{item.name}</NavLink>
      )
    }
  }

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
            </ContentRight>
          </div>
        </div>
        <div className='bottomNavBar'>
        </div>
      </HeaderWrapper>
  );
})

