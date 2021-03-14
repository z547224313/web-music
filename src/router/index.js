import { Redirect } from 'react-router-dom';

import Home from '@/pages/home';
import Mine from '@/pages/mine';
import Friends from '@/pages/friends';
import Recommend from '@/pages/home/c-pages/recommend';
import TopList from '@/pages/home/c-pages/topList';
import PlayList from '@/pages/home/c-pages/playlist';
import DjRadio from '@/pages/home/c-pages/djRadio';
import Album from '@/pages/home/c-pages/album';
import Artist from '@/pages/home/c-pages/artist';
const route = [
  {
    path:'/',
    exact:true,
    name:'发现音乐',
    render:()=>{
      return <Redirect to='/home'/>
    }
  },
  {
    path:'/home',
    component:Home,
    routes:[
      {
        path:'/home',
        exact:true,
        render:()=>{
          return <Redirect to='/home/recommend'/>
        }
      },
      {
        path:'/home/recommend',
        component:Recommend
      },
      {
        path:'/home/topList',
        component:TopList
      },
      {
        path:'/home/playList',
        component:PlayList
      },
      {
        path:'/home/djRadio',
        component:DjRadio
      },
      {
        path:'/home/artist',
        component:Artist
      },
      {
        path:'/home/album',
        component:Album
      },
    ]
  },
  {
    path:'/mine',
    name:'我的音乐',
    component:Mine
  },
  {
    path:'/',
    name:'朋友',
    component:Friends
  }
]
export default route
