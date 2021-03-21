import React,{ memo } from 'react';
import {
    FootWrapper
} from "./style";
import {footerLinks,footerImages} from "../../common/local-data";

export default memo(function AppFooter(props) {
 return (
  <FootWrapper>
    <div className="content">
        <div className="content-left">
            <div className='links'>
                {
                    footerLinks.map(item=>{
                        return (
                            <div key={item.name} className='link-item'>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <p className="right">
                <span>网易公司版权所有©1997-2021</span>
                <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
            </p>
            <p className='right'>
                <span>违法和不良信息举报电话：0571-89853516举报邮箱：ncm5990@163.com</span>
            </p>
            <p className='right'>
                <span>粤B2-20090191-18  工业和信息化部备案管理系统网站 </span>
            </p>
        </div>
        <div className="content-right">
            <ul className="footer-image">
                {
                    footerImages.map(item=>{
                        return(
                            <li className='image-item' key={item.link}>
                                <a href={item.link}> </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  </FootWrapper>
 );})

