import React,{ memo } from 'react';

import {HomeWrapper} from "@/pages/home/style";
import {homeLinks} from "@/common/local-data";
import {NavLink} from "react-router-dom";
import {renderRoutes} from "react-router-config";

export default memo(function Home(props) {
 return (
  <HomeWrapper>
    <div className='topNavBar'>
      <div className='topNavBar-content'>
        {
          homeLinks.map((item,index)=>{
            return (
                <NavLink exact key={item.path} to={item.path}
                         className='topNavBar-content-item'
                         activeClassName='topNavBar-content-item-active'>
                  <span>{item.name}</span>
                </NavLink>
            )
          })
        }
      </div>
    </div>
    {renderRoutes(props.route.routes)}
  </HomeWrapper>
 );})

