import React,{memo} from 'react';
import {
  ThemeHeaderWrapper
} from "./style";

function ThemeHeaderRmc(props) {
  const {title,links=[]} = props

  return (
    <ThemeHeaderWrapper>
      <div className='left'>
        <h2>{title}</h2>
        <div className='links'>
          {
            links.map(item => {
              return (
                <div className='links-item'>
                  <a href='todo'> </a>
                  <span>{item}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='more'>
        <span>更多</span>
      </div>
    </ThemeHeaderWrapper>
  );
}

export default memo(ThemeHeaderRmc);